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
    padding: metrics.basePadding * 2,
    justifyContent: "center",
    alignItems: "stretch",
  },
  loading: {
    marginTop: metrics.baseMargin * 2,
  },
  title: {
    textAlign: "center",
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold",
  },
  text: {
    textAlign: "center",
    marginTop: metrics.baseMargin,
    fontSize: 15,
    color: colors.light,
    lineHeight: 21,
  },
  error: {
    color: colors.danger,
    textAlign: "center",
    marginTop: metrics.baseMargin,
  },
  success: {
    color: "white",
    textAlign: "center",
    marginTop: metrics.baseMargin,
    backgroundColor: "green",
    borderRadius: metrics.baseRadius,
    padding: 5,
  },
  form: {
    marginTop: metrics.baseMargin * 2,
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default styles;
