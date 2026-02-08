import { Link } from 'react-router-dom';
import { HeroCarousel } from '../components/HeroCarousel';
import { ManhwaCard } from '../components/ManhwaCard';
import { getLatestUpdates, getPopularSeries, getCarouselManhwa } from '../data/manhwa';
import './HomePage.css';

export function HomePage() {
    const carouselManhwa = getCarouselManhwa();
    const latestUpdates = getLatestUpdates();
    const popularSeries = getPopularSeries();

    return (
        <main className="home-page">
            <HeroCarousel items={carouselManhwa} />

            <div className="container">
                {/* Latest Updates Section */}
                <section className="section">
                    <div className="section-title">
                        <h2>Latest Update</h2>
                        <Link to="/series">View All</Link>
                    </div>
                    <div className="grid-4">
                        {latestUpdates.map(manhwa => (
                            <ManhwaCard key={manhwa.id} manhwa={manhwa} />
                        ))}
                    </div>
                </section>

                {/* Popular Series Section */}
                <section className="section">
                    <div className="section-title">
                        <h2>Popular Series</h2>
                        <Link to="/series">View All</Link>
                    </div>
                    <div className="popular-grid">
                        {popularSeries.map(manhwa => (
                            <Link key={manhwa.id} to={`/series/${manhwa.id}`} className="popular-card">
                                <div className="popular-card-image">
                                    <img src={manhwa.coverImage} alt={manhwa.title} />
                                </div>
                                <div className="popular-card-info">
                                    <h3 className="popular-card-title">{manhwa.title}</h3>
                                    <p className="popular-card-genres">{manhwa.genres.slice(0, 2).join(', ')}</p>
                                    <div className="popular-card-rating">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        <span>{manhwa.rating}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
