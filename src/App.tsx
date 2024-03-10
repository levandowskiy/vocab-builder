import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/reset.css';

const Register = lazy(() => import('./pages/Register'));
const Layout = lazy(() => import('./components/Layout'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
