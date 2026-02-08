import { Link } from 'react-router-dom';
import type { Chapter } from '../data/manhwa';
import './ChapterListItem.css';

interface ChapterListItemProps {
    chapter: Chapter;
    seriesId: string;
}

export function ChapterListItem({ chapter, seriesId }: ChapterListItemProps) {
    return (
        <Link to={`/read/${seriesId}/${chapter.id}`} className="chapter-item">
            <div className="chapter-item-info">
                <span className="chapter-item-number">Chapter {chapter.number}</span>
                {chapter.title && <span className="chapter-item-title">{chapter.title}</span>}
                {chapter.isNew && <span className="chapter-item-new">New</span>}
            </div>
            <div className="chapter-item-meta">
                <span className="chapter-item-date">{chapter.releaseDate}</span>
                <svg className="chapter-item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </div>
        </Link>
    );
}
