import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import css from './BookForm.module.css';

const BookForm = ({ advert }) => {
  const { _id } = advert;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      date: '',
      comment: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(20, 'Name must be 50 characters or less'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      date: Yup.date().required('Booking date is required'),
      comment: Yup.string(),
    }),
    onSubmit: values => {
      console.log('Form data:', _id, values);
    },
  });

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.description}>Stay connected! We are always ready to help you.</p>

      <form className={css.form} onSubmit={formik.handleSubmit}>
        <div>
          <input
            className={css.input}
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className={css.error}>{formik.errors.name}</p>
          ) : null}
        </div>

        <div>
          <input
            className={css.input}
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={css.error}>{formik.errors.email}</p>
          ) : null}
        </div>

        <div>
          <input
            className={css.input}
            type="date"
            id="date"
            name="date"
            placeholder="Booking date"
            value={formik.values.date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date && formik.errors.date ? (
            <p className={css.error}>{formik.errors.date}</p>
          ) : null}
        </div>

        <textarea
          className={css.textarea}
          id="comment"
          name="comment"
          placeholder="Comment"
          value={formik.values.comment}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        ></textarea>

        <button className={css.btn} type="submit" disabled={!formik.dirty || !formik.isValid}>
          Send
        </button>
      </form>
    </div>
  );
};

export default BookForm;
