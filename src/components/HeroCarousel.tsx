import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Manhwa } from '../data/manhwa';
import './HeroCarousel.css';

interface HeroCarouselProps {
    items: Manhwa[];
}

function getStatusColor(status: string): string {
    switch (status) {
        case 'Completed': return '#f59e0b';
        case 'Ongoing': return '#22c55e';
        case 'Hiatus': return '#ef4444';
        default: return '#6b7280';
    }
}

function getSlideItem(items: Manhwa[], currentIndex: number, offset: number): Manhwa {
    return items[(currentIndex + offset + items.length) % items.length];
}

export function HeroCarousel({ items }: HeroCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Swipe refs
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const isSwiping = useRef(false);
    const swipeThreshold = 40;

    const goToPrevious = useCallback(() => {
        setCurrentIndex(prev => (prev === 0 ? items.length - 1 : prev - 1));
    }, [items.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex(prev => (prev === items.length - 1 ? 0 : prev + 1));
    }, [items.length]);

    // Auto-play
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(goToNext, 4000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, goToNext]);

    const pauseAutoPlay = () => setIsAutoPlaying(false);
    const resumeAutoPlay = () => setIsAutoPlaying(true);

    // Touch swipe
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchEndX.current = e.touches[0].clientX;
        isSwiping.current = true;
        pauseAutoPlay();
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isSwiping.current) return;
        touchEndX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = () => {
        if (!isSwiping.current) return;
        isSwiping.current = false;
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > swipeThreshold) {
            diff > 0 ? goToNext() : goToPrevious();
        }
        resumeAutoPlay();
    };

    // Mouse drag swipe
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        touchStartX.current = e.clientX;
        touchEndX.current = e.clientX;
        isSwiping.current = true;
        pauseAutoPlay();
    };
    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isSwiping.current) return;
        touchEndX.current = e.clientX;
    };
    const handleMouseUp = () => {
        if (!isSwiping.current) return;
        isSwiping.current = false;
        const diff = touchStartX.current - touchEndX.current;
        if (Math.abs(diff) > swipeThreshold) {
            diff > 0 ? goToNext() : goToPrevious();
        }
        resumeAutoPlay();
    };
    const handleMouseLeave = () => {
        if (isSwiping.current) handleMouseUp();
        resumeAutoPlay();
    };

    if (items.length === 0) return null;

    const currentItem = items[currentIndex];
    const slides = [-2, -1, 0, 1, 2].map(offset => ({
        item: getSlideItem(items, currentIndex, offset),
        offset,
    }));

    return (
        <section
            className="hero-carousel"
            onMouseEnter={pauseAutoPlay}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="hero-carousel-bg"
                style={{ backgroundImage: `url(${currentItem.bannerImage || currentItem.coverImage})` }}
            />

            <div className="carousel-edge-glow carousel-edge-glow-left" />
            <div className="carousel-edge-glow carousel-edge-glow-right" />

            <div
                className="hero-carousel-strip"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
            >
                {slides.map(({ item, offset }) => {
                    const isCenter = offset === 0;
                    return (
                        <div
                            key={`${item.id}-${offset}`}
                            className={`carousel-slide ${isCenter ? 'carousel-slide-center' : 'carousel-slide-side'}`}
                            onClick={() => {
                                if (offset < 0) goToPrevious();
                                else if (offset > 0) goToNext();
                            }}
                        >
                            {isCenter ? (
                                <Link to={`/series/${item.id}`} className="carousel-slide-link" draggable={false}>
                                    <img src={item.bannerImage || item.coverImage} alt={item.title} draggable={false} />
                                    <div className="carousel-slide-overlay" />
                                    <div className="carousel-glare" />
                                    <div className="carousel-tags">
                                        {item.chapters[0]?.isNew && <span className="carousel-tag tag-new">New</span>}
                                        <span className="carousel-tag tag-type">{item.type}</span>
                                        <span className={`carousel-tag tag-status tag-${item.status.toLowerCase()}`}>{item.status}</span>
                                    </div>
                                    <div className="carousel-slide-info">
                                        {item.koreanTitle && <p className="carousel-slide-korean">{item.koreanTitle}</p>}
                                        <h2 className="carousel-slide-title">{item.title}</h2>
                                        <div className="carousel-status-badge" style={{ color: getStatusColor(item.status) }}>
                                            <span className="status-dot" style={{ backgroundColor: getStatusColor(item.status) }} />
                                            {item.status.toUpperCase()}
                                        </div>
                                        <p className="carousel-slide-description">{item.synopsis || item.description}</p>
                                    </div>
                                </Link>
                            ) : (
                                <>
                                    <img src={item.coverImage} alt={item.title} draggable={false} />
                                    <div className="carousel-tags">
                                        {item.chapters[0]?.isNew && <span className="carousel-tag tag-new">New</span>}
                                        <span className="carousel-tag tag-type">{item.type}</span>
                                        <span className={`carousel-tag tag-status tag-${item.status.toLowerCase()}`}>{item.status}</span>
                                    </div>
                                    <div className="carousel-glare" />
                                </>
                            )}
                        </div>
                    );
                })}
            </div>

            <button className="carousel-arrow carousel-arrow-left" onClick={goToPrevious} aria-label="Previous slide">‹</button>
            <button className="carousel-arrow carousel-arrow-right" onClick={goToNext} aria-label="Next slide">›</button>

            <div className="carousel-dots">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
