import React from 'react';
import ReactStars from 'react-rating-stars-component';

import restaurante from '../../assets/restaurante-fake.png';

import { Restaurant, RestaurantInfo, RestaurantPhoto, Title, Address } from './styles';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do restaurante</Title>
      <ReactStars count={5} edit={false} value={4} isHalf activeColor="#e7711c" />
      <Address>Rua Teste, 6699</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="Foto do restaurante teste" />
  </Restaurant>
);

export default RestaurantCard;
