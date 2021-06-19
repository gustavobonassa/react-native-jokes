import React, { Component } from "react";
import api from "../../services/api";

import { AntDesign } from '@expo/vector-icons';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { colors } from "../../styles";
import styles from "./styles";

// import { Container } from './styles';

export default class NewJoke extends Component {
  static navigationOptions = {
    title: "Nova piada",
    drawerIcon: ({ focused }: any) => (
      <AntDesign name="plus" size={24} color={focused ? colors.primary : "black"} />
    ),
  };
  state = {
    loading: false,
    success: false,
    error: false,
    jk: "",
  };
  sendJoke = async () => {
    const { jk } = this.state;
    if (!jk) {
      return;
    }

    this.setState({ loading: true });

    try {
      const joke = await api.post(`/joke`, { joke: jk });

      this.setState({ loading: false, jk: "", success: true });
    } catch (err) {
      this.setState({ loading: false, error: true });
    }
  };
  render() {
    const { loading, success, error } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title}>Digite sua piada</Text>
          {success && (
            <Text style={styles.success}>Piada enviada com sucesso!</Text>
          )}
          {error && (
            <Text style={styles.error}>Não foi possivel enviar sua piada</Text>
          )}
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Digite sua piada"
              numberOfLines={4}
              multiline={true}
              underlineColorAndroid="transparent"
              onChangeText={(jk) => this.setState({ jk, success: false })}
              value={this.state.jk}
            />
            <TouchableOpacity style={styles.button} onPress={() => this.sendJoke()} activeOpacity={0.7}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Enviar</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
