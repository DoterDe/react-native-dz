import React, { useState } from 'react';
import {Button, View, Text , StyleSheet } from "react-native";

const Counter = ({navigation, route}) => {
    // const {id, name} = route.params
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Счетчик: {count}</Text>
        <View style={styles.buttons}>
          <Button title="Увеличить" onPress={increment} />
          <Button title="Уменьшить" onPress={decrement} />
        </View>
        <Button title="Главная" onPress={()=>{navigation.navigate("Main")}}/>
      </View>
      
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f7f7f7',
    },
    text: {
      fontSize: 30,
      marginBottom: 20,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 200,
    },
  });

export default Counter;
