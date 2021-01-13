import React, { useState, useEffect } from 'react';
import sause from '../../../assets/source.svg';
import styles from './styles.scoped.css';

const items = [
  {
    category: 'Fruit',
    items: [
      {
        name: 'Apple',
        stock: 4,
      },
      {
        name: 'Apple',
        stock: 4,
      },
    ],
  },
  {
    category: 'Fruit',
    items: [
      {
        name: 'Apple',
        stock: 4,
      },
      {
        name: 'Apple',
        stock: 4,
      },
    ],
  },
  {
    category: 'Fruit',
    items: [
      {
        name: 'Apple',
        stock: 4,
      },
      {
        name: 'Apple',
        stock: 4,
      },
    ],
  },
  {
    category: 'Fruit',
    items: [
      {
        name: 'Apple',
        stock: 4,
      },
      {
        name: 'Apple',
        stock: 4,
      },
    ],
  },
  {
    category: 'Fruit',
    items: [
      {
        name: 'Apple',
        stock: 4,
      },
      {
        name: 'Apple',
        stock: 4,
      },
    ],
  },
  {
    category: 'Fruit',
    items: [
      {
        name: 'Apple',
        stock: 4,
      },
      {
        name: 'Apple',
        stock: 4,
      },
    ],
  },
  {
    category: 'Fruit',
    items: [
      {
        name: 'Apple',
        stock: 4,
      },
      {
        name: 'Apple',
        stock: 4,
      },
    ],
  },
  {
    category: 'Fruit',
    items: [
      {
        name: 'Apple',
        stock: 4,
      },
      {
        name: 'Apple',
        stock: 4,
      },
    ],
  },
];

const CartItems = ({ category, items }) => {
  return (
    <div className={styles['items']}>
      <div className={styles['cat-name']}>
        <h1>{category}</h1>
      </div>
      <div className={styles['list']}>
        {items.map((item, idx) => (
          <div key={'list-item ' + idx} className={styles['list-items']}>
            <p>{item.name}</p>
            <div className={styles['stock']}>
              {item.stock} <span>pcs</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CartList = () => {
  return (
    <div className={styles['cart']}>
      <div className={styles['image-container']}>
        <img src={sause} alt="sause" className={styles['image']} />
        <div className={styles['content']}>
          <p>Did't find what you need ?</p>
          <button className={styles['add-button']}>Add Item</button>
        </div>
      </div>
      <div className={styles['cart-list']}>
        <div className={styles['cart-name']}>
          <h1>Shoping List</h1>
        </div>
        <div className={styles['cart-items']}>
          {items.map((item, idx) => (
            <CartItems key={'cart' + idx} category={item.category} items={item.items} />
          ))}
        </div>
      </div>
      <div className={styles['cart-footer']}>test</div>
    </div>
  );
};

export default CartList;
