import Header from "./header";

export default function Post() {
    return (
        <div className="post">
            <div className="image">
                <img src="https://sugarspunrun.com/wp-content/uploads/2023/06/Strawberry-cheesecake-recipe-6-of-8.jpg" alt=""/>
            </div>
            <div className="texts">
                <h2>This Is The Best Cheesecake Recipe Ever</h2>
                <p className="info">
                    <a href="" className="author">dopoka</a>
                    <time>2025-05-15 3:14</time>
                </p>
                <p className='summary'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                </p>
            </div>
      </div>
    );
}