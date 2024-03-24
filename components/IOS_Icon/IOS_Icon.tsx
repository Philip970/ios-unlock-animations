import { View, ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Colors, Dimensions } from "../../configs/design";

interface IOS_IconProps {
  name: any;
  size?: "xxxs" | "xxs" | "xs" | "sm" | "lg" | "xl" | "xl" | "xxl" | "xxxl";
  style?: ViewStyle;
  bgColor?: Colors;
  color?: Colors;
}

const IOS_Icon: React.FunctionComponent<IOS_IconProps> = ({
  name,
  size = "sm",
  style,
  bgColor = Colors.transparent,
  color = Colors.medium,
}) => {
  return (
    <View
      style={[
        {
          width: Dimensions[size],
          height: Dimensions[size],
          borderRadius: Dimensions[size] / 2,
          backgroundColor: bgColor,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
    >
      <MaterialCommunityIcons
        name={name}
        size={
          bgColor === Colors.transparent
            ? Dimensions[size]
            : Dimensions[size] * 0.6
        }
        color={color}
      />
    </View>
  );
};

export default IOS_Icon;
