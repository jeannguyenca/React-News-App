import React from "react"
import { withStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const styles = theme => ({
  root: {
    marginTop: "50px"
  },
  img: {
    width: "100%",
    objectFit: "contain"
  }
})

const NewsTabContainer = props => {
  const { classes } = props
  return (
    <Grid container spacing={24} className={classes.root}>
      {props.news ? (
        props.news.map((aNew, key) => {
          return (
            <React.Fragment key={key}>
              <Grid item xs={12} sm={4}>
                <img
                  src={aNew.urlToImage}
                  alt={aNew.title}
                  className={classes.img}
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography component="h5" variant="h5">{aNew.title}</Typography>
                <Typography variant="subtitle1">{aNew.description}</Typography>
                <Typography>
                  <a href={aNew.url}>Link</a>
                </Typography>
              </Grid>
            </React.Fragment>
          )
        })
      ) : (
        <Typography>Please type a keyword to search</Typography>
      )}
    </Grid>
  )
}

export default withStyles(styles)(NewsTabContainer)
