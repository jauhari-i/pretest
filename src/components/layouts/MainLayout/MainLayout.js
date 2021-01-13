import React, { useState, useContext } from 'react';
import Sidebar from '../../elements/Sidebar';
import styles from './styles.scoped.css';
import CartList from '../../fragments/CartList';
import { AppContext } from '../../../context';

const MainLayout = ({ children }) => {
  const context = useContext(AppContext);
  return (
    <div className={styles['main']}>
      <Sidebar cart={context.openCart} openCart={context.setOpenCart} />
      <div className={styles['content']}>{children}</div>
      {context.openCart ? <CartList /> : ''}
    </div>
  );
};

export default MainLayout;
