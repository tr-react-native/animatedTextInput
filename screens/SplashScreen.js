
import React, {Component} from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';


import {
    Dimensions,
    Text,
    View,
    Alert,ImageBackground,Image,TouchableWithoutFeedback,TouchableOpacity,Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationActions, StackActions} from "react-navigation";


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const loginAction = StackActions.reset({
    index:0,
    params:{},
    actions:[NavigationActions.navigate({
        routeName:'Login'
    })]
});


export default class LoginScreen extends React.Component {

    componentDidMount()
    {
        console.log('did Mount');
        setTimeout(()=>{
            this.goToApp();
        },750);
    }
    goToApp = () => {
        this.props.navigation.dispatch(loginAction)
    }
    render() {
        const {navigate} = this.props.navigation;
        return (

            <Image source={require('../assets/splash-bg.png')} style={{width:screenWidth,height:screenHeight}}>

            </Image>
        )
    }

}


