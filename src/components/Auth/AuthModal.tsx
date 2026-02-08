import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { GoogleButton } from './GoogleButton';
import toast from 'react-hot-toast';
import './AuthModal.css';

type AuthView = 'signin' | 'signup' | 'forgot';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Convert Firebase error codes to user-friendly messages
function getErrorMessage(error: unknown): string {
    if (!(error instanceof Error)) return 'Something went wrong. Please try again.';

    const errorCode = error.message;

    // Auth error mappings
    if (errorCode.includes('auth/invalid-credential') || errorCode.includes('auth/wrong-password')) {
        return 'Incorrect email or password. Please try again.';
    }
    if (errorCode.includes('auth/user-not-found')) {
        return 'No account found with this email. Please sign up first.';
    }
    if (errorCode.includes('auth/email-already-in-use')) {
        return 'An account with this email already exists. Try signing in instead.';
    }
    if (errorCode.includes('auth/weak-password')) {
        return 'Password is too weak. Use at least 6 characters.';
    }
    if (errorCode.includes('auth/invalid-email')) {
        return 'Please enter a valid email address.';
    }
    if (errorCode.includes('auth/too-many-requests')) {
        return 'Too many failed attempts. Please wait a moment and try again.';
    }
    if (errorCode.includes('auth/network-request-failed')) {
        return 'Network error. Please check your internet connection.';
    }
    if (errorCode.includes('auth/popup-closed-by-user')) {
        return 'Sign-in cancelled. Please try again.';
    }
    if (errorCode.includes('auth/operation-not-allowed')) {
        return 'This sign-in method is not enabled. Please contact support.';
    }
    if (errorCode.includes('auth/account-exists-with-different-credential')) {
        return 'An account already exists with this email using a different sign-in method.';
    }
    if (errorCode.includes('auth/user-disabled')) {
        return 'This account has been disabled. Please contact support.';
    }

    return 'Something went wrong. Please try again.';
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [view, setView] = useState<AuthView>('signin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn, signUp, signInWithGoogle, resetPassword } = useAuth();

    const resetForm = () => {
        setEmail('');
        setPassword('');
        setDisplayName('');
        setView('signin');
    };

    const handleClose = () => {
        resetForm();
        onClose();
    };

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Please fill in all fields');
            return;
        }

        setLoading(true);
        try {
            await signIn(email, password);
            handleClose();
        } catch (error: unknown) {
            toast.error(getErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error('Please fill in all fields');
            return;
        }
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters');
            return;
        }

        setLoading(true);
        try {
            await signUp(email, password, displayName || undefined);
            handleClose();
        } catch (error: unknown) {
            toast.error(getErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setLoading(true);
        try {
            await signInWithGoogle();
            handleClose();
        } catch (error: unknown) {
            toast.error(getErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email');
            return;
        }

        setLoading(true);
        try {
            await resetPassword(email);
            toast.success('Password reset email sent! Check your inbox.');
            setView('signin');
        } catch (error: unknown) {
            toast.error(getErrorMessage(error));
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="auth-modal-overlay" onClick={handleClose}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <button className="auth-modal-close" onClick={handleClose}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="auth-modal-header">
                    <h2 className="auth-modal-title">
                        {view === 'signin' && 'Welcome Back'}
                        {view === 'signup' && 'Create Account'}
                        {view === 'forgot' && 'Reset Password'}
                    </h2>
                    <p className="auth-modal-subtitle">
                        {view === 'signin' && 'Sign in to access your bookmarks and reading history'}
                        {view === 'signup' && 'Join BlueFireScans to track your favorite manhwa'}
                        {view === 'forgot' && 'Enter your email to receive a reset link'}
                    </p>
                </div>

                {view !== 'forgot' && (
                    <div className="auth-tabs">
                        <button
                            className={`auth-tab ${view === 'signin' ? 'active' : ''}`}
                            onClick={() => setView('signin')}
                        >
                            Sign In
                        </button>
                        <button
                            className={`auth-tab ${view === 'signup' ? 'active' : ''}`}
                            onClick={() => setView('signup')}
                        >
                            Sign Up
                        </button>
                    </div>
                )}

                <form
                    className="auth-form"
                    onSubmit={
                        view === 'signin'
                            ? handleSignIn
                            : view === 'signup'
                                ? handleSignUp
                                : handleResetPassword
                    }
                >
                    {view === 'signup' && (
                        <div className="auth-input-group">
                            <label htmlFor="displayName">Display Name</label>
                            <input
                                id="displayName"
                                type="text"
                                placeholder="Your name (optional)"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                    )}

                    <div className="auth-input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={loading}
                            required
                        />
                    </div>

                    {view !== 'forgot' && (
                        <div className="auth-input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                                required
                                minLength={6}
                            />
                        </div>
                    )}

                    {view === 'signin' && (
                        <button
                            type="button"
                            className="auth-forgot-link"
                            onClick={() => setView('forgot')}
                        >
                            Forgot password?
                        </button>
                    )}

                    <button type="submit" className="auth-submit-btn" disabled={loading}>
                        {loading ? (
                            <span className="auth-loading-spinner" />
                        ) : view === 'signin' ? (
                            'Sign In'
                        ) : view === 'signup' ? (
                            'Create Account'
                        ) : (
                            'Send Reset Link'
                        )}
                    </button>
                </form>

                {view !== 'forgot' && (
                    <>
                        <div className="auth-divider">
                            <span>or continue with</span>
                        </div>

                        <GoogleButton onClick={handleGoogleSignIn} disabled={loading} />
                    </>
                )}

                {view === 'forgot' && (
                    <button
                        className="auth-back-link"
                        onClick={() => setView('signin')}
                    >
                        ← Back to Sign In
                    </button>
                )}
            </div>
        </div>
    );
}
