import React, { useEffect, useState } from 'react';
import css from './Filter.module.css';
import { SlLocationPin } from 'react-icons/sl';
import { MdAir } from 'react-icons/md';
import { TbAutomaticGearbox, TbCamper, TbToolsKitchen2 } from 'react-icons/tb';
import { LuShowerHead, LuTv } from 'react-icons/lu';
import { changeFilter } from '../../redux/filters/slice';
import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [airConditionCheckBox, setAirConditionCheckBox] = useState(false);
  const [gearboxAutomaticCheckBox, setGearboxAutomaticCheckBox] = useState(false);
  const [kitchenCheckBox, setKitchenCheckBox] = useState(false);
  const [tVCheckBox, setTVCheckBox] = useState(false);
  const [showerCheckBox, setShowerCheckBox] = useState(false);

  useEffect(() => {
    dispatch(
      changeFilter({
        location,
        airConditioner: airConditionCheckBox,
        gearboxAutomatic: gearboxAutomaticCheckBox,
        kitchen: kitchenCheckBox,
        tV: tVCheckBox,
        shower: showerCheckBox,
      })
    );
  }, [
    dispatch,
    location,
    airConditionCheckBox,
    gearboxAutomaticCheckBox,
    kitchenCheckBox,
    tVCheckBox,
    showerCheckBox,
  ]);

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
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </div>

      <h3 className={css.subtitle}>Filters</h3>

      <h4 className={css.sectionTitle}>Vehicle equipment</h4>
      <ul className={css.list}>
        <li className={css.item}>
          <label className={css.itemLabel}>
            <input
              className={css.checkBox}
              type="checkBox"
              value={airConditionCheckBox}
              onChange={() => setAirConditionCheckBox(v => !v)}
            />
            <span className={css.icon}>
              <MdAir size={30} />
            </span>
            <span className={css.itemDescription}>AC</span>
          </label>
        </li>
        <li className={css.item}>
          <label className={css.itemLabel}>
            <input
              className={css.checkBox}
              type="checkBox"
              value={gearboxAutomaticCheckBox}
              onChange={() => setGearboxAutomaticCheckBox(v => !v)}
            />
            <span className={css.icon}>
              <TbAutomaticGearbox size={30} />
            </span>
            <span className={css.itemDescription}>Automatic</span>
          </label>
        </li>
        <li className={css.item}>
          <label className={css.itemLabel}>
            <input
              className={css.checkBox}
              type="checkBox"
              value={kitchenCheckBox}
              onChange={() => setKitchenCheckBox(v => !v)}
            />
            <span className={css.icon}>
              <TbToolsKitchen2 size={30} />
            </span>
            <span className={css.itemDescription}>Kitchen</span>
          </label>
        </li>
        <li className={css.item}>
          <label className={css.itemLabel}>
            <input
              className={css.checkBox}
              type="checkBox"
              value={tVCheckBox}
              onChange={() => setTVCheckBox(v => !v)}
            />
            <span className={css.icon}>
              <LuTv size={30} />
            </span>
            <span className={css.itemDescription}>TV</span>
          </label>
        </li>
        <li className={css.item}>
          <label className={css.itemLabel}>
            <input
              className={css.checkBox}
              type="checkBox"
              value={showerCheckBox}
              onChange={() => setShowerCheckBox(v => !v)}
            />
            <span className={css.icon}>
              <LuShowerHead size={30} />
            </span>
            <span className={css.itemDescription}>Shower/WC</span>
          </label>
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
