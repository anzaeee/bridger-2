import Post from "../post/post"
import "./feed.css"



export default function Toolbar()
{
    return (
    <div className="feed"> 
        <div className="feedWrapper">
            <Post/>
        </div>
    </div>

    );
}