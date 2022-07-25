import { Routes, Route } from 'react-router-dom';
import { ContactsView } from 'views/ContactsView';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import AppBarMenu from './AppBar';
import authOperations from 'redux/auth/auth-operations';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div
      style={{
        minWidth: '400px',
        display: 'inline-block',
        padding: '10px',
        height: '100vh',
        margin: '0 auto',
      }}
    >
      <AppBarMenu />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </div>
  );
}
