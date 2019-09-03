import React, { Component } from 'react';

class SortDestinations extends Component {
  constructor() {
    super();
    this.state = {
      sortValue: '',
    }
  }


  handleOnChangeSort = (e) => {
    console.log(e.target.value)
    this.setState({
      sortValue: e.target.value,
      // isLowFirstChecked: true
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.sortValue)
    this.props.handleSort(this.state.sortValue)
    this.setState({
      sortValue: ''
    })
  }

  render() {
    return (
      <div className="sortDestinations section container">
        <form action="#" onSubmit={this.handleOnSubmit}>
          <div>
            <p>
              <label>
                <input name="group1" type="radio" value="highestPriceFirst" onChange={this.handleOnChangeSort} />
                <span>Highest Price</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" value="lowestPriceFirst" onChange={this.handleOnChangeSort} />
                <span>Lowest Price</span>
              </label>
            </p>
          </div>
          <button className="sortButton">Sort</button>
        </form>
      </div>
    )
  }
}

export default SortDestinations;