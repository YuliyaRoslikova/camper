import { useDispatch } from 'react-redux';
import css from './AdvertModal.module.css';
// import toast from 'react-hot-toast';

const AdvertModal = ({ handleCloseModal, advert }) => {
  const dispatch = useDispatch();

  // const onLogOut = async () => {
  //   try {
  //     await dispatch(logout());

  //     toast.success('Successfully logged out!');

  //     handleCloseModal();
  //   } catch (error) {
  //     toast.error('Something went wrong. Please try again.');
  //   }
  // };

  return (
    <>
      <div>AdvertModal</div>
    </>
  );
};

export default AdvertModal;
