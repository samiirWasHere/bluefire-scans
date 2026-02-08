import { useParams, Link } from 'react-router-dom';
import { GenreTag } from '../components/GenreTag';
import { ChapterListItem } from '../components/ChapterListItem';
import { ManhwaCard } from '../components/ManhwaCard';
import { getManhwaById, getRecommendations } from '../data/manhwa';
import './SeriesDetailPage.css';

export function SeriesDetailPage() {
    const { id } = useParams<{ id: string }>();
    const manhwa = getManhwaById(id || '');
    const recommendations = getRecommendations(id || '');

    if (!manhwa) {
        return (
            <main className="series-page container">
                <div className="not-found">
                    <h1>Series Not Found</h1>
                    <p>The manhwa you're looking for doesn't exist.</p>
                    <Link to="/" className="back-link">Go back home</Link>
                </div>
            </main>
        );
    }

    return (
        <main className="series-page">
            {/* Hero Banner */}
            <div className="series-hero" style={{ backgroundImage: `url(${manhwa.bannerImage || manhwa.coverImage})` }}>
                <div className="series-hero-overlay" />
            </div>

            <div className="container">
                <div className="series-content">
                    {/* Main Info */}
                    <aside className="series-sidebar">
                        <div className="series-cover">
                            <img src={manhwa.coverImage} alt={manhwa.title} />
                        </div>
                        <div className="series-actions">
                            <Link
                                to={`/read/${manhwa.id}/${manhwa.chapters[0]?.id}`}
                                className="btn-primary"
                            >
                                Start Reading
                            </Link>
                            <button className="btn-secondary">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                </svg>
                                Bookmark
                            </button>
                        </div>
                    </aside>

                    {/* Details */}
                    <div className="series-details">
                        <h1 className="series-title">{manhwa.title}</h1>
                        {manhwa.koreanTitle && (
                            <p className="series-alt-title">{manhwa.koreanTitle}</p>
                        )}

                        <div className="series-genres">
                            {manhwa.genres.map(genre => (
                                <GenreTag key={genre} genre={genre} />
                            ))}
                        </div>

                        <div className="series-meta">
                            <div className="meta-item">
                                <span className="meta-label">Author</span>
                                <span className="meta-value">{manhwa.author}</span>
                            </div>
                            <div className="meta-item">
                                <span className="meta-label">Artist</span>
                                <span className="meta-value">{manhwa.artist}</span>
                            </div>
                            {manhwa.serialization && (
                                <div className="meta-item">
                                    <span className="meta-label">Serialization</span>
                                    <span className="meta-value">{manhwa.serialization}</span>
                                </div>
                            )}
                            <div className="meta-item">
                                <span className="meta-label">Rating</span>
                                <span className="meta-value rating">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                    </svg>
                                    {manhwa.rating}
                                </span>
                            </div>
                        </div>

                        {/* Synopsis */}
                        <div className="series-synopsis">
                            <h2>Synopsis</h2>
                            <p>{manhwa.synopsis || manhwa.description}</p>
                        </div>

                        {/* Chapter List */}
                        <div className="series-chapters">
                            <h2>Chapter List</h2>
                            <div className="chapter-list">
                                {manhwa.chapters.map(chapter => (
                                    <ChapterListItem
                                        key={chapter.id}
                                        chapter={chapter}
                                        seriesId={manhwa.id}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Recommendations */}
                        <div className="series-recommendations">
                            <h2>You might also like</h2>
                            <div className="recommendations-grid">
                                {recommendations.map(rec => (
                                    <ManhwaCard key={rec.id} manhwa={rec} showChapters={false} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
