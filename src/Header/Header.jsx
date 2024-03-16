function Header (){
    return(
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Recipy</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Recipy</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="flex gap-2">
    <div className="form-control">
      <label id='search' htmlFor="search" className="relative text-gray-400 focus-within:text-gray-600 block">
      <svg className="pointer-events-none w-8 h-8 absolute top-1/2 transform -translate-y-1/2 left-3" width="19.000000" height="19.000000" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
	      <path id="Vector" d="M18 18L12.8 12.8M14.99 7.49C14.99 5.51 14.2 3.6 12.8 2.19C11.39 0.78 9.48 -0.01 7.49 -0.01C5.51 -0.01 3.6 0.78 2.19 2.19C0.78 3.6 -0.01 5.51 -0.01 7.49C-0.01 9.48 0.78 11.39 2.19 12.8C3.6 14.2 5.51 14.99 7.49 14.99C9.48 14.99 11.39 14.2 12.8 12.8C14.2 11.39 14.99 9.48 14.99 7.49Z" stroke="#150B2B" strokeOpacity="0.700000" strokeWidth="1.500000" strokeLinejoin="round"/>
      </svg>
        <input name='search' type="text" placeholder="Search" className="form-input rounded-3xl py-3 px-4 bg-gray-200 placeholder-gray-400 text-gray-500 appearance-none w-full block pl-14 focus:outline-none" />
      </label>
      
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost bg-green-400 btn-circle avatar">
        <div className="rounded-full">
        <svg width="25.000000" height="25.000000" viewBox="0 0 25 25" fill="none">
	        <path id="Vector" d="M19.97 20.96C19.04 19.73 17.83 18.73 16.45 18.04C15.07 17.35 13.54 16.99 11.99 17C10.45 16.99 8.92 17.35 7.54 18.04C6.16 18.73 4.95 19.73 4.02 20.96M23.65 14.85C24.23 12.49 24.08 10 23.21 7.73C22.35 5.45 20.81 3.5 18.81 2.12C16.8 0.74 14.43 0 11.99 0C9.56 0 7.19 0.74 5.18 2.12C3.18 3.5 1.64 5.45 0.78 7.73C-0.09 10 -0.24 12.49 0.34 14.85C0.92 17.21 2.2 19.34 4.02 20.96C6.21 22.92 9.05 24 11.99 24C14.94 24 17.78 22.92 19.97 20.96C21.79 19.34 23.07 17.21 23.65 14.85ZM14.82 11.82C14.07 12.57 13.06 13 11.99 13C10.93 13 9.92 12.57 9.17 11.82C8.42 11.07 7.99 10.06 7.99 9C7.99 7.93 8.42 6.92 9.17 6.17C9.92 5.42 10.93 5 11.99 5C13.06 5 14.07 5.42 14.82 6.17C15.57 6.92 15.99 7.93 15.99 9C15.99 10.06 15.57 11.07 14.82 11.82Z" stroke="#150B2B" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round"/>
        </svg>

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
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>
        </div>
    )
}
export default Header