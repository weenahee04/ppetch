import React, { useState } from 'react';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { Captcha } from './components/Captcha';
import { Dashboard } from './pages/Dashboard';
import { LandingPage } from './pages/LandingPage';
import { Register } from './pages/Register';
import { AddBankAccount } from './pages/AddBankAccount';
import { Profile } from './pages/Profile';
import { Help } from './pages/Help';
import { Affiliate } from './pages/Affiliate';
import { Deposit } from './pages/Deposit';
import { Withdraw } from './pages/Withdraw';
import { Betting } from './pages/Betting';
import { Results } from './pages/Results';
import { Contact } from './pages/Contact';
import { Poy } from './pages/Poy';
import { Jackpot } from './pages/Jackpot';
import { Games } from './pages/Games';
import { NumberSets } from './pages/NumberSets';
import { InviteFriend } from './pages/InviteFriend';
import { PageView } from './types';

function App() {
  const [page, setPage] = useState<PageView>('landing');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Login Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      alert('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน');
      return;
    }

    setIsLoading(true);

    // Mock Authentication Delay
    setTimeout(() => {
      setIsLoading(false);
      setPage('dashboard');
    }, 1500);
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setPage('landing');
  };

  const handleRegisterSuccess = (user: string, pass: string) => {
      // Auto login after register
      setUsername(user);
      setPassword(pass);
      // Redirect to Add Bank account first as per typical flow
      setPage('add-bank');
  };

  // Router Switch
  switch (page) {
      case 'dashboard':
          return <Dashboard username={username} onLogout={handleLogout} onNavigate={setPage} />;
      case 'register':
          return <Register onBack={() => setPage('landing')} onRegisterSuccess={handleRegisterSuccess} />;
      case 'add-bank':
          return <AddBankAccount onBack={() => setPage('dashboard')} username={username} />;
      case 'profile':
          return <Profile onBack={() => setPage('dashboard')} username={username} />;
      case 'affiliate':
          return <Affiliate onBack={() => setPage('dashboard')} username={username} />;
      case 'invite_friend':
          return <InviteFriend onBack={() => setPage('dashboard')} username={username} />;
      case 'deposit':
          return <Deposit onBack={() => setPage('dashboard')} />;
      case 'withdraw':
          return <Withdraw onBack={() => setPage('dashboard')} />;
      case 'betting':
          return <Betting onBack={() => setPage('dashboard')} />;
      case 'results':
          return <Results onBack={() => setPage('dashboard')} />;
      case 'contact':
          return <Contact onBack={() => setPage('dashboard')} />;
      case 'poy':
          return <Poy onBack={() => setPage('dashboard')} />;
      case 'jackpot':
          return <Jackpot onBack={() => setPage('dashboard')} />;
      case 'games':
          return <Games onBack={() => setPage('dashboard')} />;
      case 'number-sets':
          return <NumberSets onBack={() => setPage('dashboard')} />;
      case 'help':
          // Contextual back button
          return <Help onBack={() => username ? setPage('dashboard') : setPage('landing')} />;
      case 'landing':
      default:
          return (
            <LandingPage 
              onRegister={() => setPage('register')}
              onHelp={() => setPage('help')}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              onLogin={handleLogin}
            />
          );
  }
}

export default App;