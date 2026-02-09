import { Link } from 'react-router-dom';
import type { Manhwa } from '../data/manhwa';
import './ManhwaCard.css';

interface ManhwaCardProps {
    manhwa: Manhwa;
    showChapters?: boolean;
}

export function ManhwaCard({ manhwa, showChapters = true }: ManhwaCardProps) {
    const latestChapters = manhwa.chapters.slice(0, 2);

    return (
        <div className="manhwa-card">
            <Link to={`/series/${manhwa.id}`} className="manhwa-card-cover">
                <img src={manhwa.coverImage} alt={manhwa.title} />
                {manhwa.chapters[0]?.isNew && <span className="new-badge">NEW</span>}
            </Link>
            <div className="manhwa-card-info">
                <Link to={`/series/${manhwa.id}`} className="manhwa-card-title">
                    {manhwa.title}
                </Link>
                {showChapters && (
                    <div className="manhwa-card-chapters">
                        {latestChapters.map(chapter => (
                            <Link
                                key={chapter.id}
                                to={`/series/${manhwa.id}/chapter/${chapter.number}`}
                                className="chapter-row"
                            >
                                <span className="chapter-number">Ch. {chapter.number}</span>
                                <span className="chapter-time">{chapter.releaseDate}</span>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
