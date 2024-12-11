import { Card } from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { UseThemeColors } from "@/hook/UseThemeColors";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Index(){
    const colors = UseThemeColors()
    return(
        <SafeAreaView style={[styles.container, {backgroundColor: colors.tint}]}>
            <Card>
                <ThemedText variant="headline" color="grayDark">Pokédex</ThemedText>
            </Card>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})