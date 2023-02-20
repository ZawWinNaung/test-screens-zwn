import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 16,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  image: {
    width: 30,
    height: 30,
    marginVertical: 8,
    marginEnd: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#888888",
    backgroundColor: "white",
    color: "#120438",
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
  },
  title2: {
    marginVertical: 16,
    fontSize: 20,
    fontWeight: "bold",
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
    backgroundColor: "#0053a7",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textTransform: "uppercase",
    fontFamily: "sans-serif-light",
  },
  errorText: {
    color: "red",
    alignSelf: "stretch",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
});

export default styles;
