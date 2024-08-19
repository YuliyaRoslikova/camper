import { IoBedOutline, IoPeopleOutline } from 'react-icons/io5';
import css from './FeatureItems.module.css';
import { MdAir, MdOutlineLocalGasStation } from 'react-icons/md';
import { TbAutomaticGearbox, TbToolsKitchen2 } from 'react-icons/tb';

const FeatureItems = ({ advert, full = false }) => {
  const { details, adults, transmission, engine } = advert;
  const getItem = key => {
    switch (key) {
      case 'kitchen':
        return details[key] ? (
          <li className={css.feature}>
            <TbToolsKitchen2 /> Kitchen
          </li>
        ) : null;
      case 'beds':
        return details[key] ? (
          <li className={css.feature}>
            <IoBedOutline /> {details[key]} {details[key] === 1 ? 'bed' : 'beds'}
          </li>
        ) : null;
      case 'airConditioner':
        return details[key] ? (
          <li className={css.feature}>
            <MdAir /> AC
          </li>
        ) : null;
      default:
        return key;
    }
  };

  return (
    <ul className={css.featureList}>
      <li className={css.feature}>
        <IoPeopleOutline /> {adults} adults
      </li>
      <li className={css.feature}>
        <TbAutomaticGearbox /> <span className={css.capitalize}>{transmission}</span>
      </li>
      <li className={css.feature}>
        <MdOutlineLocalGasStation /> <span className={css.capitalize}>{engine}</span>
      </li>
      {getItem('kitchen')}
      {getItem('beds')}
      {getItem('airConditioner')}
    </ul>
  );
};

export default FeatureItems;
