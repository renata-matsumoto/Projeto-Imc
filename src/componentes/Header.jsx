
import React, {useState} from 'react';
import { Text, View, TextInput, Button, StyleSheet, Image} from 'react-native';
import { styles } from '../../Style/style1';


export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.textheader}>SoulHealth</Text>
            <Text style={styles.textheader1}>Tudo para sua saúde e bem-estar você encontra aqui</Text>
            <Image style={styles.imgheader} source={require("../../img/saude.png")}/>
        </View>
    )
}