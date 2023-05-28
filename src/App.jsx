import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn.jsx';
import SignOut from './components/SignOut';
import Cookies from 'universal-cookie';
import EnterRoom from './components/EnterRoom';
import Chat from './components/Chat';
import './App.css'
import Error from './components/Error.jsx'
import Footer from './components/Footer.jsx';

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));


  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={isAuth ? <EnterRoom /> : <SignIn setIsAuth={setIsAuth} />} />
          <Route exact path="/chat/:roomName" element={<Chat />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {isAuth && <SignOut setIsAuth={setIsAuth} />}
        <Footer />
      </Router>
    </>
  );
}

export default App;
