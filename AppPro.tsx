import react from "react";

import {View, Text, StatusBar, StyleSheet, useColorScheme} from 'react-native'


const AppPro = (): JSX.Element => {

    const isDarkMode = useColorScheme()

    return (
        <View style = {[styles.container, {backgroundColor: isDarkMode === 'light' ? '#000000' : '#ffffff' }]}>

            <Text style = {isDarkMode ? styles.whiteText : styles.darkText}>Hello World!</Text>
            <StatusBar />
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#000000',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#FFFFFF'
    },
    darkText: {
        color: '#000000'
    },
    
})

export default AppPro;