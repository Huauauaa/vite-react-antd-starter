import { Routes, Route } from 'react-router-dom';
import './app.less';
import loadable from '@loadable/component';
import MenuLayout from './MenuLayout';

const About = loadable(() => import('./views/AboutView'));
const Home = loadable(() => import('./views/HomeView'));

function App() {
  return (
    <Routes>
      <Route element={<MenuLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
