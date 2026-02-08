export interface Chapter {
    id: string;
    number: number;
    title?: string;
    releaseDate: string;
    isNew?: boolean;
}

export interface Manhwa {
    id: string;
    title: string;
    koreanTitle?: string;
    coverImage: string;
    bannerImage?: string;
    description: string;
    synopsis?: string;
    genres: string[];
    author: string;
    artist: string;
    serialization?: string;
    rating: number;
    chapters: Chapter[];
}

// Mock data for the application
export const manhwaData: Manhwa[] = [
    {
        id: "solo-leveling",
        title: "Solo Leveling",
        koreanTitle: "나 혼자만 레벨업",
        coverImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=300&h=450&fit=crop",
        bannerImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1400&h=600&fit=crop",
        description: "The greatest hunter rises from the weakest rank.",
        synopsis: "10 years ago, after the Gate that connected the real world with the monster world opened, some of the ordinary, everyday people received the power to hunt monsters within the Gate. They are known as \"Hunters\". However, not all Hunters are powerful. My name is Sung Jin-Woo, an E-rank Hunter. I'm someone who has to risk his life in the lowliest of dungeons, the \"World's Weakest\". Having no skills to display, I barely earned the required money by fighting in low-leveled dungeons... at least until I found a hidden dungeon with the hardest difficulty within the D-rank dungeons! In the end, as I was accepting death, I suddenly received a strange power, a quest log that only I could see, a secret to leveling up that only I know about!",
        genres: ["Action", "Adventure", "Fantasy", "Shounen", "System"],
        author: "Chugong",
        artist: "Dubu (Redice)",
        serialization: "KakaoPage",
        rating: 4.9,
        chapters: [
            { id: "179", number: 179, title: "Epilogue (Final)", releaseDate: "Dec 29, 21" },
            { id: "178", number: 178, releaseDate: "Dec 22, 21" },
            { id: "177", number: 177, releaseDate: "Yesterday", isNew: true },
            { id: "176", number: 176, releaseDate: "Dec 08, 21" },
            { id: "175", number: 175, releaseDate: "Dec 01, 21" },
            { id: "174", number: 174, releaseDate: "Nov 24, 21" },
            { id: "173", number: 173, releaseDate: "Nov 17, 21" },
            { id: "172", number: 172, releaseDate: "Nov 10, 21" },
        ]
    },
    {
        id: "omniscient-reader",
        title: "Omniscient Reader",
        coverImage: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=300&h=450&fit=crop",
        description: "Only I know the end of the world.",
        synopsis: "The world has become a novel. Only I know the end of this world.",
        genres: ["Action", "Fantasy", "System"],
        author: "Sing Shong",
        artist: "Sleepy-C",
        rating: 4.9,
        chapters: [
            { id: "240", number: 240, releaseDate: "20m ago", isNew: true },
            { id: "239", number: 239, releaseDate: "1h ago" },
            { id: "238", number: 238, releaseDate: "2h ago" },
        ]
    },
    {
        id: "the-beginning-after-the-end",
        title: "The Beginning After The End",
        coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=300&h=450&fit=crop",
        description: "A king reborn in a new world of magic.",
        synopsis: "King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power.",
        genres: ["Action", "Adventure", "Drama", "Magic"],
        author: "TurtleMe",
        artist: "Fuyuki23",
        rating: 4.8,
        chapters: [
            { id: "185", number: 185, releaseDate: "1h ago", isNew: true },
            { id: "184", number: 184, releaseDate: "2h ago" },
            { id: "183", number: 183, releaseDate: "1d ago" },
        ]
    },
    {
        id: "how-to-live-as-a-villain",
        title: "How to Live as a Villain",
        coverImage: "https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?w=300&h=450&fit=crop",
        description: "Becoming the villain in a fantasy world.",
        genres: ["Action", "Fantasy", "Drama"],
        author: "Unknown",
        artist: "Unknown",
        rating: 4.5,
        chapters: [
            { id: "189", number: 189, releaseDate: "2h ago", isNew: true },
            { id: "188", number: 188, releaseDate: "3h ago" },
        ]
    },
    {
        id: "martial-god-regressed",
        title: "Martial God Regressed to Level 2",
        coverImage: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=300&h=450&fit=crop",
        description: "The strongest martial god returns to the beginning.",
        genres: ["Action", "Fantasy", "Martial Arts"],
        author: "Unknown",
        artist: "Unknown",
        rating: 4.6,
        chapters: [
            { id: "92", number: 92, releaseDate: "3h ago", isNew: true },
            { id: "91", number: 91, releaseDate: "4h ago" },
        ]
    },
    {
        id: "nano-machine",
        title: "Nano Machine",
        coverImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=450&fit=crop",
        description: "A nano machine changes the fate of the martial world.",
        genres: ["Action", "Martial Arts", "Sci-Fi"],
        author: "Han Jung Woorl",
        artist: "Geum Gang Bul Gae",
        rating: 4.7,
        chapters: [
            { id: "142", number: 142, releaseDate: "4h ago" },
            { id: "141", number: 141, releaseDate: "5h ago" },
        ]
    },
    {
        id: "return-mount-hua-sect",
        title: "Return of the Mount Hua Sect",
        coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop",
        description: "The Plum Blossom Sword Saint returns.",
        genres: ["Action", "Fantasy", "Martial Arts", "Comedy"],
        author: "Biga",
        artist: "LICO",
        rating: 4.8,
        chapters: [
            { id: "88", number: 88, releaseDate: "5h ago" },
            { id: "87", number: 87, releaseDate: "6h ago" },
        ]
    },
    {
        id: "sss-class-suicide-hunter",
        title: "SSS-Class Suicide Hunter",
        coverImage: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=300&h=450&fit=crop",
        description: "Death is just the beginning of my power.",
        genres: ["Action", "Fantasy", "System"],
        author: "Shin Noah",
        artist: "Bill K",
        rating: 4.7,
        chapters: [
            { id: "95", number: 95, releaseDate: "6h ago" },
            { id: "94", number: 94, releaseDate: "7h ago" },
        ]
    },
    {
        id: "mercenary-enrollment",
        title: "Mercenary Enrollment",
        coverImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=450&fit=crop",
        description: "The strongest mercenary enrolls in high school.",
        genres: ["Action", "Drama", "School Life"],
        author: "YC",
        artist: "Rak Hyun",
        rating: 4.6,
        chapters: [
            { id: "110", number: 110, releaseDate: "8h ago" },
            { id: "109", number: 109, releaseDate: "9h ago" },
        ]
    },
    {
        id: "return-disaster-class-hero",
        title: "Return of the Disaster-Class Hero",
        coverImage: "https://images.unsplash.com/photo-1516239482977-b550ba7253f2?w=300&h=450&fit=crop",
        bannerImage: "https://images.unsplash.com/photo-1516239482977-b550ba7253f2?w=1400&h=600&fit=crop",
        description: "The greatest hero of the century returns to take his revenge.",
        genres: ["Action", "Fantasy", "Revenge"],
        author: "SAN.G",
        artist: "Hwarang",
        rating: 4.7,
        chapters: [
            { id: "112", number: 112, releaseDate: "1h ago", isNew: true },
            { id: "111", number: 111, releaseDate: "3h ago" },
        ]
    },
    {
        id: "legendary-youngest-son",
        title: "Legendary Youngest Son of the Marquis House",
        coverImage: "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?w=300&h=450&fit=crop",
        description: "The youngest son of a noble house has a legendary secret.",
        genres: ["Action", "Adventure", "Drama", "Fantasy"],
        author: "Unknown",
        artist: "Unknown",
        rating: 4.5,
        chapters: [
            { id: "85", number: 85, releaseDate: "2d ago" },
            { id: "84", number: 84, releaseDate: "3d ago" },
        ]
    },
    {
        id: "tower-of-god",
        title: "Tower of God",
        coverImage: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=300&h=450&fit=crop",
        description: "Climb the tower to find everything you desire.",
        genres: ["Fantasy", "Adventure", "Action"],
        author: "SIU",
        artist: "SIU",
        rating: 4.8,
        chapters: [
            { id: "580", number: 580, releaseDate: "3d ago" },
            { id: "579", number: 579, releaseDate: "1w ago" },
        ]
    },
];

// Helper functions
export function getManhwaById(id: string): Manhwa | undefined {
    return manhwaData.find(m => m.id === id);
}

export function getLatestUpdates(): Manhwa[] {
    return manhwaData.slice(0, 8);
}

export function getPopularSeries(): Manhwa[] {
    return manhwaData.filter(m => m.rating >= 4.5).slice(0, 5);
}

export function getFeaturedManhwa(): Manhwa {
    return manhwaData.find(m => m.id === "return-disaster-class-hero") || manhwaData[0];
}

export function getRecommendations(currentId: string): Manhwa[] {
    return manhwaData.filter(m => m.id !== currentId).slice(0, 3);
}

export function getCarouselManhwa(): Manhwa[] {
    // Return manhwas with banner images first, then fill with others
    const withBanners = manhwaData.filter(m => m.bannerImage);
    const withoutBanners = manhwaData.filter(m => !m.bannerImage);
    return [...withBanners, ...withoutBanners].slice(0, 6);
}
