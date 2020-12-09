import React, { useState } from "react";
import './Cards.scss';
import { Card } from 'antd';
import {useHistory} from 'react-router-dom';
import useFunctions from '../../functions/functions'

const { Meta } = Card;

export default function Cards({ onNavigateToDetail, country}) {


  function handleNavigateToDetail() {
      onNavigateToDetail(country)
  }


  return (
    <li className="country-container" data-testid="country-item" onClick={handleNavigateToDetail} >
      <Card
        hoverable
        cover={<img src={country.flag.svgFile} alt={country.name}></img>}
      >
        <Meta title={country.name} description={country.capital} />
      </Card>
    </li>
  )
}
