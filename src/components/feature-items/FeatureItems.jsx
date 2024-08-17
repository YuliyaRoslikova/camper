import css from './FeatureItems.module.css';

const FeatureItems = ({ advert }) => {
  const { details } = advert;

  return (
    <ul className={css.featureList}>
      {Object.entries(details).map(([key, value]) => {
        return (
          <li className={css.feature} key={key}>
            {key}
          </li>
        );
      })}
    </ul>
  );
};

export default FeatureItems;

// CD
// TV
// airConditioner
// bathroom
// beds
// freezer
// gas
// hob
// kitchen
// microwave
// radio
// shower
// toilet
// water
