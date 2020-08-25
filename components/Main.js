import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

class Main extends React.Component {
  static navigationOptions = {
    title: 'Chatting',
  };

  state = {
    name: '',
  };

  onPress = () =>
    this.props.navigation.navigate('Chat', { name: this.state.name });

  onChangeText = name => this.setState({ name });

  render() {
    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="Barbery"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
        {/* <TextInput 
              style={styles.input}
              placeholder="Your Name here"
              onChangeText={(name) => {this.setState(name)}
              value={this.state.name}
        /> */}
        <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const offset = 24;

const styles = StyleSheet.create({
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  nameInput: {
    height: offset * 2,

    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
    input:{
       marginTop:32,
       height:50,
       borderWidth: StyleSheet.hairlineWidth,
       borderColor: "#808080",
       borderRadius:30,
       paddingHorizontal:16,
       color: "#514E5A",
       fontWeight: "600"
  },
});

export default Main;
