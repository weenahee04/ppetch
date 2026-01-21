export interface User {
  username: string;
  isLoggedIn: boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export type PageView = 'landing' | 'login' | 'register' | 'dashboard' | 'add-bank' | 'profile' | 'help' | 'affiliate' | 'deposit' | 'withdraw' | 'betting' | 'results' | 'contact' | 'poy' | 'jackpot' | 'games' | 'number-sets' | 'invite_friend' | 'admin';

export interface LuckyNumberResponse {
  mainNumber: string;
  secondaryNumbers: string[];
  reasoning: string;
}