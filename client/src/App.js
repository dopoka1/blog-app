import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header';
import Post from './post';
import Layout from './layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Post />
        } />
        <Route path={'/login'} element={
          <div>Login</div>
        } />
      </Route>
    </Routes>
  );
}

export default App;
