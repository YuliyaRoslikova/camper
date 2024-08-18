import css from './BookForm.module.css';

const BookForm = ({ advert }) => {
  const { bookForm } = advert;

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.description}>Stay connected! We are always ready to help you.</p>

      <form className={css.form}>
        <input
          className={css.input}
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
        />

        <input
          className={css.input}
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
        />

        <input
          className={css.input}
          type="date"
          id="date"
          name="date"
          placeholder="Booking date"
          required
        />

        <textarea
          className={css.textarea}
          id="comment"
          name="comment"
          placeholder="Comment"
        ></textarea>

        <button className={css.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookForm;
