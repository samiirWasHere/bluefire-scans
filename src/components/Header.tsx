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
