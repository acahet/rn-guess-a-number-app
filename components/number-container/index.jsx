import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

const NumberContainer = ({ children }) => (
	<View style={styles.container}>
		<Text>{children}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		borderWidth: 2,
		borderColor: colors.secondary,
		borderRadius: 10,
		marginVertical: 10,
	},
});

export default NumberContainer;
