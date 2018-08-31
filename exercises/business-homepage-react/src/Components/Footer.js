import React from 'react'
import '../Styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer-section'> 
            <div>
                <nav className="footer-links">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>How it works</li>
                        <li>Contact</li>
                        <li>Careers</li>
                    </ul>
                </nav>
                <nav className="footer-social">
                    <ul>
                        <li>facebook</li>
                        <li>instagram</li>
                        <li>twitter</li>
                        <li>google+</li>
                    </ul>
                </nav>
            </div>
            <div className='copyright'>
                <h4>business-time copyright TM. est. 2018</h4>
            </div>
        </footer>
    )
}

export default Footer