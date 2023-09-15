import React, {Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    }

    this.abrirBiscoito = this.abrirBiscoito.bind(this);

    this.frases = [
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ];
  }

  abrirBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./src/biscoitoAberto.png')
    });
  }

  render(){
    return(
      <View style={style.container}>

        <Image 
          source={this.state.img}
          style={style.img}
        />

        <Text style={style.texto}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={style.botao} onPress={this.abrirBiscoito}>
          <View style={style.btnArea}>
            <Text style={style.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D2E3FC'
  },
  img:{
    width:200,
    height:200
  },
  texto:{
    color: '#dd2b22',
    fontSize: 20,
    textAlign:'center',
    fontStyle:'italic',
    margin:20
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25 
  },
  btnArea:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})

export default App;