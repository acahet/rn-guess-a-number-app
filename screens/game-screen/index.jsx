import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Alert, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import BodyText from '../../components/body-text';

import Card from '../../components/card';
import colors from '../../components/constants/colors';
import CustomButton from '../../components/custom-button';
import NumberContainer from '../../components/number-container';
import { generateRandomBetween } from '../../utils/helpers';

const renderListItem = (listLength, itemData) => (
	<View style={styles.listItem}>
		<BodyText>Round #{listLength - itemData.index}</BodyText>
		<BodyText>Computer's guess: {itemData.item}</BodyText>
	</View>
);

const GameScreen = ({ userChoice, onGameOver }) => {
	const initialGuess = generateRandomBetween(1, 100, userChoice);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(pastGuesses.length);
		}
	}, [currentGuess, userChoice, onGameOver]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'lower' && currentGuess < userChoice) ||
			(direction === 'greater' && currentGuess > userChoice)
		) {
			Alert.alert("Don't lie!", 'You know that this is wrong... ', [
				{ text: 'Sorry', style: 'cancel' },
			]);
			return;
		}
		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess + 1;
		}
		const nextNumber = generateRandomBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);
		setCurrentGuess(nextNumber);
		setPastGuesses((curPastGuesses) => [
			nextNumber.toString(),
			...curPastGuesses,
		]);
	};

	return (
		<View style={styles.screen}>
			<BodyText>Opponent's Guess</BodyText>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<CustomButton
					style={{ color: colors.primary }}
					onPress={nextGuessHandler.bind(this, 'lower')}
				>
					<Ionicons name="md-remove" size={24} color="white" />
				</CustomButton>
				<CustomButton
					style={{ backgroundColor: colors.secondary }}
					onPress={nextGuessHandler.bind(this, 'greater')}
				>
					<Ionicons name="md-add" size={24} color="white" />
				</CustomButton>
			</Card>
			<View style={styles.listContainer}>
				{/* <ScrollView>
					{pastGuesses.map((guess, index) =>
						renderListItem(guess, pastGuesses.length - index)
					)}
					
				</ScrollView>
					*/}
				<FlatList
					contentContainerStyle={styles.list}
					keyExtractor={(item) => item}
					data={pastGuesses}
					renderItem={renderListItem.bind(this, pastGuesses.length)}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		paddingHorizontal: 10,
		width: 300,
		maxWidth: '100%',
	},
	listContainer: {
		flex: 1,
		width: '80%',
	},
	list: {
		flexGrow: 1,
		width: '90%',
		justifyContent: 'flex-end',
	},
	listItem: {
		marginVertical: 10,
		padding: 15,
		borderColor: '#ccc',
		backgroundColor: 'white',
		borderWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
});

export default GameScreen;
