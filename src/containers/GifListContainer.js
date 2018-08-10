import React, { Component } from 'react'
import GifList from '../components/GifList.js'
import GifSearch from '../components/GifSearch.js'

class GifListContainer extends Component {

  state = {
    gifs: [],
  }

  componentDidMount() {
    this.searching("dogs")
  }

  searching = (searchTerm) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(res => res.json())
      .then(json => this.passGifs(json))

  }

  passGifs = (json) => {
    const size = 3
    this.setState({ gifs: json.data.slice(0,size)})
  }

  render() {
    return (
      <div>
        <GifSearch searching={this.searching} />
        <h2 />
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default GifListContainer
