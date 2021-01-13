import React, { useContext } from 'react';
import styles from './styles.scoped.css';
import { SearchRounded } from '@material-ui/icons';
import Items from '../../components/elements/Items';
import { AppContext } from '../../context';

const Dashboard = () => {
  const context = useContext(AppContext);
  const open = context.openCart;
  return (
    <div className={open ? styles['open'] : styles['dashboard']}>
      <div className={open ? styles['head-open'] : styles['dashboard-header']}>
        <div className={styles['dashboard-title']}>
          <h1>
            <span>Shoppingify</span> allows you take your shopping list wherever you go
          </h1>
        </div>
        <div className={styles['dashboard-search']}>
          <SearchRounded className={styles['search-icon']} />
          <input type="text" placeholder="Search your items" />
        </div>
      </div>
      <div className={styles['dashboard-content']}>
        <Items />
        <Items />
        <Items />
        <Items />
        <Items />
      </div>
    </div>
  );
};

export default Dashboard;
