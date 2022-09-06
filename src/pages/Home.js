import react from "react";

import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default function Home (){
    return(
      <View style={styles.container}>
          <Text style={styles.titulo}>Meus Filmes</Text>
          <Text style={styles.Subtitulo}>Olá Luiz, boa noite!</Text>

           <TextInput
                style={styles.campo}
                placeholder="Nome do Filme"
           />

          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Adicionar</Text>
          </TouchableOpacity>


      </View>
    );
}

//Criando os estilos
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#30478C',
        paddingVertical:70,
        paddingHorizontal: 20
    },

    titulo:{
        fontSize:30,
        fontWeight: 'bold',
        marginBottom:10,
        color: '#FFD700',
        alignItems: "center"
    },

    Subtitulo:{
        color: '#FFF',
        fontSize: 15
    },
    
    campo:{
        backgroundColor: '#1F1E25',
        color: '#FFF',
        fontsize: 18,
        marginTop: 30,
        borderRadius: 7,
        padding: 15
    },

    greeting: {
        color: '#FFF'
    },

    button: {
        backgroundColor: '#A370F7',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },

    buttonText: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },

}); //Fim dos estilos