import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface Props {
    movie: { title: string; poster_path: string };
}

const MovieCard = ({ movie }: Props) => (
    <Card sx={{ maxWidth: 200, margin: 1 }}>
        <CardMedia
            component="img"
            height="300"
            image={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
        />
        <CardContent>
            <Typography variant="subtitle1">{movie.title}</Typography>
        </CardContent>
    </Card>
);

export default MovieCard;