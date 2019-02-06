import React from "react"
import axios from "axios"
import { withStyles } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import NewsTabContainer from "./NewsTabContainer"

const API = "495bf560c65545bca06c3a8d541b8f4a"

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    paddingTop: "40px"
  }
})

class AppTabs extends React.Component {
  state = {
    value: 2
  }

  componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      this.getNews()
      return true
    }
    return false
  }

  getNews() {
    var url
    var country

    switch (this.state.value) {
      case 0:
        country = "canada"
        break
      case 1:
        country = "us"
        break
      case 2:
        country = ""
        break
      case 3:
        country = "singapore"
        break
      case 4:
        country = "japan"
        break
      default:
        break
    }

    console.log(country + " " + this.state.value)

    if (country !== "") {
      url = `https://newsapi.org/v2/top-headlines?q=${
        this.props.search
      }&country=${country}&apiKey=${API}`
    } else {
      url = `https://newsapi.org/v2/top-headlines?q=${
        this.props.search
      }&apiKey=${API}`
    }

    console.log(url)

    axios
      .get(url)
      .then(result => {
        console.log(result)
        this.setState({
          news: result.data.articles
        })
      })
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      )
  }

  handleChange = (event, value) => {
    this.setState({ value })

    this.getNews()
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <Tabs value={value} onChange={this.handleChange} variant="fullWidth">
          <Tab label="Canada" />
          <Tab label="US" />
          <Tab label="Search Result" />
          <Tab label="Singapore" />
          <Tab label="Japan" />
        </Tabs>
        {value === 0 && <NewsTabContainer news={this.state.news} />}
        {value === 1 && <NewsTabContainer news={this.state.news} />}
        {value === 2 && <NewsTabContainer news={this.state.news} />}
        {value === 3 && <NewsTabContainer news={this.state.news} />}
        {value === 4 && <NewsTabContainer news={this.state.news} />}
      </div>
    )
  }
}

export default withStyles(styles)(AppTabs)
