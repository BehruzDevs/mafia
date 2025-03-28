// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LobbyPage from './components/LobbyPage';
import GamePage from './components/GamePage';
import ChatPage from './components/ChatPage';
import AdminPage from './components/AdminPage';
import './styles.css';

function App() {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addPlayer = (name) => {
    setPlayers((prevPlayers) => [...prevPlayers, { name, role: 'player' }]);
  };

  const handleAdminLogin = (password) => {
    if (password === 'salom1989') {
      setIsAuthenticated(true);
    } else {
      alert('Noto\'g\'ri parol');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LobbyPage players={players} setPlayers={setPlayers} addPlayer={addPlayer} setPlayerName={setPlayerName} setIsAdmin={setIsAdmin} />} />
        <Route path="/game" element={<GamePage players={players} />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route
          path="/admin"
          element={
            isAuthenticated ? (
              <AdminPage players={players} />
            ) : (
              <div>
                <h2>Admin Paneliga Kirish</h2>
                <input
                  type="password"
                  placeholder="Parolni kiriting"
                  onBlur={(e) => handleAdminLogin(e.target.value)}
                />
              </div>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
