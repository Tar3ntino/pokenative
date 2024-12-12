
import { Card } from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { UseThemeColors } from "@/hook/UseThemeColors";
import { PokemonCard } from "@/pokemon/PokemonCard";
import { FlatList, Text, Image, SafeAreaView, StyleSheet, View } from "react-native";

export default function Index(){
    const colors = UseThemeColors()
    const pokemons = Array.from({length: 35}, (_, k) => ({
        name: 'Pokémon name',
        id: k + 1 
    }))
    return(
        <SafeAreaView style={[styles.container, {backgroundColor: colors.tint}]}>
          <View style={styles.header}>
            <Image source={require("@/assets/images/pokeball.png")} width={24} height={24}/>
            <ThemedText variant="headline" color="grayDark">Pokédex</ThemedText>
            </View> 

            <Card style={styles.body}>
                <FlatList 
                    data={pokemons} 
                    numColumns={3}
                    contentContainerStyle={[styles.gridGap, styles.list]}
                    columnWrapperStyle={styles.gridGap}
                    renderItem={({item}) => (
                        <PokemonCard id={item.id} name={item.name} style={{flex: 1/3}}/>
                        )}
                keyExtractor={(item) => item.id.toString()}
                />
            </Card>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        gap : 16,
        padding : 12,
    },
    body: {
        flex: 1
    },
    gridGap:{
        gap: 8
    },
    list:{
    padding: 12
  }
})
