import React, { Component } from "react";
import api from "../../services/api";

import { View, FlatList, ActivityIndicator } from "react-native";
import { colors } from "../../styles";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import PendingItem from "./PendingItem";
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

// import { Container } from './styles';

export default class NewJoke extends Component {
  static navigationOptions = {
    title: "Pendentes",
    drawerIcon: ({ focused }: any) => (
      <AntDesign name="staro" size={24} color={focused ? colors.primary : "black"} />
    ),
  };
  state = {
    data: [] as any,
    loading: true,
    refreshing: false,
  };
  async componentDidMount() {
    this.loadPending();
  }
  renderListItem = ({ item }: any) => (
    <PendingItem funcAtt={this.loadPending} peding={item} />
  );

  loadPending = async () => {
    this.setState({ refreshing: true });

    const { data } = await api.get(`/accept`);

    this.setState({ data: data.docs, loading: false, refreshing: false });
  };
  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={(item) => String(item._id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadPending}
        refreshing={refreshing}
        ListEmptyComponent={() => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 50,
            }}
          >
            <Ionicons name="sad-outline" size={60} color="#fff" />
            <Text
              style={{
                fontSize: 20,
                color: "#fff",
              }}
            >
              Nenhuma piada pendente
            </Text>
            <TouchableOpacity
              onPress={() => this.loadPending()}
            >
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 20,
                  color: "#ccc"
                }}
              >
                Atualizar
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    );
  };
  render() {
    const { loading, data } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <>
            {loading ? (
              <ActivityIndicator style={styles.loading} />
            ) : (
              this.renderList()
            )}
          </>
        </View>
      </View>
    );
  }
}
