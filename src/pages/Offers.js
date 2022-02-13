import React from 'react';
import { FlipCard, Footer } from './../components';
import './Offers.css';
import sea from './../images/nat-1.jpg';
import jungle from './../images/nat-2.jpg';
import snow from './../images/nat-3.jpg';

export default function Offers() {
  const option1 = {
    "days":"3 day tours",
    "peoples": "Up to 30 peoples",
    "guides": "2 tour guides",
    "acomdation": "Sleep in crasy hotels"
  }
  const option2 = {
    "days":"7 day tours",
    "peoples": "Up to 40 peoples",
    "guides": "6 tour guides",
    "acomdation": "Sleep in crasy hotels"
  }
  const option3 = {
    "days":"5 day tours",
    "peoples": "Up to 15 peoples",
    "guides": "2 tour guides",
    "acomdation": "Sleep in provided tents"
  }

  return (
    <>
        <div className='offers-container'>
          <FlipCard background={sea} option={option1} price="1500 $"/>
          <FlipCard background={jungle} option={option2} price="2000 $"/>
          <FlipCard background={snow} option={option3} price="1700 $"/>
      </div>
      <Footer />
    </>

  );
}
