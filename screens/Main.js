import {Button, View, Text} from "react-native";

const Main = ({navigation}) => {
  return (
    <View>
      <Text>Главная страница</Text>
      <Button title="Контакты" onPress={()=>{navigation.navigate("Contacts", {
        id: 1,
        name: 'Alex'
      })}}/>
      <Button title="Профиль" onPress={()=>{navigation.navigate("Profile" , {
        id: 13,
        name: 'Alex'
      })}}/>
      <Button title="Счет" onPress={()=>{navigation.navigate("Counter" )}}/>
      <Button title="rout" onPress={()=>{navigation.navigate("Routing" )}}/>

    </View>
  );
};

export default Main;
