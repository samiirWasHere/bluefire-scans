import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { AuthModal } from './Auth/AuthModal';
import { UserMenu } from './Auth/UserMenu';
import './Header.css';

export function Header() {
    const location = useLocation();
    const { user, loading } = useAuth();
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/series', label: 'Series' },
        { path: '/bookmarks', label: 'Bookmarks' },
        { path: '/community', label: 'Community' },
    ];

    return (
        <>
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

                        <a
                            href="https://discord.gg/7XxVTT97"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="discord-link"
                            title="Join our Discord"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                            </svg>
                        </a>

                        {loading ? (
                            <div className="user-button loading">
                                <span className="user-loading-spinner" />
                            </div>
                        ) : user ? (
                            <UserMenu />
                        ) : (
                            <button
                                className="signin-button"
                                onClick={() => setIsAuthModalOpen(true)}
                            >
                                Sign In
                            </button>
                        )}
                    </div>
                </div>
            </header>

            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
            />
        </>
    );
}
