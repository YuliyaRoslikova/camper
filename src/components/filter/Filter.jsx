import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';
import { SlLocationPin } from 'react-icons/sl';
import { MdAir } from 'react-icons/md';
import { TbAutomaticGearbox, TbCamper, TbToolsKitchen2 } from 'react-icons/tb';
import { LuShowerHead, LuTv } from 'react-icons/lu';
import { changeFilter } from '../../redux/filters/slice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState('');
  const [airConditionCheckBox, setAirConditionCheckBox] = useState(false);
  const [gearboxAutomaticCheckBox, setGearboxAutomaticCheckBox] = useState(false);
  const [kitchenCheckBox, setKitchenCheckBox] = useState(false);
  const [tVCheckBox, setTVCheckBox] = useState(false);
  const [showerCheckBox, setShowerCheckBox] = useState(false);
  const [vehicleType, setVehicleType] = useState(null);

  useEffect(() => {
    dispatch(
      changeFilter({
        location,
        airConditioner: airConditionCheckBox,
        gearboxAutomatic: gearboxAutomaticCheckBox,
        kitchen: kitchenCheckBox,
        tv: tVCheckBox,
        shower: showerCheckBox,
        vehicleType,
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
    vehicleType,
  ]);

  const onChangeVehicleType = type => {
    if (type === vehicleType) {
      setVehicleType(null);
    } else {
      setVehicleType(type);
    }
  };

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
        <li className={clsx(css.item, { [css.selected]: airConditionCheckBox })}>
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
        <li className={clsx(css.item, { [css.selected]: gearboxAutomaticCheckBox })}>
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
        <li className={clsx(css.item, { [css.selected]: kitchenCheckBox })}>
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
        <li className={clsx(css.item, { [css.selected]: tVCheckBox })}>
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
        <li className={clsx(css.item, { [css.selected]: showerCheckBox })}>
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
        <li className={clsx(css.item, { [css.selected]: vehicleType === 'panelTruck' })}>
          <label className={css.itemLabel}>
            <input
              className={css.checkBox}
              type="radio"
              value={'panelTruck'}
              checked={vehicleType === 'panelTruck'}
              onClick={() => onChangeVehicleType('panelTruck')}
              onChange={() => {}}
            />
            <span className={css.icon}>
              <TbCamper size={30} />
            </span>
            <span className={css.itemDescription}>Van</span>
          </label>
        </li>

        <li className={clsx(css.item, { [css.selected]: vehicleType === 'fullyIntegrated' })}>
          <label className={css.itemLabel}>
            <input
              className={css.checkBox}
              type="radio"
              value={'fullyIntegrated'}
              checked={vehicleType === 'fullyIntegrated'}
              onClick={() => onChangeVehicleType('fullyIntegrated')}
              onChange={() => {}}
            />
            <span className={css.icon}>
              <TbCamper size={30} />
            </span>
            <span className={css.itemDescription}>Fully Integrated</span>
          </label>
        </li>

        <li className={clsx(css.item, { [css.selected]: vehicleType === 'alcove' })}>
          <label className={css.itemLabel}>
            <input
              className={css.checkBox}
              type="radio"
              value={'alcove'}
              checked={vehicleType === 'alcove'}
              onClick={() => onChangeVehicleType('alcove')}
              onChange={() => {}}
            />
            <span className={css.icon}>
              <TbCamper size={30} />
            </span>
            <span className={css.itemDescription}>Alcove</span>
          </label>
        </li>
      </ul>

      <button className={css.btn} type="submit">
        Search
      </button>
    </div>
  );
};

export default Filter;
