import React, { createContext, useContext, useState } from 'react';

// O'yin holatini saqlash uchun context yaratamiz
const GameContext = createContext();

// O'yin holati bilan ishlash uchun custom hook
export const useGameContext = () => useContext(GameContext);

// GameContext.Provider komponenti
export const GameProvider = ({ children }) => {
  // O'yinning global holati (state)
  const [players, setPlayers] = useState([]);      // O'yinchilar ro'yxati
  const [currentPlayer, setCurrentPlayer] = useState(null); // Hozirgi o'yinchi
  const [gameStarted, setGameStarted] = useState(false);   // O'yin boshlangani yoki yo'qligini tekshirish
  const [chatMessages, setChatMessages] = useState([]);    // Chat xabarlari

  // O'yinchilarni qo'shish
  const addPlayer = (player) => {
    setPlayers([...players, player]);
  };

  // O'yinni boshlash
  const startGame = () => {
    setGameStarted(true);
  };

  // Chatga xabar qo'shish
  const addChatMessage = (message) => {
    setChatMessages([...chatMessages, message]);
  };

  // O'yinchi o'zgartirish
  const setActivePlayer = (player) => {
    setCurrentPlayer(player);
  };

  return (
    <GameContext.Provider
      value={{
        players,
        currentPlayer,
        gameStarted,
        chatMessages,
        addPlayer,
        startGame,
        addChatMessage,
        setActivePlayer,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
