import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";
import { Parallax } from "react-scroll-parallax";
import topback from "../../svgs/topback.svg";



const styles = (theme) => ({
  background: {
    backgroundImage: `url(${topback})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
    objectFit: "cover",
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <Parallax>
        {" "}
        <img
          style={{ display: "none" }}
          src={topback}
          alt="increase priority"
        />
      </Parallax>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Earn money right now!
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        className={classes.h5}
      >
        Enjoy the ability to do odd jobs without any kind of formal degree. You
        can start Working the moment you register!
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.button}
        component="a"
        href=""
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" className={classes.more}>
        Start hunting right now
      </Typography>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
