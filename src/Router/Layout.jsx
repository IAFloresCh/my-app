import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/tasks">Tasks</Link>
                    </li>
                    <li>
                        <Link to="/completedTasks">Completed Tasks</Link>
                    </li>
                    <li>
                        <Link to="/new-task">New Tasks</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
};

export default Layout;