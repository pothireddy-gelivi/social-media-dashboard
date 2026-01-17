import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Notifications from './pages/Notifications/Notifications.jsx';
function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Sidebar />

      <main style={{ marginLeft: '220px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
