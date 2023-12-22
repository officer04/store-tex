import styles from './Stock.module.scss';

import img1 from './../../images/7123002x.jpg';

const Stock = ({title, description1, description2, img}) => {
  return (
    <section className={styles.stock}>
      <div className={styles.group}>
        <div>
          <img src={img} alt="" />
        </div>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>
            {description1}
          </p>
          <p>
            {description2}
          </p>
          <button>Узнать больше</button>
        </div>
      </div>
    </section>
  );
};

export default Stock;
