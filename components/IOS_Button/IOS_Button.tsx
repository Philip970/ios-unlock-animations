import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
} from "react-native";

import { Colors, FontSizes, Dimensions, Spacings } from "../../configs/design";
import IOS_Text from "../IOS_Text";

interface IOS_ButtonProps {
  title: string;
  color?: Colors;
  variant?: "contained" | "outlined" | "text";
  style?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
  onPress(): void;
}

const IOS_Button: React.FC<IOS_ButtonProps> = ({
  title,
  color = Colors.medium,
  variant = "contained",
  disabled = false,
  loading = false,
  style,
  onPress,
}) => {
  const opacity = disabled || loading ? 0.5 : 1;
  const variantStyles: any = {
    contained: {
      button: { backgroundColor: color, opacity },
      text: {},
    },
    outlined: {
      button: {
        borderWidth: 1,
        borderColor: color,
        opacity,
      },
      text: { color },
    },
    text: {
      button: {
        opacity,
        paddingVertical: undefined,
        width: undefined,
        marginVertical: undefined,
      },
      text: {
        color,
        textTransform: "none",
      },
    },
  };

  return (
    <TouchableOpacity
      style={[styles.button, variantStyles[variant].button, style]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.5}
    >
      {loading ? (
        <ActivityIndicator style={styles.loader} color={Colors.white} />
      ) : null}
      <IOS_Text style={[styles.text, variantStyles[variant].text]}>
        {title}
      </IOS_Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: Spacings.xxs,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: Spacings.xs,
    width: "100%",
    marginVertical: Spacings.xs,
  },
  loader: {
    marginRight: Spacings.xxxs,
  },
  text: {
    color: Colors.white,
    fontSize: FontSizes.base,
    textTransform: "uppercase",
    /* fontWeight: "bold", */
  },
});

export default IOS_Button;
