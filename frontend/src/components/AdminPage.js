// src/components/AdminLoginPage.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Parolni tekshirish
    if (password === 'admin123') {
      setIsAuthenticated(true);
    } else {
      alert('Noto\'g\'ri parol');
    }
  };

  if (isAuthenticated) {
    return (
      <Container component="main" maxWidth="xs" sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f0f0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: 3,
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          maxWidth: 400
        }}>
          <Typography variant="h5" gutterBottom sx={{ color: '#3f51b5' }}>
            Admin Paneliga xush kelibsiz!
          </Typography>
          {/* Admin panel kontenti shu yerda bo'ladi */}
        </Box>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="xs" sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      backgroundImage: 'url("/path/to/your/background-image.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        width: '100%',
        maxWidth: 400
      }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#3f51b5' }}>
          Admin Paneliga Kirish
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Parol"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            onChange={handlePasswordChange}
            sx={{
              '& .MuiInputLabel-root': {
                color: '#3f51b5',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#3f51b5',
                },
                '&:hover fieldset': {
                  borderColor: '#3f51b5',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#3f51b5',
                },
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: '#3f51b5',
              '&:hover': {
                backgroundColor: '#303f9f',
              },
            }}
          >
            Kirish
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default AdminLoginPage;
