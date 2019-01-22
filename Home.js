import React from 'react';
import { StyleSheet, Text, View ,Button,StatusBar,Image,ImageBackground,TouchableOpacity} from 'react-native';
//import { WINDOW } from '../assets/config.js';


/*

 <ImageBackground   style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('./assets/splash.png')}>
               
          
          

          </ImageBackground>


           <Image  style={{position: "absolute", bottom: 0, right: 0}}
                 resizeMode='cover' 
                 source={require('./assets/s.png')}>
          
          </Image>

             <Image  style={{position: "absolute", bottom: 0, right: 0,flex:1}}
                 resizeMode='contain'

                 source={require('./assets/ai1.png')}>
          
          </Image>
         



         alignItems: 'center',


             <Button  
       style={{position: "absolute", bottom: 0, right: 0,flex:1}}
            title="Ask Quro Now"
            onPress={() =>
            this.props.navigation.navigate('Friend')
            }
          />  



             <TouchableOpacity
          style={styles.loginScreenButton}
         onPress={() =>
            this.props.navigation.navigate('Friend')
            }
          underlayColor='#fff'>
          <Text style={styles.loginText}>Start chat</Text>
          </TouchableOpacity>



          //bascic button
          loginScreenButton:{
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  }
  <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigate('HomeScreen')}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login</Text>
 </TouchableOpacity>

*/
export default class Home extends React.Component {

  componentDidMount() {
       StatusBar.setHidden(true);
    }
  render() {
    return (
      <View style={styles.container}>



    
           

      
       
   

        
          <ImageBackground   style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('./assets/a.png')}>
               
          
           <TouchableOpacity
          style={styles.loginScreenButton}
         onPress={() =>
            this.props.navigation.navigate('Friend')
            }
          underlayColor='#fff'>
          <Text style={styles.loginText}>Start a chat</Text>
          </TouchableOpacity>

          </ImageBackground>
             


    </View>
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
     width: "100%",
     height:"100%",
    backgroundColor: '#000',
    
    justifyContent: 'center',
  },
  cont: {
    flex: 1,
     width: "59%",
      alignItems: 'center',

    backgroundColor: '#000',
   
  },
  loginScreenButton:{
        flex: 1,
  position: 'absolute',
    marginRight:40,
    marginLeft:140,
   marginTop:300,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#782EDD',
    borderRadius:10,
         alignItems: 'center',
           width: "50%",
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  bgImage: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        width: "100%",
        flexDirection: 'column'
  },
  imgBackground: {
       
        flex: 1 ,
        flexDirection:'row'
},
});