import React from 'react';

const InformationOfDestination = (props) => {
  console.log(props.destinationInfo)
  const { country, description, difficulty, name, price } = props.destinationInfo;

  return (
    <div className="destinationsList section container">
      <div className="card destinationsInformation">
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p>{country}</p>
          <p>{price}</p>
          <p>{difficulty}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default InformationOfDestination;