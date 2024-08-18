import React from 'react';
import css from './Filter.module.css';

const Filter = () => {
  return (
    <div className={css.container}>
      <h3 className={css.title}>Location</h3>
      <input
        className={css.input}
        type="text"
        id="location"
        name="location"
        placeholder="Enter location"
      />

      <h3 className={css.subtitle}>Filters</h3>

      <h2 className={css.sectionTitle}>Vehicle equipment</h2>
      <ul className={css.equipmentList}>
        <li className={css.equipmentItem}>
          <span className={css.icon}>AC Icon</span>
          <span>AC</span>
        </li>
        <li className={css.equipmentItem}>
          <span className={css.icon}>Automatic Icon</span>
          <span>Automatic</span>
        </li>
        <li className={css.equipmentItem}>
          <span className={css.icon}>Kitchen Icon</span>
          <span>Kitchen</span>
        </li>
        <li className={css.equipmentItem}>
          <span className={css.icon}>TV Icon</span>
          <span>TV</span>
        </li>
        <li className={css.equipmentItem}>
          <span className={css.icon}>Shower/WC Icon</span>
          <span>Shower/WC</span>
        </li>
      </ul>

      <h2 className={css.sectionTitle}>Vehicle type</h2>
      <ul className={css.vehicleTypeList}>
        <li className={css.vehicleTypeItem}>
          <span className={css.icon}>Van Icon</span>
          <span>Van</span>
        </li>
        <li className={css.vehicleTypeItem}>
          <span className={css.icon}>Fully Integrated Icon</span>
          <span>Fully Integrated</span>
        </li>
        <li className={css.vehicleTypeItem}>
          <span className={css.icon}>Alcove Icon</span>
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
