import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import { styles } from '../../Style/style1';

export default function Footer(){
    return (


        <View style={styles.footer}>

            <View style={styles.footer2}>

                <Text style={styles.textFooter}>Desenvolvido por Renata Matsumoto 2021</Text>

            </View>
        </View>
    )
}