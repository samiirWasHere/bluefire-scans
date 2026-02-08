import { Link } from 'react-router-dom';
import type { Manhwa } from '../data/manhwa';
import './HeroSection.css';

interface HeroSectionProps {
    manhwa: Manhwa;
}

export function HeroSection({ manhwa }: HeroSectionProps) {
    return (
        <section className="hero" style={{ backgroundImage: `url(${manhwa.bannerImage || manhwa.coverImage})` }}>
            <div className="hero-overlay" />
            <div className="hero-content">
                <h1 className="hero-title">{manhwa.title}</h1>
                <p className="hero-description">{manhwa.description}</p>
                <div className="hero-actions">
                    <Link to={`/series/${manhwa.id}`} className="hero-btn primary">
                        Read Now
                    </Link>
                    <Link to={`/series/${manhwa.id}`} className="hero-btn secondary">
                        View Details
                    </Link>
                </div>
            </div>
        </section>
    );
}
