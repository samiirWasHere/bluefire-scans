import './GenreTag.css';

interface GenreTagProps {
    genre: string;
    onClick?: () => void;
}

export function GenreTag({ genre, onClick }: GenreTagProps) {
    return (
        <span className="genre-tag" onClick={onClick}>
            {genre}
        </span>
    );
}
