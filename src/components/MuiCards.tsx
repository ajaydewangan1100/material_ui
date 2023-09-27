import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

export const MuiCards = () => {
  return (
    <Box width="300px" sx={{ padding: "20px" }}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="Unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            React lets you build user interfaces out of individual pieces called
            components. Create your own React components like Thumbnail,
            LikeButton, and Video. Then combine them into entire screens, pages,
            and apps.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
