import { StyleSheet } from "react-native";
import { metrics, colors } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginHorizontal: metrics.baseMargin * 2,
    marginTop: metrics.baseMargin,
  },
  title: {
    fontWeight: "bold",
    color: colors.darker,
    fontSize: 16,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: metrics.baseMargin,
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: colors.light,
  },
  infoLike: {
    color: colors.success,
    padding: 10,
  },
  infoDislike: {
    color: colors.danger,
    padding: 10,
  },
  titleContainer: {
    padding: metrics.basePadding,
  },
});

export default styles;
