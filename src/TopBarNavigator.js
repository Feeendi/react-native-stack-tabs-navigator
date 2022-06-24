import { View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import SplashLottie from './SplashLottie'
import SplashScreen from './SplashScreen'
import styles from './styles'
import Profil from './Profil'
import VisiMisi from './VisiMisi'
import BukuTamu from './BukuTamu'

function Beranda() {
  return (
    <View style={styles.topbarnav}>
      <View style={styles.arealogoberanda}>
        <Image
          source={{
            uri: 'https://i.postimg.cc/jjkfRGRy/udb.jpg',
          }}
          style={styles.logoberanda} />
      </View>
    </View>
  )
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName='Beranda'
      screenOptions={{
        tabBarActiveTintColor: "white",
        tabBarlabelStyle: { fontSize: 12 },
        tabBarIndicatorStyle: { backgroundColor: '#e62129', height: 2 },
        tabBarStyle: { backgroundColor: '#303eac' }
      }}
    >
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{ tabBarLabel: 'Beranda' }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{ tabBarLabel: 'Profil' }}
      />
      <Tab.Screen
        name="Visi Misi"
        component={VisiMisi}
        options={{ tabBarLabel: 'Visi Misi' }}
      />
      <Tab.Screen
        name="Buku Tamu"
        component={BukuTamu}
        options={{ tabBarLabel: 'Buku Tamu' }}
      />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();
function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="SplashLottie"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashLottie" component={SplashLottie} />
      <Stack.Screen name="TopBarNavigator" component={MyTabs} />
    </Stack.Navigator>
  )
}

export default function TopBarNavigator() {
  return (
    <NavigationContainer>
      {/* <MyTabs /> */}
      <MyStack />
    </NavigationContainer>
  )
}