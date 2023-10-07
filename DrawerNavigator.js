import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import WebViews from "./src/components/WebViews"


const Drawer = createDrawerNavigator();

const CustomDrawer=props=>{
    const { setIsLoggedIn, profile } = useLogin();



  const [NestedDrawerItem, setNestedDrawerItem] = useState("");
  const [NestedDrawerItemLi, setNestedDrawerItemLi] = useState("");
  const [NestedDrawerItemConfig, setNestedDrawerItemConfig] = useState("");
  const NestedDrawerItemAdd = () => {
    if (NestedDrawerItem == true) {
      setNestedDrawerItem(false);
    } else {
      setNestedDrawerItem(true);
    }
  };

  const NestedDrawerItemAddLi = () => {
    if (NestedDrawerItemLi == true) {
      setNestedDrawerItemLi(false);
    } else {
      setNestedDrawerItemLi(true);
    }
  };

  const NestedDrawerItemAddConfig = () => {
    if (NestedDrawerItemConfig == true) {
      setNestedDrawerItemConfig(false);
    } else {
      setNestedDrawerItemConfig(true);
    }
  };
    return(
        <DrawerContentScrollView style={{ backgroundColor: "#000000" }} {...props}>
        <View
          style={{ backgroundColor: "#0101", marginBottom: 30, marginTop: 30 }}
        >
          <Text
            onPress={() => navigation.closeDrawer()}
            style={{
              color: "#fff",
              alignSelf: "flex-end",
              fontSize: 15,
              marginRight: 20,
            }}
          >
            X
          </Text>
  
        </View>
  
  
  
  
        <View id="navigationdrawer" >
        <View>
        <DrawerItem
          style={{ backgroundColor: "#7F0CB2" }}
          label="ADMINISTRACIÓN"
          onPress={() => {
            NestedDrawerItemAdd();
          }}
          icon={() => <Image source={ImagePath.tools} style={styles.icon} />}
          labelStyle={{ color: "white", fontWeight: "400" }}
        />
  
        {NestedDrawerItem == true ? (
          <View>
            <DrawerItem
              label="FLUJOS ANEXOS"
              onPress={() =>
                navigation.navigate(NavigationStrings.HOMEVIEW, {
                  LabelView: "FLUJOSANEXOS",
                })
              }
              icon={() => (
                <Image source={ImagePath.flujosan} style={styles.icon} />
              )}
              labelStyle={{ color: "white", fontWeight: "400" }}
            />
            <DrawerItem
              label="FLUJOS "
              onPress={() =>
                navigation.navigate(NavigationStrings.HOMEVIEW, {
                  LabelView: "FLUJOS",
                })
              }
              icon={() => (
                <Image source={ImagePath.flujos} style={styles.icon} />
              )}
              labelStyle={{ color: "white", fontWeight: "400" }}
            />
          </View>
        ) : null}
  
        <DrawerItem
          style={{ backgroundColor: "#7F0CB2" }}
          label="LICITACIONES"
          onPress={() => {
            NestedDrawerItemAddLi();
          }}
          icon={() => <Image source={ImagePath.licita} style={styles.icon} />}
          labelStyle={{ color: "white", fontWeight: "400" }}
        />
  
        {NestedDrawerItemLi == true ? (
          <View>
            <DrawerItem
              label="NUEVAS LICITACIONES "
              onPress={() =>
                navigation.navigate(NavigationStrings.HOMEVIEW, {
                  LabelView: "NUEVASLICITACIONES",
                })
              }
              icon={() => (
                <Image source={ImagePath.mislic} style={styles.icon} />
              )}
              labelStyle={{ color: "white", fontWeight: "400" }}
            />
            <DrawerItem
              label="MIS LICITACIONES"
              onPress={() =>
                navigation.navigate(NavigationStrings.HOMEVIEW, {
                  LabelView: "MISLICITACIONES",
                })
              }
              icon={() => (
                <Image source={ImagePath.mislicitaciones} style={styles.icon} />
              )}
              labelStyle={{ color: "white", fontWeight: "400" }}
            />
  
            <DrawerItem
              label="MIS FAVORITOS"
              onPress={() =>
                navigation.navigate(NavigationStrings.HOMEVIEW, {
                  LabelView: "FAVORITOS",
                })
              }
              icon={() => (
                <Image source={ImagePath.misfav} style={styles.icon} />
              )}
              labelStyle={{ color: "white", fontWeight: "400" }}
            />
            <DrawerItem
              label="HISTÓRICO"
              onPress={() =>
                navigation.navigate(NavigationStrings.HOMEVIEW, {
                  LabelView: "HISTORICO",
                })
              }
              icon={() => (
                <Image source={ImagePath.historic} style={styles.icon} />
              )}
              labelStyle={{ color: "white", fontWeight: "400" }}
            />
          </View>
        ) : null}
        <DrawerItem
          style={{ backgroundColor: "#7F0CB2" }}
          label="CONFIGURACIÓN"
          onPress={() => {
            NestedDrawerItemAddConfig();
          }}
          icon={() => <Image source={ImagePath.config} style={styles.icon} />}
          labelStyle={{ color: "white", fontWeight: "400" }}
        />
  
        {NestedDrawerItemConfig == true ? (
          <View>
            <DrawerItem
              label="MIS PREFERENCIAS "
              onPress={() =>
                navigation.navigate(NavigationStrings.HOMEVIEW, {
                  LabelView: "PREFERENCIAS",
                })
              }
              icon={() => <Image source={ImagePath.star} style={styles.icon} />}
              labelStyle={{ color: "white", fontWeight: "400" }}
            />
            <DrawerItem
              label="PAGOS"
              onPress={() =>
                navigation.navigate(NavigationStrings.HOMEVIEW, {
                  LabelView: "PAGOS",
                })
              }
              icon={() => (
                <Image source={ImagePath.myacount} style={styles.icon} />
              )}
              labelStyle={{ color: "white", fontWeight: "400" }}
            />
            <DrawerItem
              label="MIS EMPRESAS"
              onPress={() =>
                navigation.navigate(NavigationStrings.HOMEVIEW, {
                  LabelView: "MISEMPRESAS",
                })
              }
              icon={() => (
                <Image source={ImagePath.trade} style={styles.icon} />
              )}
              labelStyle={{ color: "white", fontWeight: "400" }}
            />
  
            <DrawerItem
              label="MIS COLABOLADORES"
              onPress={() =>
                navigation.navigate(NavigationStrings.HOMEVIEW, {
                  LabelView: "COLABORADORES",
                })
              }
              icon={() => (
                <Image source={ImagePath.collab} style={styles.icon} />
              )}
              labelStyle={{ color: "white", fontWeight: "400" }}
            />
            <DrawerItem
              label="MI CUENTA"
              onPress={() =>
                navigation.navigate(NavigationStrings.HOMEVIEW, {
                  LabelView: "MICUENTA",
                })
              }
              icon={() => (
                <Image source={ImagePath.myacount} style={styles.icon} />
              )}
              labelStyle={{ color: "white", fontWeight: "400" }}
            />
          </View>
        ) : null}
  
  
  <DrawerItem
   style={{ backgroundColor: "#7F0CB2",marginTop:170 }}
   label="CERRAR SESION"
   onPress={() => handleLogout()}
   icon={() => (
     <Image source={ImagePath.logout} style={styles.icon} />
   )}
   labelStyle={{ color: "white", fontWeight: "400" }}
  />
      </View>
  
  
  
    </View>
  
      </DrawerContentScrollView>

    )

}



const DrawerNavigator = () => {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: 'transparent',
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitle: '',
        }}
        drawerContent={props => <CustomDrawer {...props} />}
      >
        <Drawer.Screen component={WebViews} name='Home' />

      </Drawer.Navigator>
    );
  };
  
  export default DrawerNavigator;
  


