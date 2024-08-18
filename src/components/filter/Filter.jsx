import React, { useState } from 'react';
import css from './Filter.module.css';
import { SlLocationPin } from 'react-icons/sl';

const Filter = () => {
  const [location, setLocation] = useState('Kyiv, Ukraine');
  return (
    <div className={css.container}>
      <h3 className={css.title}>Location</h3>
      <div className={css.locationBox}>
        <div className={css.locationIconBox}>
          <SlLocationPin />
        </div>
        <input
          className={css.input}
          type="text"
          id="location"
          name="location"
          placeholder="Enter location"
        />
      </div>

      <h3 className={css.subtitle}>Filters</h3>

      <h4 className={css.sectionTitle}>Vehicle equipment</h4>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.icon}>Icon</span>
          <span>AC</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>Icon</span>
          <span>Automatic</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>Icon</span>
          <span>Kitchen</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>Icon</span>
          <span>TV</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>Icon</span>
          <span>Shower/WC</span>
        </li>
      </ul>

      <h4 className={css.sectionTitle}>Vehicle type</h4>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.icon}>Icon</span>
          <span>Van</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>Icon</span>
          <span>Fully Integrated</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>Icon</span>
          <span>Alcove</span>
        </li>
      </ul>

      <button className={css.btn} type="submit">
        Search
      </button>
    </div>
  );
};

export default Filter;
