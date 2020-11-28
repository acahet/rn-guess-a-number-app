import React from 'react';
import { View, StyleSheet } from 'react-native';
import BodyText from '../../components/body-text';
import colors from '../../components/constants/colors';
import CustomButton from '../../components/custom-button';
import ImageContainer from '../../components/image-container';
import TitleText from '../../components/title-text';

const GameOver = ({ nrOfRounds, useNumber, newGame }) => {
	return (
		<View style={styles.screen}>
			<View style={styles.text}>
				<TitleText>Game is over!!</TitleText>
				<ImageContainer
					source={require('../../assets/images/success.png')}
				/>

				<BodyText>
					Your phone took {nrOfRounds} rounds to guess correctly
				</BodyText>
				<BodyText>Chosen number was: {useNumber}</BodyText>
			</View>
			<CustomButton style={{ color: colors.primary }} onPress={newGame}>
				New Game
			</CustomButton>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		alignItems: 'center',
		marginHorizontal: 20,
		fontSize: 50,
	},
});

export default GameOver;
