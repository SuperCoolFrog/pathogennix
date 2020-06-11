import React from 'react';
import Carousel from 're-carousel';
import CarouselCard from './components/CarouselCard/CarouselCard';

const HomeCarousel = () => {
  return (
    <Carousel auto loop interval={7000}>
      <CarouselCard headerText="Same Day Local Deliveries"
        bodyText="Deliveries local to Allentown, PA will be delivered within 24hrs"
        imageSrc="/images/same-day-delivery.jpg"
        bg5
      />
      <CarouselCard headerText="Protective Gear to Protect Yourself and Others"
        bodyText="We take care of the searching for the things you need for yourself and your business"
        imageSrc="/images/protection.jpg"
        bg1
      />
      <CarouselCard headerText="Getting Back Together Safely"
        bodyText="Suppies to get one step closer to where we use to be"
        imageSrc="/images/group-image.jpg"
        bg3
      />
    </Carousel>
  );
};

export default HomeCarousel;