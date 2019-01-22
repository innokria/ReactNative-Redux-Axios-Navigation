import { createStackNavigator } from 'react-navigation';
import { Platform ,Image,View,StyleSheet,Header} from 'react-native';
import React from 'react';
import Home from './Home';
import Friend from './Friend';

// source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
 
 /*


<Image
        style={StyleSheet.absoluteFill}
       
        source={require('./assets/qy.png')}
 

      />
 */

const AppNavigator = createStackNavigator({
   Home: { screen: Home ,navigationOptions: {
      headerTitle: 'QURO',

      
    
       headerStyle: {
           backgroundColor: '#000',
           
           
          },

       
      headerBackground: (
      <Image
        style={StyleSheet.absoluteFill}
       
        source={require('./assets/we.png')}
 

      />
    ),



      headerTitleStyle: Platform.select({
      	android: {
          flex: 0.9,
          color: '#fff',

          textAlign: 'center',
        },
        
      }),
      headerLeft: null,
      headerRight: null,
    },},
    
   Friend: { screen: Friend,navigationOptions: {
      headerTitle: 'QURO CHAT',
      headerTitleStyle: Platform.select({
      	android: {
          flex: 0.8,
          textAlign: 'center',
        },
        
      }),
     
      headerRight: null,
    },},
});

const ImageHeader = props => (
  <View style={{ backgroundColor: '#eee' }}>
    <Image
      style={StyleSheet.absoluteFill}
      source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
    />
    <Header {...props} style={{ backgroundColor: 'transparent' }}/>
  </View>
);

export default AppNavigator;