import { Controller } from "react-hook-form";
import { Text, TextInput, View } from "react-native";
import styles from "../styles/styles";

const CustomInput = ({
  control,
  name,
  placeholder,
  rules = {},
  secureTextEntry,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={(props) => (
        <>
          <TextInput
            {...props.field}
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor={"#888888"}
            secureTextEntry={secureTextEntry}
            onChangeText={(text) => props.field.onChange(text)}
          />
          {props.fieldState.error && (
            <Text style={styles.errorText}>
              {props.fieldState.error.message || "Error"}
            </Text>
          )}
        </>
      )}
      rules={rules}
    />
  );
};

export default CustomInput;
