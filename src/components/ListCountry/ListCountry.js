import React from "react";
import {useHistory} from 'react-router-dom';

import Cards from "../Cards/Cards";
import useFunctions from "../../functions/functions";

import './ListCountry.scss';


export default function ListCountry({ countries }) {
  const history = useHistory();
  const {handleSelectedCountry } = useFunctions();

   function handleNavigateToDetail(country) {    
    handleSelectedCountry(country);    
    history.push(`/country/${country.name}`)    
  }
 
  if (!countries || countries.length === 0) {
    
    return <div>No Countries</div>;
  }

  return (
    <ol data-testid="country-list" className="cards-wrapper item-grid container-padding ">
      {countries.map((country, index) => (
        <Cards  onNavigateToDetail={handleNavigateToDetail} key={index} country={country}  />

        ))}
    </ol>
  );
}
