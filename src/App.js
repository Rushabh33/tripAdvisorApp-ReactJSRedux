import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navigation/Navigation';
import CreateDestination from './components/destinations/CreateDestination'
import ListDestinations from './components/destinations/ListDestinations'
import AppDetails from './components/AppDetails'

const priceSortFunctionLowToHigh = (a, b) => {
  return parseFloat(a.price) - parseFloat(b.price)
}
const priceSortFunctionHighToLow = (a, b) => {
  return parseFloat(b.price) - parseFloat(a.price)
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfDestinations: [],
    }
  }

  handleNewDestination = (currentState) => {
    const newListofDestinations = [...this.state.listOfDestinations]
    console.log(newListofDestinations)
    newListofDestinations.push(currentState);
    this.setState({
      listOfDestinations: newListofDestinations,
    })
  }

  handleSort = (eventValue) => {
    const newListofDestinations = [...this.state.listOfDestinations]
    console.log(eventValue)
    if (eventValue === "lowestPriceFirst") {
      const sorted = newListofDestinations.sort(priceSortFunctionLowToHigh)
      console.log(sorted)
      this.setState({
        listOfDestinations: sorted
      })
    }

    else if (eventValue === "highestPriceFirst") {
      const sorted = newListofDestinations.sort(priceSortFunctionHighToLow)
      console.log(sorted)
      this.setState({
        listOfDestinations: sorted
      })
      console.log(this.state.listOfDestinations)
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div class="app">
          <NavBar />
          <Switch>
            <Route exact path='/' component={AppDetails} />
            <Route path='/destinations' render={(props) => <ListDestinations {...props} listOfDestinations={this.state.listOfDestinations} handleSort={this.handleSort} />} />
            <Route path='/create' render={(props) => <CreateDestination {...props} handleNewDestination={this.handleNewDestination} />} />
          </Switch>
        </div>
      </BrowserRouter >
    )
  }
}

export default App;
