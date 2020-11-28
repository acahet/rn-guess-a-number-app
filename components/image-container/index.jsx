import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ImageContainer = (props) => (
	<View style={styles.container}>
		<Image {...props} style={[styles.image, props.style]} />
	</View>
);

const styles = StyleSheet.create({
	container: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: 'black',
		overflow: 'hidden',
	},
	image: {
		width: '100%',
		height: '100%',
	},
});

export default ImageContainer;
