import React, { useState, useRef, useMemo, Component } from "react";
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Pressable, Keyboard, InteractionManager, TextInput, Button } from 'react-native'
import PhoneInput from 'react-native-phone-number-input';
import { useNavigation } from '@react-navigation/core'


export default class App extends React.Component {
    state = {
        TextInputValue: '', // for onChangeText handler
        newText: '',
        PhoneInputValue: '',
        username: '',
        password: '',
        validity: true,

    };
    onPress = () => {
        this.setState({
            newText: this.state.TextInputValue,
        });
    }
    goToComponent() {
        this.props.navigation.push('OTP', { userId: this.state.newText })
    }
    render() {
        return (

            < SafeAreaView style={styles.SafeAreaView} >
                <View style={styles.viewOne}  >
                    <Text style={styles.titleone}>Verify your phone number</Text>
                    <View style={styles.viewOnePadding}>
                        <Text style={styles.explainOne}>WhatsApp will send an SMS message to verify your phone number.</Text>
                        <Text style={styles.explainOne}>Enter your country code and phone number:</Text>
                    </View>
                    <View style={styles.viewphoneinput}  >
                        <Text style={styles.phoneinputText}>Select to Country</Text>
                        <PhoneInput
                            placeholder=" "
                            textContainerStyle={styles.textInput}
                            keyboardType="number-pad"
                            defaultCode="TR"

                            containerStyle={{
                                backgroundColor: 'transparent',
                            }}
                        />
                        <TextInput style={styles.textInput2}
                            keyboardType='phone-pad'
                            placeholder="(545) 333-3333"
                            placeholderTextColor='gray'
                            maxLength={10}
                            //onChangeText={TextInputValue => this.setState({ TextInputValue })}
                            onChangeText={(TextInputValue) => {
                                if (TextInputValue.length <= 9) {
                                    this.setState({ password: TextInputValue, validity: true, TextInputValue })
                                }
                                else
                                    this.setState({ password: TextInputValue, validity: false, TextInputValue })
                            }}
                        />




                    </View>

                </View>
                <View style={styles.viewTwo}>

                    <TouchableOpacity //onPress={this.goToComponent.bind(this)}
                        onPress={() => this.props.navigation.navigate('OTP', { name: this.state.TextInputValue })}
                        style={this.state.validity ?
                            styles.inactiveStyle : styles.activeStyle}
                        disabled={Boolean(this.state.password.length < 10)}
                    // onPress={() => this.props.navigation.navigate('OTP', { name: 'Sergio' })}
                    >
                        <Text style={styles.nextstyle}>NEXT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { console.log("Carrier SMS charges may apply") }}

                    >
                        <Text style={styles.smsexplain}>Carrier SMS charges may apply</Text>

                    </TouchableOpacity>

                </View>
            </SafeAreaView >
        )
    }
}
const styles = StyleSheet.create({
    SafeAreaView: {

        alignItems: "center",



    },
    titleone: {

        color: "#25D366",
        fontSize: 20,
        fontWeight: "700",
        padding: 5


    },
    viewOne: {
        justifyContent: "center",
        alignItems: "center",
        width: "95%"

    },
    explainOne: {
        textAlign: "center",
        fontSize: 11,
        fontWeight: "500"
    },
    viewOnePadding: {
        top: 20
    },
    viewTwo: {
        justifyContent: "center",
        alignItems: "center",
        width: "95%",
        top: 250
    },
    textInput: {
        top: 50,
        backgroundColor: 'transparent',
        right: 70,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#25D366',
        borderTopRightRadius: 5
    },
    nextstyle: {
        height: 30,
        width: 70,
        fontSize: 20,
        color: "white",
        textAlign: "center",
        fontWeight: "400",
        padding: 2,
        borderRadius: 2,
        overflow: "hidden"
    },
    smsexplain: {
        top: 30,
        color: "#12C6E6"
    }
    , activeStyle: {
        width: 70,
        backgroundColor: '#25D366',
        alignItems: 'center',
        height: 30
    },
    inactiveStyle: {
        width: 70,
        height: 30,
        backgroundColor: 'gray',
        alignItems: 'center',


    },
    viewphoneinput: { top: 40, width: "90%", right: -12 },
    phoneinputText: { left: 100, top: 35, fontSize: 18, fontWeight: "600" },
    textInput2: { backgroundColor: "transparent", height: 40, width: 150, left: 75, fontSize: 15, top: 6, fontWeight: "600" }
})
