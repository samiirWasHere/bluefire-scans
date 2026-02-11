import { Link } from 'react-router-dom';
import { HeroCarousel } from '../components/HeroCarousel';
import { ManhwaCard } from '../components/ManhwaCard';
import { PopularSidebar } from '../components/PopularSidebar';
import { getLatestUpdates, getPopularSeries, getCarouselManhwa, getRecentlyAdded } from '../data/manhwa';
import './HomePage.css';

export function HomePage() {
    const carouselManhwa = getCarouselManhwa();
    const latestUpdates = getLatestUpdates();
    const popularSeries = getPopularSeries();
    const recentlyAdded = getRecentlyAdded();

    return (
        <main className="home-page">
            <HeroCarousel items={carouselManhwa} />

            <div className="container">
                <div className="home-body">
                    {/* Left: Main content */}
                    <div className="home-main">
                        <section className="section">
                            <div className="section-title">
                                <h2>Latest Update</h2>
                                <Link to="/series" className="view-all-btn">View All</Link>
                            </div>
                            <div className="grid-4">
                                {latestUpdates.map(manhwa => (
                                    <ManhwaCard key={manhwa.id} manhwa={manhwa} />
                                ))}
                            </div>
                        </section>

                        <section className="section">
                            <div className="section-title">
                                <h2>Recently Added</h2>
                                <Link to="/series" className="view-all-btn">View All</Link>
                            </div>
                            <div className="grid-4">
                                {recentlyAdded.map(manhwa => (
                                    <ManhwaCard key={manhwa.id} manhwa={manhwa} showChapters={false} />
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right: Popular Series Sidebar */}
                    <div className="home-sidebar">
                        <PopularSidebar items={popularSeries} />
                    </div>
                </div>
            </div>
        </main>
    );
}
