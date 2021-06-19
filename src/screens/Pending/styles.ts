import { StyleSheet } from "react-native";
import { metrics, colors } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
  },
  body: {
    flex: 1,
    backgroundColor: colors.secundary,

    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
});

export default styles;
