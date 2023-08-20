import React from "react";
import './tripssection.css'
import Heading from "../Heading/Heading";
import tbilisiImg from "../../assets/tbilisi.jpg";
import istanbulImg from "../../assets/istanbul.jpg";
import dubaiImg from "../../assets/dubai.png";
import pchuketImg from "../../assets/pchuket.jpg";
import TripCard from "../TripCard/TripCard";



const trips = [
  {
    id: 1,
    transportLable: 'на автобусе',
    capacityLable: 10,
    capacityLableImg: true,
    image: tbilisiImg,
    city: 'Тбилиси',
    month: 'апрель',
    price: '83.000'
  },
  {
    id: 2,
    transportLable: 'на самолете',
    capacityLable: null,
    capacityLableImg: false,
    image: istanbulImg,
    city: 'Стамбул',
    month: 'март',
    price: '110.000'
  },
  {
    id: 3,
    transportLable: 'на самолете',
    capacityLable: 15,
    capacityLableImg: true,
    image: dubaiImg,
    city: 'Дубаи',
    month: 'июнь',
    price: '220.000'
  },
  {
    id: 4,
    transportLable: 'самолет + паром',
    capacityLable: 11,
    capacityLableImg: true,
    image: pchuketImg,
    city: 'Пхукет',
    month: 'сентябрь',
    price: '135.000'
  }
]

function TripsSection() {
  return (
    <div>
      <Heading 
      level='h1'
      text='Галерея путешествий'
    />

    { trips.map(trip => (
      <TripCard 
          key={trip.id}
          transportLable={trip.transportLable}
          capacityLable={trip.capacityLable}
          capacityLableImg={trip.capacityLableImg}
          image={trip.image}
          city={trip.city}
          month={trip.month}
          price={trip.price}
    />
    )) }
    </div>
  );
};

export default TripsSection