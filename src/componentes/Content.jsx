import React, {useState} from 'react';
import { Text, View, TextInput, Button, StyleSheet, Image} from 'react-native';
import { styles } from '../../Style/style1';
import Informacao from './Informacao';
import Imc from './Imc';


export default function Content(){
    return(
        <View style={styles.content}>

            <View style={styles.content1}> 
                <Text style={styles.textContent}>Seja Bem Vindo ao Soul Health</Text>
                <Informacao boasvindas='Informamos sobre massagens, técnicas de meditação e tudo o que pode fazer para promover o bem-estar, melhorando sua qualidade de vida e auto-estima, com dicas práticas e simples, para vencer as dificuldades da vida e assim viver mais feliz e confiante.'/> 
                <Image style={styles.imgContent} source={require('../../img/silhueta.png')}/>
            </View>

            <View style={styles.content1}>
                <Text style={styles.textContent1}>Notícias</Text>
                <Informacao titulo={`7 dicas para controlar a ansiedade e o nervosismo \n `} autor={`Dr. Arthur Frazão \n `} conteudo='A ansiedade pode gerar sintomas físicos e psicológicos, como sensação de falta de ar, aperto no peito, tremores ou pensamentos negativos, por exemplo, que podem condicionar o dia-a-dia da pessoa e aumentar o risco de contrair doenças.'/>

                <Informacao  titulo={`6 dicas para sair do sedentarismo \n `} autor={`Carlos Bruce \n `}conteudo='Para sair do sedentarismo deve-se começar aos poucos e criar metas possíveis e alcançáveis para não perder a motivação, e para isso, pode-se começar com pequenas mudanças nos hábitos de vida como reduzir o uso do carro ou substituir o elevador pelas escadas, além de estabelecer uma rotina com um horário específico para cuidar da saúde e movimentar o corpo.'/>

                <Informacao titulo={`Contém Glúten \n ` } autor={`Tiago Dantas \n `} conteudo='O glúten é uma proteína presente no trigo e seus derivados. É importante na fabricação de pães, pois é a proteína que dá liga à massa, além de ajudar o pão a crescer. A farinha de trigo é a maior fonte de glúten para a nossa alimentação.'/>
            </View>

            <View style={styles.content1}>
                    <Image style={styles.imgContent3} source={require('../../img/barra.png')}/>
                    <Text style={styles.textContent1}>IMC</Text>
                    <Informacao style={styles.textContent2} infoImc='A classificação do índice de massa corporal (IMC), pode ajudar a identificar obesidade ou desnutrição em crianças, adolescentes, adultos e idosos.Além de saber qual é o seu IMC, essa calculadora também indica qual deve ser o seu peso ideal e quantas calorias você deve ingerir para alcançar a sua melhor forma, e assim melhorar sua qualidade de vida, garantindo o seu bem estar.'/> 
                    <Imc/>
            </View>

            <View style={styles.content1}>
                    <Image style={styles.imgContent2} source={require('../../img/exer.png')}/>
                    <Text style={styles.textContent}>Dicas de Exercícios</Text>    
                    <Informacao titulo='10 melhores exercícios para emagrecer' autor='Carlos Bruce' conteudo='Os melhores exercícios para emagrecer são aqueles que gastam muitas calorias em pouco tempo, como acontece no caso da corrida ou da natação. Mas para emagrecer de forma eficiente e manter os resultados também é fundamental combinar estes com exercícios de musculação que devem ser realizados na academia, com a supervisão de um preparador físico.'/>

                            
                    <Informacao titulo='Como peixe na água: benefícios de treinar em meio aquático' autor='Ana Andrade' conteudo='Os benefícios da prática de exercício físico na água, como a natação, a hidroginástica ou até uma simples caminhada na piscina destacam-se pela capacidade de conseguir trabalhar todo o corpo, gastando muita energia, mas minimizando o impacto, uma vez que a água diminui o efeito compressivo da gravidade e o stress articular e muscular.'/>
                </View>


        </View>
    )    
}