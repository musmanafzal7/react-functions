import React from "react";

import LocationList from "../components/LocationList";

const SampleLocations = [
    {
        id: '1',
        name: 'Anderson',
        address: 'abc 123 streeat xyz 890',
        manager: 'Chris'
    },
    {
        id: '2',
        name: 'Northbrook',
        address: 'abc 123 streeat xyz 890',
        manager: 'Jordan'
    }
]

const Locations = () =>{
    return <LocationList items={SampleLocations}/>
}

export default Locations;