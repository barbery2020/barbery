import React from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import colors from '../../styles/colors';

function LoginScreen(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'Email'}
        maxLength={50}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        placeholder={'Password'}
        maxLength={20}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        value={password}
      />
      <TouchableOpacity
        style={[styles.button, {backgroundColor: colors.red}]}
        onPress={() => props.navigation.navigate('Home')}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.red,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    alignContent: 'center',
    marginVertical: 40,
    marginHorizontal: 20,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
  },
  textInput: {
    height: 40,
    fontSize: 20,
    borderColor: 'gray',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: colors.light,
    paddingHorizontal: 30,
    paddingVertical: 5,
    margin: 10,
  },
});

export default LoginScreen;