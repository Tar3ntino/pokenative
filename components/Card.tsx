import { View, ViewProps, ViewStyle } from "react-native";
import { Shadows } from "./Shadows";
import { UseThemeColors } from "@/hook/UseThemeColors";

type Props = ViewProps

export function Card({style, ...rest}: Props){
    const colors = UseThemeColors()
return <View style={[style, styles, {backgroundColor: colors.grayWhite} ]} {...rest}/>
}

const styles = {
    borderRadius: 8,
    overflow: 'hidden',
    ...Shadows.dp2
} satisfies ViewStyle