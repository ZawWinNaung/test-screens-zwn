import { StyleSheet } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "flex-start",
    backgroundColor: colors.appBackgroundColor,
  },
  image: {
    width: 30,
    height: 30,
    marginVertical: 8,
    marginEnd: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#1d1d1d",
    backgroundColor: "#434343",
    color: "white",
    borderRadius: 8,
    width: "100%",
    marginRight: 8,
    marginVertical: 8,
    padding: 8,
  },
  title1: {
    marginVertical: 20,
    fontSize: 28,
    fontWeight: "bold",
    color: colors.textColor,
  },
  title2: {
    marginVertical: 16,
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textColor,
  },
  termsContainer: {
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonView: {
    alignSelf: "stretch",
    justifyContent: "center",
    borderRadius: 10,
    elevation: 25,
    marginTop: 16,
  },
  loginButton: {
    height: 50,
    backgroundColor: colors.primaryColor,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.textColor,
    fontSize: 16,
    fontFamily: "sans-serif-light",
  },
  errorText: {
    color: "red",
    alignSelf: "stretch",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: colors.appBackgroundColor,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
});

export default styles;
