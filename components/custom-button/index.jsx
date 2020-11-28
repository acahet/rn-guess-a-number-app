import { useFonts } from 'expo-font';
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import colors from '../constants/colors';
import fonts from '../constants/fonts';

const CustomButton = ({ style, children, onPress }) => {
	return (
		<TouchableOpacity activeOpacity={0.6} onPress={onPress}>
			<View style={[styles.button, style]}>
				<Text style={styles.button_text}>{children}</Text>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 10,
		width: '100%',
	},
	button_text: {
		color: 'white',
		fontFamily: fonts.regular,
		fontSize: 16,
		width: '100%',
	},
});
export default CustomButton;
