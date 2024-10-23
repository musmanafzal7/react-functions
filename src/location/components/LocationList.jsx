import React from "react";
import LocationItem from "./LocationItem";

const LocationList = (props) => {
  if (props.items.length === 0) {
    return <div>No data found.</div>;
  }

  return (
    <ul>
      {props.items.map((location) => (
        <LocationItem
          key={location.id}
          id={location.id}
          name={location.name}
          address={location.address}
          manager={location.manager}
        />
      ))}
    </ul>
  );
};

export default LocationList;
