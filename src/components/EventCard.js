
import { useContext } from "react";
// import { Link } from "react-router-dom";
import { MyContext } from "../context/Context";

function EventCard() {
  const { event } = useContext(MyContext)
console.log(MyContext)
  
return (
    <div className="cardbox">
      {/* {event.map((eventItem, id) => (
        <>
        <div className="imageDiv"> */}
          {/* <img src={postItem} alt={} />
          </div>
         
          <Link key={postItem} to={`/posts/${postItem}`}>
            <p className="title">  {postItem}</p>
          </Link>
          <p className="content">{postItem}</p> */}
      </div>
      //   </>
      // ))}
   // </div>
  );
}
export default EventCard;
