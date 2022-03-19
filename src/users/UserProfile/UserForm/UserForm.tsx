import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import classes from './UserForm.module.scss';

type UserFormProps = {};

const UserForm: React.FC<UserFormProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      street: '',
      city: '',
      zipCode: '',
      phone: '',
      website: '',
      comment: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      username: Yup.string().required(),
      email: Yup.string().required(),
      street: Yup.string().required(),
      city: Yup.string().required(),
      zipCode: Yup.string().required(),
      phone: Yup.string().required(),
      website: Yup.string().required(),
      comment: Yup.string(),
    }),
    onSubmit: (values) => { console.log(JSON.stringify(values)); },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.component}>
      <label htmlFor="name">Name
        <input id='name' type="text" value={formik.values.name} onChange={formik.handleChange} />
      </label>
      <label htmlFor="username">Username
        <input id='username' name='username' type="text" value={formik.values.username} onChange={formik.handleChange} />
      </label>
      <label htmlFor="email">Email
        <input id='email' name='email' type="text" value={formik.values.email} onChange={formik.handleChange} />
      </label>
      <label htmlFor="street">Street
        <input id='street' name='street' type="text" value={formik.values.street} onChange={formik.handleChange} />
      </label>
      <label htmlFor="city">City
        <input id='city' name='city' type="text" value={formik.values.city} onChange={formik.handleChange} />
      </label>
      <label htmlFor="zipCode">Zipcode
        <input id='zipCode' name='zipCode' type="text" value={formik.values.zipCode} onChange={formik.handleChange} />
      </label>
      <label htmlFor="phone">Phone
        <input id='phone' name='phone' type="text" value={formik.values.phone} onChange={formik.handleChange} />
      </label>
      <label htmlFor="website">Website
        <input id='website' name='website' type="text" value={formik.values.website} onChange={formik.handleChange} />
      </label>
      <label htmlFor="comment">Comment
        <input id='comment' name='comment' type="text" value={formik.values.comment} onChange={formik.handleChange} />
      </label>

      <button
        type="submit"
      >
        Отправить
      </button>

    </form>
  );
};

export default UserForm;
