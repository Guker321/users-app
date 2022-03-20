import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import classes from './UserForm.module.scss';
import { observer } from 'mobx-react-lite';
import usersStore from '../../stores/usersStore';
import { useParams } from 'react-router-dom';
import Loading from '../../../components/ui/Loading';

type UserFormProps = {};

const UserForm: React.FC<UserFormProps> = observer(() => {
  const { getCurrentUser, currentUser, currentUserIsLoading, currentUserError } = usersStore;
  const params = useParams();
  const [isEditable, setIsEditable] = useState(true);

  useEffect(() => {
    getCurrentUser(Number(params.id))
  }, [getCurrentUser, params.id])

  const formik = useFormik({
    initialValues: {
      name: currentUser?.name,
      username: currentUser?.username,
      email: currentUser?.email,
      street: currentUser?.address.street,
      city: currentUser?.address.city,
      zipCode: currentUser?.address.zipcode,
      phone: currentUser?.phone,
      website: currentUser?.website,
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
    enableReinitialize: true,
  });

  const form = <form onSubmit={formik.handleSubmit} className={classes.component}>
    <label htmlFor="name">Name</label>
    <input id='name' type="text" defaultValue={formik.values.name} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="username">Username</label>
    <input id='username' name='username' type="text" defaultValue={formik.values.username} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="email">Email</label>
    <input id='email' name='email' type="text" defaultValue={formik.values.email} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="street">Street</label>
    <input id='street' name='street' type="text" defaultValue={formik.values.street} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="city">City</label>
    <input id='city' name='city' type="text" defaultValue={formik.values.city} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="zipCode">Zipcode</label>
    <input id='zipCode' name='zipCode' type="text" defaultValue={formik.values.zipCode} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="phone">Phone</label>
    <input id='phone' name='phone' type="text" defaultValue={formik.values.phone} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="website">Website</label>
    <input id='website' name='website' type="text" defaultValue={formik.values.website} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="comment">Comment</label>
    <textarea id='comment' name='comment' defaultValue={formik.values.comment} onChange={formik.handleChange} readOnly={isEditable} />

    <button
      type="submit"
    >
      Отправить
    </button>

  </form>

  return (
    <>
      {currentUserIsLoading && <Loading />}
      {!currentUserIsLoading && !currentUserError && form}
    </>
  );
});

export default UserForm;
