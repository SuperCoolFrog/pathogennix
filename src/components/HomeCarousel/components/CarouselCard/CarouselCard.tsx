import React from 'react';
import classNames from 'classnames';
import styles from './carousel-card.module.scss';

interface CarouselCardProps {
  imageSrc: string;
  headerText: string;
  bodyText: string;
  bg1?: boolean;
  bg2?: boolean;
  bg3?: boolean;
  bg4?: boolean;
  bg5?: boolean;
}

const CarouselCard = ({
  imageSrc,
  headerText,
  bodyText,
  bg1,
  bg2,
  bg3,
  bg4,
  bg5,
}: CarouselCardProps) => {
  
  const cardBgStyle = {
    [styles.cardBg1]: bg1,
    [styles.cardBg2]: bg2,
    [styles.cardBg3]: bg3,
    [styles.cardBg4]: bg4,
    [styles.cardBg5]: bg5,
  };
  const bgStyle = {
    [styles.bg1]: bg1,
    [styles.bg2]: bg2,
    [styles.bg3]: bg3,
    [styles.bg4]: bg4,
    [styles.bg5]: bg5,
  };
  
  return (<div className={classNames(styles.cardContainer, cardBgStyle)}>
  <div className={classNames(styles.detailsContainer, bgStyle)}>
    <div className={styles.details}>
      <h1>{headerText}</h1>
      <p>
        {bodyText}
      </p>
    </div>
  </div>
    <div className={styles.imageContainer}>
      <img src={imageSrc} alt={headerText} />
    </div>
  </div>)
};

export default CarouselCard;