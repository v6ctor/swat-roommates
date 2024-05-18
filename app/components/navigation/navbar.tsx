const Navbar = () => {
    return (
        <>
            <div className="w-full h-24 bg-black-800 sticky top-0">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-end items-center h-full gap-5">
                        <button className="bg-white text-black w-24 h-10 rounded font-semibold">Sign in</button>
                        <p className="font-semibold hover:cursor-pointer">Join</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;