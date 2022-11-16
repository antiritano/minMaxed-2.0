import styles from './styles.module.css';

const Card = (props) => {
  return (
    <div className={styles.Card__wrapper}>
      <img className={styles.Card__image} src={props.url} alt={props.alt} />
      <div className={styles.Card__content}>
        <h3 className={styles.Card__title}>{props.title}</h3>
        <div className={styles.Card__byline}>
          <p className={styles.Card__date}>{props.date}</p>
          <p className={styles.Card__tags}>{props.tags}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
