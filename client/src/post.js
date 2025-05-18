import Header from "./header";

export default function Post() {
    return (
      <div className="post">
        <div className='image'>
          <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FSeries%2F2024-07-how-to-make-perfect-cheesecake%2Fhow-to-make-perfect-cheesecake-319" alt=""/>
        </div>
        <div className='texts'>
          <h2>Sweet Strawberry Cheesecake</h2>
          <p className="info">
            <a href="" className="author">dopoka</a>
            <time datetime="">2025-05-18</time>
          </p>
          <p className='summary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    );
}