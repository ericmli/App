import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function ButtonCostumized({title}){
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 15,
        width: '50%',
        top: 150,
        alignItems: 'center',
    },
    text:{
        color: '#373737',
    }
})