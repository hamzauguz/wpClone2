import React from "react";
import { View, Text, SafeAreaView, Image, Button, StyleSheet, TouchableOpacity, Alert, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/core'


const OnBoarding = () => {
    const navigation = useNavigation()




    return (

        <SafeAreaView style={styles.safeArea}>
            <View style={styles.viewOne}>
                <Text style={styles.welcomeText}>Welcome to WhatsApp</Text>
                <Image style={styles.welcomeImage} source={{ uri: "https://theabbie.github.io/blog/assets/official-whatsapp-background-image.jpg" }} />
            </View>
            <View style={styles.viewTwo}>
                <View>
                    <Text style={styles.explainText}>
                        Tap "Agree and continue" to accept the <Text style={styles.explainColor} >WhatsApp Terms of Service and Privacy Policy</Text>
                    </Text>
                </View>
                <TouchableOpacity style={styles.touchButton} onPress={() => { navigation.navigate("WriteNumberScreen") }}>
                    <Text style={styles.textAgree}>
                        AGREE AND CONTINUE
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between"
    },
    viewOne: {
        alignItems: "center",
        top: 10
    },
    welcomeText: {
        color: "#25D366",
        fontSize: 20,
        fontWeight: "700",
        padding: 5
    },
    welcomeImage: {
        height: 320,
        width: 320,
        borderRadius: 160,
        top: 160
    },
    viewTwo: {
        alignItems: "center",
        width: "90%"
    },
    explainText: {
        fontSize: 12,
        textAlign: "center",
        fontWeight: "600",
        color: "gray",
        bottom: 15
    },
    textAgree: {
        color: "white",
        fontWeight: "bold",
        fontSize: 15

    },
    touchButton: {
        backgroundColor: "#23E068",
        width: "85%",
        height: 35,
        borderRadius: 4,
        alignItems: "center",
        padding: 7
    },
    explainColor: {
        color: "#2097CF"
    }
})

export default OnBoarding