import React from "react";
import api from "../../../services/api";

import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

import styles from "./styles";

class PendingItem extends React.Component<any, any> {
  like = async (id: string) => {
    //const { navigation } = this.props;
    const { data } = await api.put(`/accept/${id}`);
    this.props.funcAtt();
  };
  dislike = async (id: string) => {
    //const { navigation } = this.props;
    await api.delete(`/decline/${id}`);
    this.props.funcAtt();
  };
  render() {
    const { peding } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{peding.joke}</Text>
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity onPress={(e) => this.dislike(peding._id)}>
            <Feather name="thumbs-down" size={20} style={styles.infoDislike} />
          </TouchableOpacity>
          <TouchableOpacity onPress={(e) => this.like(peding._id)}>
            <Feather name="thumbs-up" size={20} style={styles.infoLike} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PendingItem;
