import { Link, NavLink } from "react-router-dom"
import Logo from '../../../src/assets/images/travelvania-logo.png'
import { useContext, useState } from "react"
import { AuthContext } from "../../providers/AuthProvider/AuthProvider"

const Header = () => {
    const [theme, setTheme] = useState("halloween")
    console.log(theme)

    const handleThemeChange = (e) => {
        if(e.target.checked) {
            setTheme("halloween")
        }
        else {
            setTheme("light")
        }
    }

    const { user, logOut } = useContext(AuthContext)
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
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52">
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
                <label className="cursor-pointer grid place-items-center mr-3">
                    <input type="checkbox" onChange={handleThemeChange} value={theme} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={user ? user.photoURL : "https://extendedevolutionarysynthesis.com/wp-content/uploads/2018/02/avatar-1577909_960_720.png"} />
                        </div>
                    </div>
                    {
                        user ?
                            <ul tabIndex={0} className="mt-3 z-[100] relative p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a onClick={logOut}>Logout</a></li>
                            </ul>
                            :
                            ""
                    }
                </div>
            </div>
        </div>
    )
}

export default Header