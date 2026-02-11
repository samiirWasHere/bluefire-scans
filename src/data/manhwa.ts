export interface Chapter {
    id: string;
    number: number;
    title?: string;
    releaseDate: string;
    isNew?: boolean;
}

export type ManhwaStatus = 'Completed' | 'Ongoing' | 'Hiatus';
export type ManhwaType = 'Manhwa' | 'Manhua' | 'Manga';

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
    status: ManhwaStatus;
    type: ManhwaType;
    chapters: Chapter[];
}

// Mock data for the application - using manga cover-style images
export const manhwaData: Manhwa[] = [
    {
        id: "solo-leveling",
        title: "Solo Leveling",
        koreanTitle: "나 혼자만 레벨업",
        coverImage: "/covers/1.png",
        bannerImage: "/covers/1.png",
        description: "The greatest hunter rises from the weakest rank.",
        synopsis: "10 years ago, after the Gate that connected the real world with the monster world opened, some of the ordinary, everyday people received the power to hunt monsters within the Gate. They are known as \"Hunters\". However, not all Hunters are powerful.",
        genres: ["Action", "Adventure", "Fantasy", "Shounen", "System"],
        author: "Chugong",
        artist: "Dubu (Redice)",
        serialization: "KakaoPage",
        rating: 4.9,
        status: "Completed",
        type: "Manhwa",
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
        koreanTitle: "전지적 독자 시점",
        coverImage: "/covers/2.jpg",
        description: "Only I know the end of the world.",
        synopsis: "The world has become a novel. Only I know the end of this world.",
        genres: ["Action", "Fantasy", "System"],
        author: "Sing Shong",
        artist: "Sleepy-C",
        rating: 4.9,
        status: "Ongoing",
        type: "Manhwa",
        chapters: [
            { id: "240", number: 240, releaseDate: "20m ago", isNew: true },
            { id: "239", number: 239, releaseDate: "1h ago" },
            { id: "238", number: 238, releaseDate: "2h ago" },
        ]
    },
    {
        id: "the-beginning-after-the-end",
        title: "The Beginning After The End",
        koreanTitle: "끝이 아닌 시작",
        coverImage: "/covers/3.jpg",
        description: "A king reborn in a new world of magic.",
        synopsis: "King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability. However, solitude lingers closely behind those with great power.",
        genres: ["Action", "Adventure", "Drama", "Fantasy"],
        author: "TurtleMe",
        artist: "Fuyuki23",
        rating: 4.8,
        status: "Ongoing",
        type: "Manhwa",
        chapters: [
            { id: "185", number: 185, releaseDate: "1h ago", isNew: true },
            { id: "184", number: 184, releaseDate: "2h ago" },
            { id: "183", number: 183, releaseDate: "1d ago" },
        ]
    },
    {
        id: "how-to-live-as-a-villain",
        title: "How to Live as a Villain",
        koreanTitle: "악당으로 사는 법",
        coverImage: "/covers/4.jpg",
        description: "Becoming the villain in a fantasy world.",
        synopsis: "Reborn as a villain in a fantasy novel, he must survive using his knowledge of the story.",
        genres: ["Action", "Fantasy", "Drama"],
        author: "Unknown",
        artist: "Unknown",
        rating: 4.5,
        status: "Ongoing",
        type: "Manhwa",
        chapters: [
            { id: "189", number: 189, releaseDate: "2h ago", isNew: true },
            { id: "188", number: 188, releaseDate: "3h ago" },
        ]
    },
    {
        id: "martial-god-regressed",
        title: "Martial God Regressed to Level 2",
        koreanTitle: "무신이 레벨 2로 회귀",
        coverImage: "/covers/5.jpg",
        description: "The strongest martial god returns to the beginning.",
        synopsis: "The strongest martial god who reached the pinnacle of power regresses back to level 2 to redo everything.",
        genres: ["Action", "Fantasy", "Martial Arts"],
        author: "Unknown",
        artist: "Unknown",
        rating: 4.6,
        status: "Ongoing",
        type: "Manhwa",
        chapters: [
            { id: "92", number: 92, releaseDate: "3h ago", isNew: true },
            { id: "91", number: 91, releaseDate: "4h ago" },
        ]
    },
    {
        id: "nano-machine",
        title: "Nano Machine",
        koreanTitle: "나노 마신",
        coverImage: "/covers/6.jpg",
        description: "A nano machine changes the fate of the martial world.",
        synopsis: "After being implanted with a nano machine from the future, he begins to unlock hidden abilities in the world of murim.",
        genres: ["Action", "Martial Arts", "Sci-Fi"],
        author: "Han Jung Woorl",
        artist: "Geum Gang Bul Gae",
        rating: 4.7,
        status: "Hiatus",
        type: "Manhwa",
        chapters: [
            { id: "142", number: 142, releaseDate: "4h ago" },
            { id: "141", number: 141, releaseDate: "5h ago" },
        ]
    },
    {
        id: "return-mount-hua-sect",
        title: "Return of the Mount Hua Sect",
        koreanTitle: "화산귀환",
        coverImage: "/covers/7.jpg",
        description: "The Plum Blossom Sword Saint returns.",
        synopsis: "The 13th generation disciple of the Great Mount Hua Sect, one of the three great swordsmen, returns to the past.",
        genres: ["Action", "Fantasy", "Martial Arts", "Comedy"],
        author: "Biga",
        artist: "LICO",
        rating: 4.8,
        status: "Ongoing",
        type: "Manhwa",
        chapters: [
            { id: "88", number: 88, releaseDate: "5h ago" },
            { id: "87", number: 87, releaseDate: "6h ago" },
        ]
    },
    {
        id: "sss-class-suicide-hunter",
        title: "SSS-Class Suicide Hunter",
        koreanTitle: "SSS급 자살헌터",
        coverImage: "/covers/8.jpg",
        description: "Death is just the beginning of my power.",
        synopsis: "He gains the ability to copy powers by dying, turning his weakness into the ultimate strength.",
        genres: ["Action", "Fantasy", "System"],
        author: "Shin Noah",
        artist: "Bill K",
        rating: 4.7,
        status: "Ongoing",
        type: "Manhwa",
        chapters: [
            { id: "95", number: 95, releaseDate: "6h ago" },
            { id: "94", number: 94, releaseDate: "7h ago" },
        ]
    },
    {
        id: "mercenary-enrollment",
        title: "Mercenary Enrollment",
        koreanTitle: "입학용병",
        coverImage: "/covers/9.jpg",
        description: "The strongest mercenary enrolls in high school.",
        synopsis: "A former child mercenary enrolls in a normal high school, but trouble follows wherever he goes.",
        genres: ["Action", "Drama", "School Life"],
        author: "YC",
        artist: "Rak Hyun",
        rating: 4.6,
        status: "Hiatus",
        type: "Manhwa",
        chapters: [
            { id: "110", number: 110, releaseDate: "8h ago" },
            { id: "109", number: 109, releaseDate: "9h ago" },
        ]
    },
    {
        id: "return-disaster-class-hero",
        title: "Return of the Disaster-Class Hero",
        koreanTitle: "재앙급 영웅의 귀환",
        coverImage: "/covers/10.jpg",
        bannerImage: "/covers/10.jpg",
        description: "The greatest hero of the century returns to take his revenge.",
        synopsis: "He was betrayed by those he trusted the most. Now he returns stronger than ever, seeking vengeance.",
        genres: ["Action", "Fantasy", "Revenge"],
        author: "SAN.G",
        artist: "Hwarang",
        rating: 4.7,
        status: "Ongoing",
        type: "Manhwa",
        chapters: [
            { id: "112", number: 112, releaseDate: "1h ago", isNew: true },
            { id: "111", number: 111, releaseDate: "3h ago" },
        ]
    },
    {
        id: "legendary-youngest-son",
        title: "Legendary Youngest Son of the Marquis House",
        koreanTitle: "후작가의 전설적인 막내",
        coverImage: "/covers/11.jpg",
        description: "The youngest son of a noble house has a legendary secret.",
        synopsis: "The youngest son of a prestigious marquis family discovers he possesses extraordinary abilities.",
        genres: ["Action", "Adventure", "Drama", "Fantasy"],
        author: "Unknown",
        artist: "Unknown",
        rating: 4.5,
        status: "Completed",
        type: "Manhwa",
        chapters: [
            { id: "85", number: 85, releaseDate: "2d ago" },
            { id: "84", number: 84, releaseDate: "3d ago" },
        ]
    },
    {
        id: "tower-of-god",
        title: "Tower of God",
        koreanTitle: "신의 탑",
        coverImage: "/covers/11.jpg",
        description: "Climb the tower to find everything you desire.",
        synopsis: "A young boy enters a mysterious tower to chase after his dearest friend, facing trials and powerful enemies.",
        genres: ["Fantasy", "Adventure", "Action"],
        author: "SIU",
        artist: "SIU",
        rating: 4.8,
        status: "Ongoing",
        type: "Manhwa",
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

export function getTrendingSeries(): Manhwa[] {
    return [...manhwaData].sort((a, b) => b.rating - a.rating).slice(0, 5);
}

export function getRecentlyAdded(): Manhwa[] {
    return manhwaData.slice(3, 11);
}
