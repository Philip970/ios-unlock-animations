import { Text, TextStyle } from "react-native";

import defaultStyles from "../../configs/styles";
import { Colors, FontSizes, FontWeights } from "../../configs/design";

interface IOS_TextProps {
  children: React.ReactNode;
  color?: Colors;
  style?: TextStyle[] | TextStyle;
  variant?: "xs" | "sm" | "base" | "lg" | "xl" | "xxl" | "xxxl";
  numberOfLines?: number;
  [otherProps: string]: any;
}

const IOS_Text: React.FC<IOS_TextProps> = ({
  children,
  style,
  color = Colors.medium,
  variant = "base",
  numberOfLines,
  ...otherProps
}) => {
  return (
    <Text
      style={[
        defaultStyles.text,
        {
          fontSize: FontSizes[variant],
          fontWeight: FontWeights[variant],
          color,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      {...otherProps}
    >
      {children}
    </Text>
  );
};

export default IOS_Text;
