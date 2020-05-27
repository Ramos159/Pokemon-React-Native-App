import React, { ReactElement } from 'react';
import {
  SafeAreaView,
  Text,
  Modal,
  StyleSheet,
} from 'react-native';
import {
  Button,
} from 'react-native-elements';

interface Props{
    visible:boolean,
    // hook type
    changeVisibility: (boolean) => void
}

// stylesheet
const styles = StyleSheet.create({
  button: {
    width: 200,
    paddingTop: 20,
    paddingBottom: 20,
    alignSelf: 'center',
  },
  text: {
    marginLeft: 15,
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 20,
  },
  bottomText: {
    fontSize: 15,
    textAlign: 'center',
  },
});

export default function InformationModal({ visible, changeVisibility }: Props): ReactElement {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      // may be of use later below
      // onRequestClose={() => {Alert.alert('Modal has been closed.');}}
    >
      <SafeAreaView style={{ marginTop: 50 }}>
        <Text style={styles.text}>App Version: Development Stage</Text>
        <Text style={styles.text}>Author: Edwin Ramos</Text>
        <Text style={styles.bottomText}>Built with React Native, Expo and Typescript</Text>
        <Button style={styles.button} title="close" onPress={() => { changeVisibility(false); }} />
      </SafeAreaView>
    </Modal>
  );
}
