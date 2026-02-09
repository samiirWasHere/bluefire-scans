import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import type { Manhwa } from '../data/manhwa';
import './HeroCarousel.css';

interface HeroCarouselProps {
    items: Manhwa[];
}

export function HeroCarousel({ items }: HeroCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    }, [items.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, [items.length]);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            goToNext();
        }, 3500);

        return () => clearInterval(interval);
    }, [isAutoPlaying, goToNext]);

    // Pause auto-play on hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    if (items.length === 0) return null;

    const currentItem = items[currentIndex];

    return (
        <section
            className="hero-carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Background blur effect */}
            <div
                className="hero-carousel-bg"
                style={{ backgroundImage: `url(${currentItem.bannerImage || currentItem.coverImage})` }}
            />

            {/* Main content */}
            <div
                className="hero-carousel-content"
            >
                {/* Previous slide preview */}
                <div className="carousel-preview" onClick={goToPrevious}>
                    <img
                        src={items[(currentIndex - 1 + items.length) % items.length].coverImage}
                        alt="Previous"
                    />
                </div>

                {/* Center slide */}
                <Link
                    to={`/series/${currentItem.id}`}
                    className="carousel-main-slide"
                >
                    <div className="carousel-slide-image">
                        <img
                            src={currentItem.bannerImage || currentItem.coverImage}
                            alt={currentItem.title}
                        />
                        <div className="carousel-slide-overlay" />
                    </div>
                    <div className="carousel-slide-info">
                        <h2 className="carousel-slide-title">{currentItem.title}</h2>
                        <p className="carousel-slide-description">{currentItem.description}</p>
                        <div className="carousel-slide-genres">
                            {currentItem.genres.slice(0, 3).map((genre) => (
                                <span key={genre} className="carousel-genre-tag">
                                    {genre}
                                </span>
                            ))}
                        </div>
                    </div>
                </Link>

                {/* Next slide preview */}
                <div className="carousel-preview" onClick={goToNext}>
                    <img
                        src={items[(currentIndex + 1) % items.length].coverImage}
                        alt="Next"
                    />
                </div>
            </div>

            {/* Pagination dots */}
            <div className="carousel-dots">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
