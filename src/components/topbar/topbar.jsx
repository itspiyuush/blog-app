import "./topbar.css";
export default function topbar() {
  return (
    <>
      <div className="top">
        <div className="topLeft">
          <span className="maintxt">Social Blog</span>
  
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
          </ul>
        </div>

        <div className="topRight">
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="profile"
          />
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </>
  );
}
