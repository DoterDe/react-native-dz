import React from 'react';
import { Button, View, Text, Image, StyleSheet } from "react-native";  
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Nav = () => {
    return (
        <View> 
            <Text>Страница Регистрации</Text>
            <SafeAreaProvider>
                <SafeAreaView style={styles.container}>
                    <Image
                        style={styles.stretch}
                        source={require('./Wikimedia_Brand_Guidelines_Update_2022_Wikimedia_Logo_Brandmark.png')}  
                    />
                </SafeAreaView>
            </SafeAreaProvider>
        </View>
    );
};

export default Nav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', 
    alignItems: 'center',  
  },
  stretch: {
    width: 200, 
    height: 200,
    resizeMode: 'contain',  
  },
});



// import {Button, View, Text} from "react-native";

// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
// const Nav = ({navigation, route}) => {
 
//   return (
//     <View>
//          <View> 
//             <Text>Страница Регистрации</Text>
//             <SafeAreaProvider>
//                 <SafeAreaView style={styles.container}>
//                     <Image
//                         style={styles.stretch}
//                         source={require('./Wikimedia_Brand_Guidelines_Update_2022_Wikimedia_Logo_Brandmark.png')}  
//                     />
//                 </SafeAreaView>
//             </SafeAreaProvider>
//         </View>
//     </View>
//   );
// };

// export default Nav;
