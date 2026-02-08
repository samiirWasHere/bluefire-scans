import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export function Header() {
    const location = useLocation();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/series', label: 'Series' },
        { path: '/bookmarks', label: 'Bookmarks' },
        { path: '/community', label: 'Community' },
    ];

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-icon">🔥</span>
                    <span className="logo-text">BlueFireScans</span>
                </Link>

                <nav className="nav">
                    {navLinks.map(link => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="header-actions">
                    <div className="search-bar">
                        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8" />
                            <path d="M21 21l-4.35-4.35" />
                        </svg>
                        <input type="text" placeholder="Search manhwa..." />
                    </div>

                    <button className="user-button">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="8" r="4" />
                            <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
