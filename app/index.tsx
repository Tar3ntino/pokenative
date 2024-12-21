
import { Card } from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { getPokemonId } from "@/functions/pokemon";
import { useFetchQuery } from "@/hook/useFetchQuery";
import { UseThemeColors } from "@/hook/UseThemeColors";
import { PokemonCard } from "@/pokemon/PokemonCard";
import { FlatList, Text, Image, SafeAreaView, StyleSheet, View } from "react-native";

export default function Index(){
    const colors = UseThemeColors()
    const {data} = useFetchQuery('/pokemon?limit=21')
    const pokemons = data?.results ?? []
 
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
                        <PokemonCard id={getPokemonId(item.url)} name={item.name} style={{flex: 1/3}}/>
                        )}
                keyExtractor={(item) => item.url}
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
