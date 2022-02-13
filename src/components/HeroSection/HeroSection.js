import React from 'react';
import './../../App.css';
import { Button } from './../index';
import './HeroSection.css';
import video from './../../videos/video.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted/>
      <h1>NATURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('Hello Trailer')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
