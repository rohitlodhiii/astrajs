import React from 'react'

const Navbar = () => {
    return (
        <div className="px-4 fixed navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                   
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Usage</a></li>
                    <li>
                       <a>Components</a>
                    </li>
                    <li><a>Support</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">AstraUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Usage</a></li>
                    <li>
                       <a>Components</a>
                    </li>
                    <li><a>Support</a></li>
                </ul>
            </div>
            
                <div className="navbar-end drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn btn-accent btn-sm drawer-button">Components</label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                            {/* Sidebar content here */}
                            <li><a>Accourdians</a></li>
                            <li><a>Button Groups</a></li>
                            <li><a>Sidebar Item 2</a></li>
                            <li><a>Sidebar Item 2</a></li>
                            <li><a>Sidebar Item 2</a></li>
                            <li><a>Sidebar Item 2</a></li>

                        </ul>
                    </div>
                </div>
            </div>
        
    )
}

export default Navbar
