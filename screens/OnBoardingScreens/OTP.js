import React, { Component } from 'react';
import { View, Text, Button, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Ionicons } from '@expo/vector-icons';



const OTP = props => {
    const [timer, setTimer] = React.useState(60);

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    return prevTimer;
                }
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    function onComplete(inputtedPin) {
        if (inputtedPin == "YourPinNumber") {
            this.props.navigation.navigate('YourPage')
        }
    }

    const navigation = useNavigation()

    //const name = props.route.params.name
    //console.log(name)
    const name = props.route.params.name
    return (
        <SafeAreaView>
            <View style={styles.title}>
                <Text style={styles.titleStyles}>Verify {name}</Text>
                <Text style={styles.explainOne}>Waiting to automatically detect an SMS sent to</Text>
                <Text style={styles.explainOne}><Text style={styles.explainOne2}>{name}
                </Text> <TouchableOpacity
                    onPress={() => { navigation.navigate("WriteNumberScreen") }}>
                        <Text style={styles.wrongNumber}>
                            Wrong Number?
                        </Text>
                    </TouchableOpacity>
                </Text>
            </View>
            <View style={styles.alignOne}>
                <OTPInputView pinCount={4} style={styles.otpInput}
                    keyboardType="number-pad"
                    autoFocusOnLoad
                    onCodeFilled={(() => navigation.navigate("Home"))}

                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                />

                <View style={styles.viewTwo}>

                    <View style={styles.viewTwoView}>
                        <TouchableOpacity style={styles.flexD} onPress={() => { console.log("Resend SMS") }}>
                            <Ionicons name="send" size={24} color="#25D366" />

                            <Text style={styles.resendSMS}>{` Resend SMS (${timer}s)`}</Text>
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={styles.viewCall}>
                    <TouchableOpacity style={styles.flexD} onPress={() => console.log("Call me")}>
                        <Ionicons name="call" size={24} color="#25D366" />

                        <Text style={styles.textCall}>{` Call me (${timer}s)`}</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    title: {
        alignItems: "center"
    },
    titleStyles: {
        color: "#25D366",
        fontSize: 20,
        fontWeight: "700",
        padding: 10
    },
    explainOne: {
        textAlign: "center",
        fontSize: 13,
        fontWeight: "500",
        width: "75%"
    },

    underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: "#25D366",
        color: "#075E54",
        fontSize: 22
    },

    underlineStyleHighLighted: {
        borderColor: "#25D366ed",
    },
    alignOne: {
        alignItems: "center"
    },
    otpInput: { width: '80%', height: 200 },
    explainOne2: { fontWeight: "700", fontSize: 14 },
    wrongNumber: { color: "#12C6E6", top: 3 },
    viewTwo: { flexDirection: "row", alignItems: "center", borderBottomWidth: 1, width: '100%', justifyContent: "center", borderBottomColor: "darkgray" },
    viewTwoView: { flexDirection: "row", alignItems: "center", top: -10, right: 75 },
    resendSMS: { color: "#25D366", fontSize: 18, height: 30 },
    viewCall: { flexDirection: "row", alignItems: "center", top: 15, right: 95 },
    textCall: { color: "#25D366", fontSize: 18 },
    flexD: { flexDirection: "row" }

})
export default OTP