const Header=()=> {
    return <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="flex cursor-pointer">
            Menu
            <div>
            <div className="mx-2 hover:underline cursor-pointer">
            Register/Login
        </div>
            </div>
        </div>
        <div>
            <img src="https://cdn.cookielaw.org/logos/17085366-506f-43da-a766-9e3dd0b8eb91/018ea99d-0c1e-7d6f-8591-e1e0a81088b7/6a885f4e-2f89-4783-a93c-de77a6e4382b/ETS-logo.jpg"/>
        </div>
        <div className="cursor-pointer">
            Contact
        </div>
    </div>
}

export default Header;