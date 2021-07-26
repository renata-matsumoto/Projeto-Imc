import React, {useState} from 'react';
import { Text, View, TextInput, Button, StyleSheet, Image} from 'react-native';
import { styles } from '../../Style/style1';


export default function Informacao(props){
    return (
        <View  style={styles.informacao}>
        
            <View>
                <Text  style={styles.boasVindas}>{props.boasvindas}</Text>
            </View>

            <View>
                <Text style={styles.info}>{props.titulo}</Text>
                <Text style={styles.info1}>{props.autor}</Text>
                <Text style={styles.info1}>{props.conteudo}</Text>
            </View>

            <View>
                <Text style={styles.infoImc}>{props.infoImc}</Text>
            </View>
          

        </View>
    )
}