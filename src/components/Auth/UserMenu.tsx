import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';
import './UserMenu.css';

export function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const { user, signOut } = useAuth();

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSignOut = async () => {
        try {
            await signOut();
            setIsOpen(false);
        } catch {
            toast.error('Failed to sign out');
        }
    };

    const getDisplayName = () => {
        if (user?.displayName) return user.displayName;
        if (user?.email) return user.email.split('@')[0];
        return 'User';
    };

    const getAvatarLetter = () => {
        const name = getDisplayName();
        return name.charAt(0).toUpperCase();
    };

    const getAvatarImage = () => {
        return user?.photoURL || null;
    };

    return (
        <div className="user-menu-container" ref={menuRef}>
            <button
                className="user-menu-trigger"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {getAvatarImage() ? (
                    <img
                        src={getAvatarImage()!}
                        alt={getDisplayName()}
                        className="user-avatar-img"
                    />
                ) : (
                    <div className="user-avatar-letter">{getAvatarLetter()}</div>
                )}
            </button>

            {isOpen && (
                <div className="user-menu-dropdown">
                    <div className="user-menu-header">
                        <div className="user-menu-avatar">
                            {getAvatarImage() ? (
                                <img src={getAvatarImage()!} alt={getDisplayName()} />
                            ) : (
                                <span>{getAvatarLetter()}</span>
                            )}
                        </div>
                        <div className="user-menu-info">
                            <span className="user-menu-name">{getDisplayName()}</span>
                            <span className="user-menu-email">{user?.email}</span>
                        </div>
                    </div>

                    <div className="user-menu-divider" />

                    <nav className="user-menu-nav">
                        <Link to="/bookmarks" className="user-menu-item" onClick={() => setIsOpen(false)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                            </svg>
                            <span>My Bookmarks</span>
                        </Link>
                        <Link to="/history" className="user-menu-item" onClick={() => setIsOpen(false)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>Reading History</span>
                        </Link>
                        <Link to="/settings" className="user-menu-item" onClick={() => setIsOpen(false)}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                            </svg>
                            <span>Settings</span>
                        </Link>
                    </nav>

                    <div className="user-menu-divider" />

                    <button className="user-menu-logout" onClick={handleSignOut}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" />
                            <polyline points="16 17 21 12 16 7" />
                            <line x1="21" y1="12" x2="9" y2="12" />
                        </svg>
                        <span>Sign Out</span>
                    </button>
                </div>
            )}
        </div>
    );
}
