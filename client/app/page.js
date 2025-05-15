import './app.css';
import Post from "./post";
import Header from './header';

export default function Home() {
  return (
    <main>
      <Header/>
      <Post />
      <Post />
      <Post />
    </main>
  );
}
