import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import { withStyles } from "@material-ui/core/styles"

const styles = theme => ({
  form: {
    width: "100%"
  },
  textField: {
    width: "80%",
    height: "36px"
  },
  button: {
    width: "19%",
    margin: "15px 0 0 1%"
  }
})

const SearchBar = props => {
  const { classes } = props
  return (
    <Grid container spacing={24} alignItems="center">
      <form onSubmit={props.getNews} className={classes.form}>
        <TextField
          id="outlined-bare"
          className={classes.textField}
          placeholder="Keyword or Phrase Search"
          margin="normal"
          variant="outlined"
          name="search"
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          type='submit'
        >
          Primary
        </Button>
      </form>
    </Grid>
  )
}

export default withStyles(styles)(SearchBar)
