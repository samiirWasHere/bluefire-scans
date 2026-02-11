import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Manhwa } from '../data/manhwa';
import './PopularSidebar.css';

interface PopularSidebarProps {
    items: Manhwa[];
}

type TabType = 'weekly' | 'monthly' | 'all';

export function PopularSidebar({ items }: PopularSidebarProps) {
    const [activeTab, setActiveTab] = useState<TabType>('weekly');

    // For now static — later can be dynamic per tab
    const displayItems = items;

    return (
        <aside className="popular-sidebar">
            <div className="sidebar-header">
                <h3>Popular Series</h3>
            </div>
            <div className="sidebar-tabs">
                <button
                    className={`sidebar-tab ${activeTab === 'weekly' ? 'active' : ''}`}
                    onClick={() => setActiveTab('weekly')}
                >
                    Weekly
                </button>
                <button
                    className={`sidebar-tab ${activeTab === 'monthly' ? 'active' : ''}`}
                    onClick={() => setActiveTab('monthly')}
                >
                    Monthly
                </button>
                <button
                    className={`sidebar-tab ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                >
                    All
                </button>
            </div>
            <div className="sidebar-list">
                {displayItems.map((manhwa, index) => (
                    <Link
                        key={manhwa.id}
                        to={`/series/${manhwa.id}`}
                        className="sidebar-item"
                    >
                        <span className={`sidebar-rank rank-${index + 1}`}>{index + 1}</span>
                        <div className="sidebar-thumb">
                            <img src={manhwa.coverImage} alt={manhwa.title} />
                        </div>
                        <div className="sidebar-info">
                            <h4 className="sidebar-title">{manhwa.title}</h4>
                            <div className="sidebar-rating">
                                <div className="star-rating">
                                    {[1, 2, 3, 4, 5].map(star => (
                                        <svg key={star} viewBox="0 0 24 24" className={manhwa.rating >= star ? 'star-filled' : manhwa.rating >= star - 0.5 ? 'star-half' : 'star-empty'}>
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="rating-value">{manhwa.rating}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </aside>
    );
}
