function Header (){
    return(
        <div className="max-w-7xl mx-auto">
            <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Recipy</a></li>
        <li><a>About</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a class="btn btn-ghost text-xl">Recipe Calories</a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Recipy</a></li>
      <li><a>About</a></li>
      <li><a>Search</a></li>
    </ul>
  </div>
  <div class="navbar-end">
  <div class="flex gap-2">
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
    <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost bg-green-400 btn-circle avatar">
        <div class="rounded-full">
        <svg width="25.000000" height="25.000000" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<defs/>
	<path id="Vector" d="M19.97 20.96C19.04 19.73 17.83 18.73 16.45 18.04C15.07 17.35 13.54 16.99 11.99 17C10.45 16.99 8.92 17.35 7.54 18.04C6.16 18.73 4.95 19.73 4.02 20.96M23.65 14.85C24.23 12.49 24.08 10 23.21 7.73C22.35 5.45 20.81 3.5 18.81 2.12C16.8 0.74 14.43 0 11.99 0C9.56 0 7.19 0.74 5.18 2.12C3.18 3.5 1.64 5.45 0.78 7.73C-0.09 10 -0.24 12.49 0.34 14.85C0.92 17.21 2.2 19.34 4.02 20.96C6.21 22.92 9.05 24 11.99 24C14.94 24 17.78 22.92 19.97 20.96C21.79 19.34 23.07 17.21 23.65 14.85ZM14.82 11.82C14.07 12.57 13.06 13 11.99 13C10.93 13 9.92 12.57 9.17 11.82C8.42 11.07 7.99 10.06 7.99 9C7.99 7.93 8.42 6.92 9.17 6.17C9.92 5.42 10.93 5 11.99 5C13.06 5 14.07 5.42 14.82 6.17C15.57 6.92 15.99 7.93 15.99 9C15.99 10.06 15.57 11.07 14.82 11.82Z" stroke="#150B2B" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
</svg>

        </div>
      </div>
      <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
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