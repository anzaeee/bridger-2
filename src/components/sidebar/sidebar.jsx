import "./sidebar.css"

export default function Sidebar()
{
    return (
    <div className="sidebar">
        <div className="sidebarContainer">
            <ul className="Sidebarlist">
                <li className="SidebarlistItem">
                    <span className="SidebarlistText"> Feed</span>
                </li>
                <li className="SidebarlistItem">
                    <span className="SidebarlistText"> Chat</span>
                </li>
                <li className="SidebarlistItem">
                    <span className="SidebarlistText"> Videos</span>
                </li>
                <li className="SidebarlistItem">
                    <span className="SidebarlistText"> Groups</span>
                </li>
                <li className="SidebarlistItem">
                    <span className="SidebarlistText"> Interests</span>
                </li>
                <li className="SidebarlistItem">
                    <span className="SidebarlistText"> Settings</span>
                </li>
            </ul>
        </div>
    </div>

    );
}