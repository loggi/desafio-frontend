import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import style from './Cards.module.sass'

export const CardPromo = () => {
    return (
        <div className={`grid ${style.cards}`}>
            <Card>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://wp-admin.loggi.com/wp-content/uploads/2023/08/cefa1b0babb9bcd5ec237f6a5083c663-952x838-1.png"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            <Card>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://wp-admin.loggi.com/wp-content/uploads/2023/08/cefa1b0babb9bcd5ec237f6a5083c663-952x838-1.png"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>

            <Card>
                <CardMedia
                    sx={{ height: 140 }}
                    image="https://wp-admin.loggi.com/wp-content/uploads/2023/08/cefa1b0babb9bcd5ec237f6a5083c663-952x838-1.png"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    )
}