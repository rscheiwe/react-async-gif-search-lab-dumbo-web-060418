import React, { Component } from 'react'
import GifListContainer from '../containers/GifListContainer.js'

class GifSearch extends Component {

  state = {
    searchTerm: ""
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleClick = () => {
    this.props.searching(this.state.searchTerm)
  }

  render() {
    return(
      <div>
        <input type="text" value={this.state.searchTerm} onChange={this.handleChange} placeholder="search for gifs" />
        <button onClick={this.handleClick}>SUBMIT</button>

      </div>

    )
  }
}

export default GifSearch
