import React from 'react';
import { View, ActivityIndicator, Text } from "react-native";


export default function LoadingComponent() {

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <ActivityIndicator color="#121212" size={45} />
            <Text>Carregando...</Text>
        </View>
    )
}