import React from 'react';
import data from './../../utils/dataStock.json';
import Stock from './Stock';
import styles from './Stocks.module.scss';

import money from './../../images/money-bag 3.svg'
import bookshelf from './../../images/bookshelf-library.svg'
import working from './../../images/team-laptop-remote-working.svg'

const Stocks = () => {
  return (
    <section className={styles.stocks}>
      <h1 className={styles.title}>Почему нас выбирают</h1>
      <p className={styles.text}>
        Copy Start - это компания, специализирующаяся на продаже высококачественных принтеров. Мы
        предлагаем широкий ассортимент принтеров различных типов и моделей, чтобы удовлетворить
        потребности как домашнего пользования, так и бизнеса. Наше предприятие сотрудничает с
        ведущими производителями, поэтому мы можем предложить клиентам только самые надежные и
        инновационные продукты.{' '}
      </p>
      <div className={styles.group}>
        <div className={styles.card}>
          <img src={money} alt="" />
          <h3>Качество и надежность</h3>
        </div>
        <div className={styles.card}>
          <img src={bookshelf} alt="" />
          <h3>Индивидуальный подход</h3>
        </div>
        <div className={styles.card}>
          <img src={working} alt="" />
          <h3>Послепродажное обслуживание</h3>
        </div>
      </div>
      <h1 className={styles.title}>Новинки</h1>
      {data.map((obj) => (
        <Stock {...obj} />
      ))}
    </section>
  );
};

export default Stocks;
