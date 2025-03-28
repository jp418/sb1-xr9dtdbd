import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import { Layout } from './components/Layout';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { CharacterTrainingPage } from './pages/CharacterTrainingPage';
import { ImageGenPage } from './pages/ImageGenPage';
import { VideoGenPage } from './pages/VideoGenPage';
import { AccountPage } from './pages/AccountPage';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } />
            <Route path="/train" element={
              <ProtectedRoute>
                <CharacterTrainingPage />
              </ProtectedRoute>
            } />
            <Route path="/generate" element={
              <ProtectedRoute>
                <ImageGenPage />
              </ProtectedRoute>
            } />
            <Route path="/video" element={
              <ProtectedRoute>
                <VideoGenPage />
              </ProtectedRoute>
            } />
            <Route path="/account" element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;