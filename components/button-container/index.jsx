import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const ButtonContainer = ({ children }) => {
	return <View style={styles.button__container}>{children}</View>;
};

const styles = StyleSheet.create({
	button__container: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-around',
		paddingHorizontal: 20,
	},
});
export default ButtonContainer;
