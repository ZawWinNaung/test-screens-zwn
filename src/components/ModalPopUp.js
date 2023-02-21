import { Modal, View } from "react-native";
import styles from "../styles/styles";

const ModalPopUp = (props) => {
  return (
    <Modal transparent visible={props.visible} animationType={"slide"}>
      <View style={styles.modalBackground}>
        <View style={[styles.modalContainer]}>{props.children}</View>
      </View>
    </Modal>
  );
};

export default ModalPopUp;
