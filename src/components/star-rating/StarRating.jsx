import { IoMdStar } from 'react-icons/io';

const StarRating = ({ rating }) => {
  return (
    <div>
      {[...Array(5)].map((_, i) => {
        return (
          <IoMdStar
            key={i}
            className="star"
            size={16}
            color={rating <= i ? '#f2f4f7' : '#ffc531'}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
