import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getManhwaById } from '../data/manhwa';
import './ReaderPage.css';

export function ReaderPage() {
    const { seriesId, chapterId } = useParams<{ seriesId: string; chapterId: string }>();
    const navigate = useNavigate();
    const manhwa = getManhwaById(seriesId || '');

    const [showChapterSelect, setShowChapterSelect] = useState(false);

    if (!manhwa) {
        return (
            <main className="reader-page">
                <div className="reader-error">
                    <h1>Chapter Not Found</h1>
                    <Link to="/">Go back home</Link>
                </div>
            </main>
        );
    }

    const currentChapterIndex = manhwa.chapters.findIndex(ch => ch.id === chapterId);
    const currentChapter = manhwa.chapters[currentChapterIndex];
    const prevChapter = manhwa.chapters[currentChapterIndex + 1];
    const nextChapter = manhwa.chapters[currentChapterIndex - 1];

    // Generate placeholder reader images
    const readerImages = Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        url: `https://images.unsplash.com/photo-${1578632767115 + i * 1000}-351597cf2477?w=800&h=1200&fit=crop`,
        alt: `Page ${i + 1}`
    }));

    const handleChapterChange = (newChapterId: string) => {
        navigate(`/read/${seriesId}/${newChapterId}`);
        setShowChapterSelect(false);
        window.scrollTo(0, 0);
    };

    return (
        <main className="reader-page">
            {/* Header */}
            <header className="reader-header">
                <Link to={`/series/${seriesId}`} className="reader-back">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </Link>

                <div className="reader-title-container">
                    <h1 className="reader-title">{manhwa.title}</h1>
                    <div className="reader-chapter-select" onClick={() => setShowChapterSelect(!showChapterSelect)}>
                        <span>Chapter {currentChapter?.number}</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M6 9l6 6 6-6" />
                        </svg>

                        {showChapterSelect && (
                            <div className="chapter-dropdown">
                                {manhwa.chapters.map(chapter => (
                                    <button
                                        key={chapter.id}
                                        className={`chapter-option ${chapter.id === chapterId ? 'active' : ''}`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleChapterChange(chapter.id);
                                        }}
                                    >
                                        Chapter {chapter.number}
                                        {chapter.title && <span className="chapter-option-title">{chapter.title}</span>}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="reader-settings">
                    <button className="settings-btn">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="3" />
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Reader Content */}
            <div className="reader-content">
                <div className="reader-images">
                    {readerImages.map(img => (
                        <img key={img.id} src={img.url} alt={img.alt} className="reader-image" />
                    ))}
                </div>

                {/* End of Chapter */}
                <div className="chapter-end">
                    <p className="chapter-end-text">You've reached the end of</p>
                    <h2 className="chapter-end-title">Chapter {currentChapter?.number}</h2>

                    <div className="chapter-nav-buttons">
                        {prevChapter && (
                            <Link
                                to={`/read/${seriesId}/${prevChapter.id}`}
                                className="nav-btn prev"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M15 18l-6-6 6-6" />
                                </svg>
                                Previous Chapter
                            </Link>
                        )}
                        {nextChapter && (
                            <Link
                                to={`/read/${seriesId}/${nextChapter.id}`}
                                className="nav-btn next"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                Next Chapter
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 18l6-6-6-6" />
                                </svg>
                            </Link>
                        )}
                    </div>
                </div>

                {/* Comments Section */}
                <div className="comments-section">
                    <h3 className="comments-title">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                        Discussion (124)
                    </h3>

                    <div className="comments-list">
                        <div className="comment">
                            <div className="comment-avatar">M</div>
                            <div className="comment-content">
                                <div className="comment-header">
                                    <span className="comment-author">Sameer</span>
                                    <span className="comment-time">3 hours ago</span>
                                </div>
                                <p className="comment-text">Amazing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
