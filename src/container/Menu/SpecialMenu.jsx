import React from 'react';
import { MenuItem } from '../../components';
import { SubHeading } from '../../components';
import { images, data } from '../../assets/constants';
import './SpecialMenu.css'

const SpecialMenu = () => (
  <section className="special-menu">
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu">
      <SubHeading title="Menu That Fits Your Pallate"/>
      <h2>Menu That Fits Your Pallate</h2>
      <h2>Classics</h2>
    <div className="app__specialMenu-menu">
      <div clasNAme="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_image">
        <img src={images.menu} alt="menu img" img id="menuphoto"/>
      </div>
      <div clasName="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
             <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{marginTop: '15px'}}>
         <button type="button" className="custom__button">View More</button>
    </div>
  </div>
  </div>
  </section>
);

export default SpecialMenu;
