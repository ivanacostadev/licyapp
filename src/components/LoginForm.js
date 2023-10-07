import React from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    ScrollView,
    TouchableOpacity,
    Button,
  } from "react-native";
  import styles from "../Styles";
  import { useLogin } from "../context/LoginProvider";
import { LinearGradient } from "expo-linear-gradient";
import axios from "axios";
import * as Device from "expo-device";
//import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_ENDPOINT } from "../../env";



const LoginForm=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLoggedIn } = useLogin();
 


  const [seePassword, setSeePassword] = useState(true);
  const [checkEmail, setCheckEmail] = useState(false);


      //VALIDACIONES
  const handleCheckEmail = (text) => {
    let re = /\S+@\S+\.\S+/;
    let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    setEmail(text);
    if (re.test(text) || regex.test(text)) {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
  };
  const checkPasswordValidity = (value) => {
    const isNonWhiteSpace = /^\S*$/;
    if (!isNonWhiteSpace.test(value)) {
      alert("La clave no debe tener espacios en blanco");
    }
    return null;
  };


  //SUBMIT 
  const handleSubmit = async() =>{
    // console.log(email,password)
    //Se valida la estructura del password
    const checkPassword = checkPasswordValidity(password);
    if(!checkPassword){
     //Una verz validado el password se genera la peticion
     try{
       const formData = new FormData();
       formData.append("email", email);
       formData.append("password", password);
       formData.append("device", sysop);
       const response = await axios.post(
         API_ENDPOINT,
         formData,{
           headers:{
             "Content-Type": "multipart/form-data",
           },
         }
       );
       const estatus = response.data["estatus"];
       const resp = response.data;
       const usertemp = resp.data["usuario_id"];
       const JWT_Token = response.data["token"];
      
 
       //SI RESPUESTA DEL SERVIDOR == 1: LOGIN EXITOSO
       if(estatus==1){
        setIsLoggedIn(true);
 
   
 
        gotoHomeViews()
         /*console.log(usertemp)
         console.log(JWT_Token)
         console.log(sysop)
         console.log(logged)*/
 
 
       }
       else{
         //respuesta del server
         alert(resp)
       }
 
 
     }
     catch(error){
       alert("Su clave o email son invalidos:Verifique los datos enviados")
     }
    }
    else{
     alert("Hay un error en su clave de acceso: Verifique los datos enviados.")
    }
 
 
 
   }


    return (
        <LinearGradient
          colors={["#000000", "#000000"]}
          style={styles.linearGradient}
        >
          <ScrollView>
            <View style={styles.containerLogin}>
            <Image
                style={styles.imgintro}
                source={require("../../assets/img/logo.png")}
              />
       
              <View style={styles.cardlogin}>
              <KeyboardAwareScrollView>
              <Text style={styles.txtlog}>Es un gusto verte de nuevo!</Text>
       
              <View>
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="EMAIL"
                  placeholderTextColor="#FFF"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
    
              <View >
                <TextInput
                  style={styles.input}
                  underlineColorAndroid="transparent"
                  placeholder="CONTRASEÑA"
                  placeholderTextColor="#FFF"
                  autoCapitalize="none"
                  value={password}
                  secureTextEntry={seePassword}
                  onChangeText={(text) => setPassword(text)}
                />
    
                <TouchableOpacity
                  style={styles.wrapperIcon}
                  onPress={() => setSeePassword(!seePassword)}
                >
                  <Image
                    source={seePassword ? ImagePath.icEyeOff : ImagePath.icEye}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
    
              {email == "" || password == "" ? (
                <Text style={styles.txtlogsubmit}></Text>
              ) : (
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.txtlogsubmit}>Iniciar Sesi&oacute;n</Text>
                </TouchableOpacity>
              )}
            </KeyboardAwareScrollView>
              </View>
          
            </View>
    
          </ScrollView>
        </LinearGradient>
      );
}