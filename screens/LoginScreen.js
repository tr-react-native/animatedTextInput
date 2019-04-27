
import React, {Component} from 'react';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';


import {
    Dimensions,
    Text,
    View,
    KeyboardAvoidingView,ImageBackground,TouchableWithoutFeedback,TouchableOpacity,Keyboard
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const DismissKeyboardHOC = (Comp) => {
    return ({ children, ...props }) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Comp {...props}>
                {children}
            </Comp>
        </TouchableWithoutFeedback>
    );
};
const DismissKeyboardView = DismissKeyboardHOC(View)

export default class LoginScreen extends React.Component {
    async componentDidMount(){


    }
    constructor(props) {
        super(props);
        this.state = {

            showIcon:false,
            showPassword:false
        };
    }
    render() {
        const {navigate} = this.props.navigation;
        return (

            <DismissKeyboardView>

                <ImageBackground source={require('../assets/login-bg.png')} style={{width: '100%', height: '100%'}}>

                    <KeyboardAvoidingView behavior="padding" enabled style={{position:'absolute',bottom:screenHeight/5, left:screenWidth/8}}>
                        <Text style={{fontWeight:'500',color:'rgb(8,89,127)',fontSize:30,marginBottom:30}}>
                            Hoşgeldiniz,
                        </Text>
                        <Text style={{color:'rgb(160,160,160)',marginBottom:30}}>
                            Kullanıcı bilgilerinizle giriş yapabilirsiniz. {"\n"}
                            Lütfen giriş bilgilerinizi kimseyle paylaşmayın.
                        </Text>
                        <Sae
                            label={'Kullanıcı adınız..'}
                            iconClass={FontAwesomeIcon}
                            iconName={'pencil'}
                            iconColor={'rgb(32,91,141)'}
                            inputPadding={16}
                            labelHeight={24}
                            // active border height
                            borderHeight={2}
                            // TextInput props
                            autoCapitalize={'none'}
                            autoCorrect={false}
                        />

                        <View style={{justifyContent:'space-around'}}>
                            <Sae
                                style={{marginTop:10}}
                                label={'Şifreniz..'}
                                iconClass={Icon}
                                iconName={'pencil'}
                                iconColor={'rgb(32,91,141)'}
                                inputPadding={16}
                                labelHeight={24}
                                // active border height
                                borderHeight={2}
                                // TextInput props
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                secureTextEntry={this.state.showPassword ? false : true}
                                onFocus={() => this.setState({
                                    showIcon:true
                                })}i
                                onBlur={() => this.setState({
                                    showIcon:false
                                })}

                            />

                            {this.state.showIcon ?
                                <TouchableOpacity
                                    onPress={()=>{
                                        this.setState({
                                            showPassword: !this.state.showPassword
                                        })
                                    }}
                                    style={{position:'absolute',right:20,bottom:10}}>
                                    <Icon
                                        name={this.state.showPassword ? 'eye-slash' : 'eye'}  color={'rgb(32,91,141)'} size={20}/>
                                </TouchableOpacity>
                                : null}


                        </View>

                        <TouchableOpacity style={{backgroundColor:'rgb(32,91,141)',borderRadius:30,paddingVertical:16,marginTop:50,marginBottom:20}}
                                          onPress={()=>{
                                              navigate('CheckOut')
                                          }}>
                            <Text style={{textAlign:'center',fontSize:14,fontWeight:'700',color:'white'}}>GİRİŞ YAP</Text>
                        </TouchableOpacity>

                        <Text style={{textAlign:'center',color:'rgb(32,91,141)',marginBottom:50}}>
                            Şifremi Unuttum
                        </Text>

                    </KeyboardAvoidingView>


                </ImageBackground>

            </DismissKeyboardView>



        )
    }

}


