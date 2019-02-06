import React, { Component } from "react"
import "./App.css"

import { withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"

import SearchBar from "./components/SearchBar"
import AppTabs from "./components/AppTabs"
import Typography from "@material-ui/core/Typography"

const styles = theme => ({
  app: {
    maxWidth: "1000px",
    margin: "0 auto"
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit *2,
    height: "70vh"
  },
})

class App extends Component {
  state = {
    search:"",
  }

  getNews = async (event) => {
    event.preventDefault()
    this.setState({search:event.target.elements.search.value})
  }


  render() {
    const { classes } = this.props
    return (
      <div className={classes.app}>
        <Typography component="h1" variant="h1" align="center">
          React News App
        </Typography>
        <Paper elevation={1} className={classes.root}>
          <SearchBar getNews={this.getNews}/>
          <AppTabs search={this.state.search}/>
        </Paper>
      </div>
    )
  }
}

export default withStyles(styles)(App)
