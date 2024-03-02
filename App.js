import { StyleSheet, SafeAreaView, Platform, ScrollView } from 'react-native';
import PokemonCard from './components/PokemonCard';

export default function App() {
  
  const charmanderData = {
      name: "charmander",
      image: require("./assets/charmander.jpg"),
      type: "Fire",
      hp: 39,
      moves: ["Scratch", "Ember", "Growl", "Leer"],
      weaknesses: ["Water", "Rock"]
  }

  const squirtleData = {
    name: "squirtle",
    image: require("./assets/squirtle.jpg"),
    type: "Water",
    hp: 44,
    moves: ["Tackle", "Water Gun", "Tail Whip", "Withdraw"],
    weaknesses: ["Electric", "Grass"]
  }

  const bulsbasaurData = {
    name: "bulsbasaur",
    image: require("./assets/bulsbasaur.jpg"),
    type: "Grass",
    hp: 45,
    moves: ["Tackles", "Vine Whip", "Growl", "Leech Seed"],
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  }

  const pikachuData = {
    name: "pikachu",
    image: require("./assets/pikachu.jpg"),
    type: "Electric",
    hp: 35,
    moves: ["Quick Attack", "Thunderbolt", "Tail Whip", "Growl"],
    weaknesses: ["Ground"]
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...charmanderData} />
        <PokemonCard {...squirtleData} />
        <PokemonCard {...bulsbasaurData} />
        <PokemonCard {...pikachuData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});
