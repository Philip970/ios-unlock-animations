import {
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors, Dimensions, Spacings } from "../../configs/design";

interface IOS_IconButtonProps {
  name: any;
  color?: Colors;
  bgColor?: Colors;
  rounded?: boolean;
  size?: "xxxs" | "xxs" | "xs" | "sm" | "lg" | "xl" | "xl" | "xxl" | "xxxl";
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  onPress(): void;
}

const IOS_IconButton: React.FC<IOS_IconButtonProps> = ({
  name,
  color = Colors.dark,
  bgColor = Colors.transparent,
  rounded = false,
  size = "sm",
  disabled = false,
  loading = false,
  style,
  onPress,
}) => {
  const opacity = disabled || loading ? 0.5 : 1;
  const iconStyle =
    bgColor === Colors.transparent
      ? {
          opacity,
          backgroundColor: bgColor,
          width: Dimensions[size] * 0.6,
          height: Dimensions[size] * 0.6,
          borderRadius: rounded ? Dimensions[size] / 2 : Spacings.xxxs,
        }
      : {
          opacity,
          backgroundColor: bgColor,
          width: Dimensions[size],
          height: Dimensions[size],
          margin: Spacings.xxs,
          borderRadius: rounded ? Dimensions[size] / 2 : Spacings.xxxs,
        };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.5}
      style={[styles.icon, iconStyle, style]}
    >
      {loading ? (
        <ActivityIndicator color={Colors.black} />
      ) : (
        <MaterialCommunityIcons
          name={name}
          size={Dimensions[size] * 0.6}
          color={color}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    borderRadius: Spacings.xxxs,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IOS_IconButton;
