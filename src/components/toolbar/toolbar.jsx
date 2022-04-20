import "./toolbar.css"

export default function Toolbar()
{
    return (
        <div className="toolbarContainer">
            <div className="toolbarLeft">
                <span className = "logo"> Bridger </span>
            </div>
            <div className="toolbarCenter">
                <div className="searchbar">
                    <input placeholder="Search for a friend, post or interest." className="searchInput"  />
                </div>
            </div>
            <div className="toolbarRight">
                <div className="toolbarLinks">
                    <span className="toolbarLink"> Home </span>
                    <span className="toolbarLink"> Profile </span>
                    <span className="toolbarLink"> Messages </span>
                </div>
            </div>
        </div>
    );
}