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
        <Link to={`/series/${manhwa.id}`} className="manhwa-card">
            <div className="manhwa-card-cover">
                <img src={manhwa.coverImage} alt={manhwa.title} />
                {manhwa.chapters[0]?.isNew && <span className="new-badge">NEW</span>}
            </div>
            <div className="manhwa-card-info">
                <h3 className="manhwa-card-title">{manhwa.title}</h3>
                {showChapters && (
                    <div className="manhwa-card-chapters">
                        {latestChapters.map(chapter => (
                            <div key={chapter.id} className="chapter-row">
                                <span className="chapter-number">Ch. {chapter.number}</span>
                                <span className="chapter-time">{chapter.releaseDate}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}
