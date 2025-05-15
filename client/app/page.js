import './app.css';

export default function Home() {
  return (
    <main>
      <header>
        <a href="" class="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div class="post">
        <div class="image">
          <img src="https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg" alt=""/>
        </div>
        <div class="texts">
          <h2>This Is The Best Cheesecake Recipe Ever</h2>
          <p class="info">
            <a href="" class="author">dopoka</a>
            <time>2025-05-15 3:14</time>
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          </p>
        </div>
      </div>
      <div class="post">
        <div class="image">
          <img src="https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg" alt=""/>
        </div>
        <div class="texts">
          <h2>This Is The Best Cheesecake Recipe Ever</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          </p>
        </div>
      </div>
      <div class="post">
        <div class="image">
          <img src="https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg" alt=""/>
        </div>
        <div class="texts">
          <h2>This Is The Best Cheesecake Recipe Ever</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
          </p>
        </div>
      </div>
    </main>
  );
}
