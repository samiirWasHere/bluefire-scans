import { Link } from 'react-router-dom';
import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <span className="logo-icon">🔥</span>
                        <span className="logo-text">BlueFireScans</span>
                    </Link>
                    <p className="footer-tagline">Premium manhwa translations delivered with passion.</p>
                </div>

                <div className="footer-links">
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                    <Link to="/dmca">DMCA</Link>
                    <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
                        Join Discord
                    </a>
                </div>

                <div className="footer-copyright">
                    © {new Date().getFullYear()} BlueFireScans. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
