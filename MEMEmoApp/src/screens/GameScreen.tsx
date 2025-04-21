import React, { useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
  Alert,
} from "react-native";
import styles from "../components/styles";
import { Backend } from "../..";
import { SessionDTO } from "../utilities/backendLibrary/MEMEmoAppBackend";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RootStackParamList = {
  Dashboard: undefined;
  StartGame: undefined;
};

type GameScreenNavigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: GameScreenNavigationProp;
};

type CardType = {
  id: string;
  image: ImageSourcePropType;
  flipped: boolean;
  matched: boolean;
};

const memes: ImageSourcePropType[] = [
  require("../meme/meme_1.jpg"),
  require("../meme/meme_2.jpg"),
  require("../meme/meme_3.jpg"),
  require("../meme/meme_4.jpg"),
  require("../meme/meme_5.jpg"),
  require("../meme/meme_6.jpg"),
  require("../meme/meme_7.jpg"),
  // require("../meme/meme_8.jpg"),
  // require("../meme/meme_9.jpg"),
  // require("../meme/meme_10.jpg"),
];

const generateShuffledCards = (): CardType[] => {
  const pairs = [...memes, ...memes];
  return pairs
    .map(
      (img): CardType => ({
        id: Math.random().toString(),
        image: img,
        flipped: false,
        matched: false,
      })
    )
    .sort(() => Math.random() - 0.5);
};

const saveSession = async (score: number) => {
  try {
    const user = await AsyncStorage.getItem("user");
    let userId = "";

    if (user) {
      const parsedUser = JSON.parse(user); // 👈 zamieniamy string na obiekt
      userId = parsedUser.id;
    }

    const dto = new SessionDTO();
    dto.init({
      userId: userId,
      score: score,
      createdAt: new Date().toString(),
    });
    await Backend.saveSession(dto);
  } catch (error) {}
};

const MemoryGame: React.FC<Props> = ({ navigation }) => {
  const [cards, setCards] = useState<CardType[]>(generateShuffledCards());
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
  const [score, setScore] = useState<number>(0);
  const [lockBoard, setLockBoard] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(4);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  useEffect(() => {
    if (!gameStarted || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setLockBoard(true);
          setGameOver(true);
          Alert.alert("Time is over!", `Score: ${score}`, [
            {
              text: "Save score",
              onPress: async () => {
                navigation.navigate("Dashboard");

                await saveSession(score);
              },
            },
            {
              text: "Try again",
              onPress: async () => {
                saveSession(score);
                navigation.replace("StartGame");
              },
            },
          ]);
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, timeLeft]);

  const handleCardPress = (cardId: string): void => {
    if (!gameStarted || lockBoard || gameOver) return;

    const index = cards.findIndex((card) => card.id === cardId);
    if (cards[index].flipped || cards[index].matched) return;

    const newCards = [...cards];
    newCards[index].flipped = true;
    const newFlipped = [...flippedCards, newCards[index]];
    setCards(newCards);
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setLockBoard(true);
      setTimeout(() => {
        checkMatch(newFlipped, newCards);
      }, 800);
    }
  };

  const checkMatch = (flipped: CardType[], currentCards: CardType[]): void => {
    const [card1, card2] = flipped;

    if (card1.image === card2.image) {
      const updatedCards = currentCards.map((card) =>
        card.id === card1.id || card.id === card2.id
          ? { ...card, matched: true }
          : card
      );
      setCards(updatedCards);
      setScore((prev) => prev + 10);
    } else {
      const updatedCards = currentCards.map((card) =>
        card.id === card1.id || card.id === card2.id
          ? { ...card, flipped: false }
          : card
      );
      setCards(updatedCards);
    }

    setFlippedCards([]);
    setLockBoard(false);
  };

  return (
    <View style={styles.gameContainer}>
      <Text style={styles.score}>Score: {score}</Text>
      <Text style={styles.timer}>Time Left: {timeLeft}s</Text>

      <View style={styles.gameGrid}>
        {cards.map((card) => (
          <TouchableOpacity
            key={card.id}
            style={styles.card}
            onPress={() => handleCardPress(card.id)}
            disabled={
              card.flipped ||
              card.matched ||
              lockBoard ||
              !gameStarted ||
              gameOver
            }
          >
            <Image
              source={
                card.flipped || card.matched
                  ? card.image
                  : require("../meme/qmark.png")
              }
              style={styles.cardImage}
            />
          </TouchableOpacity>
        ))}
        {!gameStarted && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => setGameStarted(true)}
          >
            <Text style={styles.textInButton}>Start</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MemoryGame;
