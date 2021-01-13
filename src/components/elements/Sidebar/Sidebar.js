import React from 'react';
import logo from '../../../assets/logo.svg';
import cart from '../../../assets/cart.png';
import { Replay, ListRounded, BarChart, AddShoppingCart } from '@material-ui/icons';
import { Tooltip, Badge } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import styles from './styles.scoped.css';

const NavList = ({ title, icon, url }) => {
  const location = useLocation();
  return (
    <div
      className={location.pathname === url ? styles[('nav-list', 'active')] : styles['nav-list']}
    >
      <Tooltip title={title} placement="right">
        <Link to={url}>{icon}</Link>
      </Tooltip>
    </div>
  );
};

const Sidebar = ({ cart, openCart }) => {
  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar-icon']}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles['sidebar-nav']}>
        <NavList
          title={'items'}
          icon={<ListRounded style={{ fontSize: 30, color: '#454545' }} />}
          url="/"
        />
        <NavList
          title={'history'}
          icon={<Replay style={{ fontSize: 30, color: '#454545' }} />}
          url="/history"
        />
        <NavList
          title={'statistics'}
          icon={<BarChart style={{ fontSize: 30, color: '#454545' }} />}
          url="/stats"
        />
      </div>
      <div className={styles['sidebar-bot']}>
        <Badge className={styles['cart-badge']} color="secondary" badgeContent={11} max={10}>
          <AddShoppingCart
            className={styles['cart-button']}
            onClick={() => {
              openCart(!cart);
            }}
          />
        </Badge>
      </div>
    </div>
  );
};

export default Sidebar;
