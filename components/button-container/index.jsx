import React from 'react';
import { View, StyleSheet } from 'react-native';

const ButtonContainer = ({ children }) => {
	return <View style={styles.button__container}>{children}</View>;
};

const styles = StyleSheet.create({
	button__container: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
});
export default ButtonContainer;
