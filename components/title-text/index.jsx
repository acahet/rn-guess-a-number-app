import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fonts from '../constants/fonts';

const TitleText = ({ style, children }) => (
	<View>
		<Text style={[styles.text, style]}>{children}</Text>
	</View>
);

export default TitleText;

const styles = StyleSheet.create({
	text: {
		fontSize: 18,
		color: 'black',
		fontFamily: fonts.primary,
	},
});
