import React, { Component } from 'react';
import SortDestinations from './SortDestinations';
import InformationOfDestination from './InformationOfDestination'
import Loading from '../Loading';


class ListDestinations extends Component {


  render() {
    const isDestinationsAvailable = this.props.listOfDestinations.length;
    return (
      <>
        <SortDestinations handleSort={this.props.handleSort} />
        {/* {console.log(this.props.listOfDestinations)} */}
        {/* {this.props.listOfDestinations.map((destinationInfo, index) => {
          return <InformationOfDestination destinationInfo={destinationInfo} index={index} />
        })} */}
        {/* {console.log(Boolean(isDestinationsAvailable))} */}
        {isDestinationsAvailable ?
          (this.props.listOfDestinations.map((destinationInfo, index) => {
            return <InformationOfDestination destinationInfo={destinationInfo} index={index} />
          }))
          : <Loading />}
      </>
    )
  }
}

export default ListDestinations;