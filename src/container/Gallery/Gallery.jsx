import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import './Gallery.css';
import { SubHeading } from '../../components';
import { images } from '../../assets/constants';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04 ];
const Gallery = () => {
const scrollRef = React.useRef(null);
const scroll = (direction) => {
  const {current} = scrollRef
  if(direction === 'left' ){
    current.scrollLeft -= 300;
  } else {
    current.scrollLeft += 300;
  }
}
return (
  <div className="app__gallery flex__center" >
    <div className="app__gallery-content">
      <SubHeading title="Instagram"/>
      <h1 className="headtext__cormorant" style={{ color: '#0C0C0C'}}>Gallery</h1>
      <p className="p__opensans" style={{ color: '#0C0C0C', marginTop: '2rem' }} >The JerkShack team wholeheartedly invite you and your close ones to experience its mouth-watering food</p>
      <button type="button" className="custom__button" >View More</button>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {galleryImages.map((image, index) =>
          <div className="app__gallery-images_card flex__center" key={'gallery_image-${index + 1}'}>
            <img src={image} alt= "galleryImage" />
            <BsInstagram ClassName="gallery__image-icon" />
          </div>
        )}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort  className="gallery__arrow-icon" onClick={()  => scroll('left')} />
        <BsArrowRightShort className="gallery__arrow-icon" onClick={()  => scroll('right')} />
      </div>
      </div>
  </div>
);
}

export default Gallery;