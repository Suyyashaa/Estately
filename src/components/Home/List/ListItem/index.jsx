import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, price, category},
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
    </header>
    <footer>
      
      <p>
        <b>${price}</b>
      </p>
      <p>
        <b>{category}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;
