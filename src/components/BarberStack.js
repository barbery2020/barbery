import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import colors from '../styles/colors';

import HomeScreen from '../screen/BarberSide/HomeScreen';
import ServicesListScreen from '../screen/BarberSide/ServicesListScreen';
import ServicesEditScreen from '../screen/BarberSide/ServicesEditScreen';
import ServiceDetailsScreen from '../screen/BarberSide/ServiceDetailsScreen';
import ViewImageScreen from '../screen/BarberSide/ViewImageScreen';
import PackageDetailsScreen from '../screen/BarberSide/PackageDetailsScreen';
import PackagesListScreen from '../screen/BarberSide/PackagesListScreen';
import PackagesEditScreen from '../screen/BarberSide/PackagesEditScreen';
import ProfileScreen from '../screen/BarberSide/ProfileScreen';
import SpecialistScreen from '../screen/BarberSide/SpecialistScreen';
import SpecialistDetailsScreen from '../screen/BarberSide/SpecialistDetailsScreen';
import SpecialistEditScreen from '../screen/BarberSide/SpecialistEditScreen';
import WelcomeScreen from '../screen/BarberSide/WelcomeScreen';
import LoginScreen from '../screen/BarberSide/LoginScreen';
import RegisterScreen from '../screen/BarberSide/RegisterScreen';
import Chat from '../screen/chat/Chat';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default class BarberStack extends Component {
  createWelcomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        // options={{
        //   title: '',
        //   headerStyle: {backgroundColor: colors.red},
        //   headerTintColor: 'white',
        // }}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );

  createServiceStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Services List"
        component={ServicesListScreen}
        options={{
          headerStyle: {backgroundColor: colors.red},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Service Details"
        component={ServiceDetailsScreen}
        options={{
          headerStyle: {backgroundColor: colors.red},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Add New Service"
        component={ServicesEditScreen}
        options={{
          headerStyle: {backgroundColor: colors.red},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Image View"
        component={ViewImageScreen}
        options={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );

  createPackageStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Packages List"
        component={PackagesListScreen}
        options={{
          headerStyle: {backgroundColor: colors.red},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Package Details"
        component={PackageDetailsScreen}
        options={{
          headerStyle: {backgroundColor: colors.red},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Add New Package"
        component={PackagesEditScreen}
        options={{
          headerStyle: {backgroundColor: colors.red},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );

  createSpecialistStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Specialists"
        component={SpecialistScreen}
        options={{
          headerStyle: {backgroundColor: colors.red},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Specialist Details"
        component={SpecialistDetailsScreen}
        options={{
          headerStyle: {backgroundColor: colors.red},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Add Specialist"
        component={SpecialistEditScreen}
        options={{
          headerStyle: {backgroundColor: colors.red},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );

  createChatStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          headerStyle: {backgroundColor: colors.red},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Welcome" children={this.createWelcomeStack} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Services" children={this.createServiceStack} />
          <Drawer.Screen name="Packages" children={this.createPackageStack} />
          <Drawer.Screen
            name="Specialists"
            children={this.createSpecialistStack}
          />
          <Drawer.Screen name="Chat" children={this.createChatStack} />
          <Drawer.Screen name="Logout" children={this.createWelcomeStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
