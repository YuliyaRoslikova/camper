// import { useDispatch } from 'react-redux';
// import { deleteContact } from '../../redux/contacts/operations';
import css from './Advert.module.css';

const Advert = ({ advert }) => {
  const { name, location, description, details, gallery, price } = advert;
  // const dispatch = useDispatch();
  console.log(advert);
  const onShowMore = () => {};
  return (
    <div className={css.container}>
      <div className={css.imgBox}>
        <img className={css.img} src={gallery[0]} alt={name} />
      </div>
      <div className={css.contentBox}>
        <div className={css.titleBox}>
          <h2 className={css.title}>{name}</h2>
          <div className={css.price}>€{price}</div>
          <div className={css.iconBox}>heart</div>
        </div>
        <div className={css.reviewsBox}>
          <div className={css.reviews}>review</div>
          <div className={css.location}>{location}</div>
        </div>
        <p className={css.description}>{description}</p>
        <ul className={css.featureList}>
          {Object.entries(details).map(([key, value]) => {
            return (
              <li className={css.feature} key={key}>
                {key}
              </li>
            );
          })}
        </ul>
        <button className={css.btn} onClick={() => onShowMore()}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default Advert;

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
