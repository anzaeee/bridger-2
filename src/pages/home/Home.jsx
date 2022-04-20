import "./Home.css"
import Toolbar from "../../components/toolbar/toolbar";
import Feed from "../../components/feed/feed";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar"

export default function Home()
{
    return (
        <>
        <Toolbar/>
        <div className="homeContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
        </>
    );
}