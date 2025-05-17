'use client'
import './app.css';
import Post from "./post";
import Header from './header';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route index element={
          <main>
            <Header/>
            <Post />
            <Post />
            <Post />
          </main>
        } />
        <Route path={"/login"} element={
          <main>
            <Header/>
            <div>login page</div>
          </main>
        } />
        <Route path={"/register"} element={
          <main>
            <Header/>
            <div>registration page</div>
          </main>
        } />
      </Routes>
    </Router>
  );
}
