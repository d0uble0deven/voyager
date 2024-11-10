import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CardComponent() {
  return (
    <>
      {/* <div className="edge bg boundary">
        <img
          className="edge bg"
          src="https://flowbite.com/docs/images/blog/image-4.jpg"
          alt=""
        ></img>
        <section className="edge bg">
          <h1 className="edge bg">title</h1>
          <p className="edge bg"></p>
        </section>
      </div> */}

      <Card sx={{ maxWidth: "40%", margin: "10px 0" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Explore the Galapagos Island
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Santiago, Chile
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              $1,900
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              March 20, 2025
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">
            <ShoppingCartIcon></ShoppingCartIcon>
          </Button>
          <Button size="small" color="primary">
            View Tour
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: "40%", margin: "10px 0" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fred Again... at the Pyramids
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Cairo, Egypt
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              $2,900
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              June 2, 2025
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">
            <ShoppingCartIcon></ShoppingCartIcon>
          </Button>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: "40%", margin: "10px 0" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fred Again... at the Pyramids
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Cairo, Egypt
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              $2,900
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              June 2, 2025
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">
            <ShoppingCartIcon></ShoppingCartIcon>
          </Button>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: "40%", margin: "10px 0" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Fred Again... at the Pyramids
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Cairo, Egypt
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              $2,900
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              June 2, 2025
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small">
            <ShoppingCartIcon></ShoppingCartIcon>
          </Button>
          <Button size="small" color="primary">
            Details
          </Button>
        </CardActions>
      </Card>

      {/* <a
        href="#"
        class="flex flex-col items-center bg-black border border-black-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-black-100 dark:border-black-700 dark:bg-black-800 dark:hover:bg-black-700"
      >
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="https://flowbite.com/docs/images/blog/image-4.jpg"
          alt=""
        ></img>
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-black-900 dark:text-black">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="mb-3 font-normal text-black-700 dark:text-black-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a> */}
    </>
  );
}

export default CardComponent;
