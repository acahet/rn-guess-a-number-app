import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import TitleText from '../title-text';
const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<TitleText>{title}</TitleText>
		</View>
	);
};
const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 80,
		paddingTop: 36,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		fontWeight: '400',
	},
});

export default Header;
