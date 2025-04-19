
const Footer = () => {
    return (
        <footer className="flex flex-col w-full">
            <div className="flex">
                <div className="bg-[#1F2937] flex-1/2 flex flex-col justify-center items-center text-white p-28 ">
                    <h5 className="text-2xl font-bold">CONTACT US</h5>
                    <p className="text-center mt-4">123 ABS Street, Uni 21, Bangladesh<br></br>
                        +88 123456789<br></br>
                        Mon - Fri: 08:00 - 22:00<br></br>
                        Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="bg-[#111827] flex-1/2 flex justify-center items-center text-white">
                    <nav className="text-lg">
                        <ul className="flex h-full items-center justify-center gap-3">
                            <li>
                                <a className="cursor-pointer hover:underline">Home</a>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:underline">Contact</a>
                            </li>
                            <li>
                                <a className="cursor-pointer hover:underline">About</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <aside className="bg-black py-5 text-center text-sm text-white">
                <p>&copy; 2025 Asiful Islam. All Rights Reserved.</p>
            </aside>
        </footer>
    );
};

export default Footer;