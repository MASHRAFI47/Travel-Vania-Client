import { Link, NavLink } from "react-router-dom"
import Logo from '../../../src/assets/images/travelvania-logo.png'
import { useContext } from "react"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    const links = <>
        <li><NavLink className={'font-semibold'} to={'/'}>Home</NavLink></li>
        <li><NavLink className={'font-semibold'} to={'/all-tourists-spot'}>All Tourists Spot</NavLink></li>
        <li><NavLink className={'font-semibold'} to={'/add-tourists-spot'}>Add Tourists Spot</NavLink></li>
        <li><NavLink className={'font-semibold'} to={'/my-list'}>My List</NavLink></li>
        {
            !user ? <li><NavLink className={'font-semibold'} to={'/login'}>Login</NavLink></li> : ""
        }
        {
            !user ? <li><NavLink className={'font-semibold'} to={'/register'}>Register</NavLink></li> : ""
        }
    </>
    return (
        <div className="navbar bg-base-100 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <Link className="text-3xl font-bold"><img src={Logo} className="w-32" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a onClick={logOut}>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header