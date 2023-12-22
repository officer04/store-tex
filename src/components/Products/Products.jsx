import data from './../../utils/dataProduct.json';
import Product from './../Products/Product';

import styles from './../../style/Products.module.scss';
import { useState } from 'react';

const Products = () => {
  const [active, setActive] = useState(false);
  const [theaters, setTheaters] = useState('Выберите театр');

  const addActive = () => {
    setActive(!active);
  };

  const addTheater = (title) => {
    setTheaters(title);
    setActive(!active);
  };

  const addUp = () => {
    window.scroll(0, 0);
  };
  return (
    <div>
      <div className={styles.wrapper}>
        <p className={styles.text}>Каталог товара</p>
        <h1 className={styles.title}>Лучшего магазина</h1>
        <p className={styles.subtitle}>ул. 15-го Мая, д. 10, ТРЦ «Алпи», 8 этаж</p>
      </div>
      <div className={styles.products}>
        {data.map((obj) => (
          <Product addUp={addUp} key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
};

export default Products;
