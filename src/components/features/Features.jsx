import FeatureItems from '../feature-items/FeatureItems';
import css from './Features.module.css';

const Features = ({ advert }) => {
  const { form, length, width, height, tank, consumption } = advert;

  return (
    <div className={css.container}>
      <FeatureItems advert={advert} full={true} />
      <h3 className={css.title}>Vehicle details</h3>
      <div className={css.detailsItemBox}>
        <div className={css.itemName}>Form</div>
        <div className={css.itemValue}>{form}</div>
      </div>
      <div className={css.detailsItemBox}>
        <div className={css.itemName}>Length</div>
        <div className={css.itemValue}>{length}</div>
      </div>
      <div className={css.detailsItemBox}>
        <div className={css.itemName}>Width</div>
        <div className={css.itemValue}>{width}</div>
      </div>
      <div className={css.detailsItemBox}>
        <div className={css.itemName}>Height</div>
        <div className={css.itemValue}>{height}</div>
      </div>
      <div className={css.detailsItemBox}>
        <div className={css.itemName}>Tank</div>
        <div className={css.itemValue}>{tank}</div>
      </div>
      <div className={css.detailsItemBox}>
        <div className={css.itemName}>Consumption</div>
        <div className={css.itemValue}>{consumption}</div>
      </div>
    </div>
  );
};

export default Features;
