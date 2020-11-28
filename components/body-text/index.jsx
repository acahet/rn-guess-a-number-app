import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import fonts from '../constants/fonts';

const BodyText = ({ style, children }) => (
	<View>
		<Text style={[styles.text, style]}>{children}</Text>
	</View>
);

export default BodyText;

const styles = StyleSheet.create({
	text: {
		fontFamily: fonts.regular,
	},
});
