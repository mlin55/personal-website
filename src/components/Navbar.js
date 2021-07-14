function Navbar() {
    return (
        <div id = 'navbar'>
            <nav>
                <ul>
                    <li className='navbar-btn'><a href='#aboutme'>About Me</a></li>
                    <li className='navbar-btn'><a href='#projects'>Projects</a></li>
                    <li className='navbar-btn'><a href='#resume'>Resume</a></li>
                    <li className='navbar-btn'><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;