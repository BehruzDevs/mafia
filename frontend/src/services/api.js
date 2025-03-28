const API_URL = 'http://localhost:5000'; // Backend URL

export const api = {
  getPlayers: async () => {
    const response = await fetch(`${API_URL}/api/players`);
    return await response.json();
  },
  startGame: async () => {
    const response = await fetch(`${API_URL}/api/start-game`, {
      method: 'POST',
    });
    return await response.json();
  },
  getGameState: async () => {
    const response = await fetch(`${API_URL}/api/game-state`);
    return await response.json();
  },
  getMessages: async () => {
    const response = await fetch(`${API_URL}/api/messages`);
    return await response.json();
  },
  sendMessage: async (message) => {
    const response = await fetch(`${API_URL}/api/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    return await response.json();
  },
};
