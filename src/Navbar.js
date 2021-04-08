import './Navbar.css';
import resume from './Resume.pdf';

function Navbar() {
    return (
        <div className = 'navbar'>
            <nav>
                <ul>
                    <li><a href='#aboutme'>About Me</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href={resume} target='_blank'>Resume</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;