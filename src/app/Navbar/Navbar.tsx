
export default function Navbar() {
    return (
        <main>
            <div className="navbar bg-base-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a className="text-white">Home</a></li>
                            <li><a className="text-white">About</a></li>
                            <li><a className="text-white">Contact Us</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">SUR•AI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className="text-white">Home</a></li>
                        <li><a className="text-white">About</a></li>
                        <li><a className="text-white">Contact Us</a></li>
                    </ul>
                </div>
                <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-full inline-flex items-center bg-transparent navEndBtn">
                    <a>Login</a>
                </button>
            </div>
        </main>
    );
}
