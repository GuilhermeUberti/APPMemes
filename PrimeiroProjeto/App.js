import React, { Component } from 'react';
import { Text, View, Button, Image, TextInput, StyleSheet } from "react-native";

export default class PrimeiroProjeto extends Component {

  constructor(props) {
    super(props);
    this.state = { textoUm: 'Mimimi 1', textoDois: 'Mimimi 2' };

    this.escrever = this.escrever.bind(this);
  }

  mudarVogais(texto) {
    let novoTexto = texto.toLowerCase();
    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i');
    novoTexto = novoTexto.replace(/(á|à|ã|â|ä)/g, 'i');
    novoTexto = novoTexto.replace(/(é|è|ê|ë)/g, 'i');
    novoTexto = novoTexto.replace(/(í|ì|î|ï)/g, 'i');
    novoTexto = novoTexto.replace(/(ó|ò|ô|ö|õ)/g, 'i');
    novoTexto = novoTexto.replace(/(ú|ù|û|ü)/g, 'i');

    return novoTexto;
  }

  escrever(t) {
    let s = this.state;
    s.textoUm = t;
    s.textoDois = this.mudarVogais(t);
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.body}>

        <View>
          <Text style={styles.titulo}>Criador de Mimimi..</Text>
        </View>

        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite seu mimimi" onChangeText={this.escrever} />
        </View>

        <View style={styles.area}>
          <Text style={[styles.texto, styles.textoUm]}>{this.state.textoUm.toUpperCase()}</Text>
          <Image style={styles.guri} source={require('./img/mimimi.png')} />
          <Text style={[styles.texto, styles.textoDois]}>{this.state.textoDois.toUpperCase()}</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#999999',
    paddingTop: 30,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 30,
    color: '#FFFFFF'
  },
  inputArea: {
    alignSelf: 'stretch'
  },
  input: {
    borderWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#EEEEEE',
    color: '#000000',
    height: 40,
    margin: 20,
    padding: 10
  },
  area: {
    width: 350,
    height: 350

  },
  guri: {
    width: 350,
    height: 350,
    marginTop: -70,
    zIndex: 0
  },
  texto: {
    fontSize: 25,
    color: '#FFFFFF',
    padding: 10,
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    textAlign: 'center',
    height: 70
  },
  textoUm: {
    zIndex: 1
  },
  textoDois: {
    zIndex: 1,
    marginTop: -70
  }
});

