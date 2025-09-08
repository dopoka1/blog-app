import Header from "./header";
// TODO: install date-fns

export default function Post({title,summary,cover,content,createdAt}) {
    return (
      <div className="post">
        <div className='image'>
          <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/k%2FPhoto%2FSeries%2F2024-07-how-to-make-perfect-cheesecake%2Fhow-to-make-perfect-cheesecake-319" alt=""/>
        </div>
        <div className='texts'>
          <h2>{title}</h2>
          <p className="info">
            <a href="" className="author">dopoka</a>
            <time datetime="">{createdAt}</time>
          </p>
          <p className='summary'>
            {summary}
          </p>
        </div>
      </div>
    );
}