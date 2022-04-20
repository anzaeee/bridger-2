import "./post.css"
export default function Post()
{
    return (
    <div className="post">
    
        <div className="postcontainer">
            <div className="shareTop">
            <input placeholder="What's on your mind?" className="postbox"  />
            </div>
            <div className="shareBottom">
                <button>Submit</button>
            </div>
        </div>

         
    </div>

    );
}