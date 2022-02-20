import { Routes, Route } from 'react-router-dom';
import './app.less';
import HomeView from './views/HomeView';
import AboutView from './views/AboutView';
import MenuLayout from './MenuLayout';

function App() {
  return (
    <Routes>
      <Route element={<MenuLayout />}>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
      </Route>
    </Routes>
  );
}

export default App;
