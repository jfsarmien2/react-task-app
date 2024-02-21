import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ListPage from "./pages/ListPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./pages/Layout";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/dashboard' element={<Layout />}>
          <Route index element={<ListPage />} />
          <Route path='chat' element={<ChatPage />} />
          <Route path='profile' element={<ProfilePage />} />
        </Route>
        <Route path='*' element={<Navigate to='/dashboard' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
