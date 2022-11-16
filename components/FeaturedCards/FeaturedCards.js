import styles from './styles.module.css';
import Card from '../Card/Card';

const FeaturedCards = (props) => {
  return (
    <div className={styles.FeaturedCards__wrapper}>
      <h1 className={styles.FeaturedCards__title}>{props.title}</h1>
      <div className={styles.FeaturedCards__cardsWrapper}>
        <Card
          title="lorem ipsum"
          url="https://images.squarespace-cdn.com/content/v1/626e9ac320dff048ff03fb87/1664119684973-0AH54EKWVLR8N9NB61GM/The+Lich+King+Returns+September+26th.png?format=500w"
          alt="lorem ipsum"
          date="lorem ipsum"
          tags="lorem ipsum"
        />
        <Card
          title="lorem ipsum"
          url="https://images.squarespace-cdn.com/content/v1/626e9ac320dff048ff03fb87/1664119684973-0AH54EKWVLR8N9NB61GM/The+Lich+King+Returns+September+26th.png?format=500w"
          alt="lorem ipsum"
          date="lorem ipsum"
          tags="lorem ipsum"
        />
        <Card
          title="lorem ipsum"
          url="https://images.squarespace-cdn.com/content/v1/626e9ac320dff048ff03fb87/1664119684973-0AH54EKWVLR8N9NB61GM/The+Lich+King+Returns+September+26th.png?format=500w"
          alt="lorem ipsum"
          date="lorem ipsum"
          tags="lorem ipsum"
        />
      </div>
    </div>
  );
};

export default FeaturedCards;
