import React, { useState } from 'react';
import css from './Filter.module.css';
import { SlLocationPin } from 'react-icons/sl';
import { MdAir } from 'react-icons/md';
import { TbAutomaticGearbox, TbCamper, TbToolsKitchen2 } from 'react-icons/tb';
import { LuShowerHead, LuTv } from 'react-icons/lu';

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
          <span className={css.icon}>
            <MdAir size={30} />
          </span>
          <span className={css.itemDescription}>AC</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>
            <TbAutomaticGearbox size={30} />
          </span>
          <span className={css.itemDescription}>Automatic</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>
            <TbToolsKitchen2 size={30} />
          </span>
          <span className={css.itemDescription}>Kitchen</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>
            <LuTv size={30} />
          </span>
          <span className={css.itemDescription}>TV</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>
            <LuShowerHead size={30} />
          </span>
          <span className={css.itemDescription}>Shower/WC</span>
        </li>
      </ul>

      <h4 className={css.sectionTitle}>Vehicle type</h4>
      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.icon}>
            <TbCamper size={30} />
          </span>
          <span className={css.itemDescription}>Van</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>
            <TbCamper size={30} />
          </span>
          <span className={css.itemDescription}>Fully Integrated</span>
        </li>
        <li className={css.item}>
          <span className={css.icon}>
            <TbCamper size={30} />
          </span>
          <span className={css.itemDescription}>Alcove</span>
        </li>
      </ul>

      <button className={css.btn} type="submit">
        Search
      </button>
    </div>
  );
};

export default Filter;
