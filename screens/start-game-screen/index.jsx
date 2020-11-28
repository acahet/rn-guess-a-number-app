import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import Card from '../../components/card';
import ButtonContainer from '../../components/button-container';
import CustomButton from '../../components/custom-button';
import Colors from '../../components/constants/colors';
import Input from '../../components/input-field';
import NumberContainer from '../../components/number-container';
import colors from '../../components/constants/colors';
import BodyText from '../../components/body-text';
import fonts from '../../components/constants/fonts';

const StartGameScreen = ({ onStartGame }) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [selectedNumber, setSelectedNumber] = useState('');
	const [confirmed, setConfirmed] = useState(false);

	const numberInputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};
	const resetInputHandler = () => {
		setEnteredValue('');
		setConfirmed(false);
	};
	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);
		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid number!', 'Number has to be between 1-99.', [
				{
					text: 'Okay',
					style: 'destructive',
					onPress: resetInputHandler,
				},
			]);
			return;
		}
		setConfirmed(true);
		setSelectedNumber(chosenNumber);
		setEnteredValue('');
		Keyboard.dismiss();
	};

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = (
			<Card style={styles.summary}>
				<BodyText>You Selected</BodyText>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<CustomButton
					style={{ color: colors.primary }}
					onPress={() => onStartGame(selectedNumber)}
				>
					Start Game
				</CustomButton>
			</Card>
		);
	}
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<BodyText>Start a new game!!!</BodyText>
				<Card style={styles.card}>
					<BodyText>Select a number</BodyText>
					<Input
						style={styles.input}
						keyboardType="number-pad"
						blurOnSubmit
						maxLength={2}
						onChangeText={numberInputHandler}
						value={enteredValue}
					/>
					<ButtonContainer>
						<CustomButton onPress={resetInputHandler}>
							Reset
						</CustomButton>
						<CustomButton onPress={confirmInputHandler}>
							Confirm
						</CustomButton>
					</ButtonContainer>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
		fontFamily: fonts.primary,
	},
	input: {
		height: 60,
		padding: 5,
		marginBottom: 30,
		width: '30%',
		textAlign: 'center',
	},
	card: {
		width: '80%',
		minWidth: 300,
		maxWidth: '95%',
		alignItems: 'center',
	},
	summary: {
		margin: 20,
		alignItems: 'center',
	},
});
export default StartGameScreen;
