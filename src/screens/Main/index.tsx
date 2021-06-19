import React, { Component } from "react";
import api from "../../services/api";
import piadas from "./jokes";

import { colors } from "../../styles";
import { AntDesign } from '@expo/vector-icons';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";

// import { Container } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: "Inicio",
    drawerIcon: ({ focused }: any) => (
      <AntDesign name="home" size={24} color={focused ? colors.primary : "black"} />
    ),
  };
  state = {
    joke: "",
    loading: false,
  };
  jokeGenerator = async () => {
    this.setState({
      loading: true,
    });

    try {
      const { data } = await api.get(`/joke`);
      console.log(data)
      this.setState({
        joke: data[0].joke,
        loading: false,
      });
    } catch (error) {
      this.setState({
        joke: piadas[Math.floor(Math.random() * piadas.length)].joke,
        loading: false,
      });
    }
  };
  render() {
    const { joke, loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <StatusBar barStyle="light-content" backgroundColor="#000" />
          <Text style={styles.title}>Gerador de piadas super engraçadas</Text>
          {(joke !== "" || loading) && (
            <View style={styles.jokeContainer}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <Text style={styles.jokeText}>{joke}</Text>
              )}
            </View>
          )}
          <TouchableOpacity style={styles.button} onPress={this.jokeGenerator}>
            <Text style={styles.buttonText}>Gerar piada</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
