import React, { Component } from "react";
import 
{ 
  View,
  Text, 
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert
} 
from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      botao: 'Iniciar',
      ultimo: null
    };

    this.timer = null;

    this.vai - this.vai.bind(this);
    this.limpar - this.limpar.bind(this);
  }

  vai(){
    if(this.timer != null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({botao: 'Iniciar'})
    } else {
      this.timer = setInterval( ()=> {
        this.setState({numero: this.state.numero + 0.1})
      }, 100);
      this.setState({botao: 'Parar'})
    }
  }

  limpar(){
    clearInterval(this.timer);
    this.timer = null;
    this.setState({
      ultimo: this.state.numero,
      botao: 'Iniciar',
      numero: 0
    })
  }

  render(){
    return(
      <View style={styles.container}>

        <Image
          source={require('./src/cronometro.png')}
          style={styles.img}
        />

        <Text style={styles.cronometro}> {this.state.numero.toFixed(1)} </Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={() => this.vai()}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={ () => this.limpar()}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.areaUltumo}>
          <Text style={styles.textoUltimo}>{this.state.ultimo != null ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(1) + ' segundos!' : ""}</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#00aeef',
    justifyContent:"center",
    alignItems:"center"
  },
  img:{
    width:200,
    height:250
  },
  cronometro:{
    marginTop: -150,
    fontSize:60,
    color:"#fff"
  },
  btnArea:{
    marginTop:100,
    flexDirection:"row",
  },
  btn:{
    flex:1,
    backgroundColor:'#fff',
    padding:15,
    margin:15,
    borderRadius: 9,
    alignItems:"center"  
  },
  btnTexto:{
    fontSize:20,
    fontWeight:"bold",
    color:'#00aeef'
  }, 
  areaUltumo:{
    marginTop:20
  },
  textoUltimo:{
    fontSize: 20,
    fontStyle:"italic",
    color:'#fff'
  }
})

export default App;