

import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { styles } from '../../Style/style1';


export default function Imc() {

  const [valor, setValor] = useState({
      altura: 0,
      peso: 0,
  })

    const [calculo, setCalculo] = useState({
        resultado : '',
    });
    
    const handleInputChange = (parametro, value) => {
        setValor({
            ...valor, [parametro]: value
        })
    } 
    
        const calculoImc = () => {
          
           var imc= ( valor.peso / (valor.altura*valor.altura) ).toFixed(2)
        
            if(imc < 17){
                setCalculo({
                    ...calculo, resultado: `${imc}. \n\nVocê está muito abaixo do peso.`
                })
            }else if ((imc >= 17 && imc<=18.4)){
                setCalculo({
                    ...calculo, resultado:`${imc}. \n\nVocê está no peso ideal, tem menores chances de ter problemas cardiacos e vasculares.`
                })

            } else if (imc >=18.5 && imc <= 24.9 ){
                setCalculo({
                    ...calculo, resultado:`${imc}. \n\nVocê está no peso ideal, tem menores chances de ter problemas cardiacos e vasculares.`
                })
            }  else if (imc >= 25 && imc <= 29.9){
                setCalculo({
                    ...calculo, resultado:`${imc}. \n\nVocê está acima do peso, maior probalidade de fadiga, má circulação e varizes.`
                })
            }  else if (imc >= 30){
                setCalculo({
                    ...calculo, resultado:`${imc}. \n\nMenino, Cuidado. Olha o Fogo!!!!!!`
                })
            }
        }


    return (


        <View style={styles.imcContent2}>

            <View style={styles.linha1}>
                <TextInput style={styles.imcLinha} placeholder="Coloque seu peso, ex: 74.5"
                    keyboardType='numeric'
                    onChangeText={(entrada) => handleInputChange("peso",entrada)
                        } />
                <TextInput style={styles.imcLinha} placeholder="Coloque  sua altura, ex: 1.80"
                    keyboardType='numeric'
                    onChangeText={(entrada) => handleInputChange("altura",entrada)
                } />
            </View>    

                <TouchableOpacity style={styles.touchImc} onPress={calculoImc}>
                    <Text style={styles.touchText}>Resultado</Text>         
                </TouchableOpacity>

            <Text>{`O resultado do IMC é:  ${calculo.resultado}`} </Text>
            

        </View>
    )
}