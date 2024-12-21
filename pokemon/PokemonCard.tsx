import { Card } from "@/components/Card"
import { ThemedText } from "@/components/ThemedText"
import { UseThemeColors } from "@/hook/UseThemeColors"
import { View } from "react-native"
import { Image, StyleSheet, ViewStyle } from "react-native"

type Props = {
    style?: ViewStyle,
    id: number,
    name: string
}

export function PokemonCard({style, id, name}: Props) {
    const colors = UseThemeColors()
return <Card style={[style, styles.card]}>
    <ThemedText style={styles.id} variant="caption" color="grayMedium">#{id.toString().padStart(3, '0')}</ThemedText>
    <Image 
        source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,}}
        width={72}
        height={72}
    />
    <ThemedText>{name}</ThemedText>
    <View style={[styles.shadow, {backgroundColor: colors.grayBackground}]}/>
</Card>
}

const styles = StyleSheet.create({
    card:{
        position: 'relative',
        alignItems: 'center',
        padding: 4
    },
    id:{
        alignSelf: 'flex-end'
    },
    shadow:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 44,
        borderRadius: 7,
        zIndex: -1
    }
})