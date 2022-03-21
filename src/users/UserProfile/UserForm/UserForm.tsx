import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import classes from './UserForm.module.scss';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import usersStore from '../../stores/usersStore';
import Loading from '../../../components/ui/Loading';

const UserForm: React.FC = observer(() => {
  const { getCurrentUser, currentUser, currentUserIsLoading, currentUserError } = usersStore;
  const params = useParams();
  const [isEditable, setIsEditable] = useState(true);

  useEffect(() => {
    getCurrentUser(Number(params.id))
  }, [getCurrentUser, params.id])

  const isEditableHandler = () => {
    setIsEditable(!isEditable);
  }

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

  const form = (<form onSubmit={formik.handleSubmit} className={`${classes.form} ${isEditable && classes.readonly}`}>
    <label htmlFor="name">Name</label>
    <input className={formik.errors.name && classes.error} id='name' type="text" defaultValue={formik.values.name} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="username">Username</label>
    <input className={formik.errors.username && classes.error} id='username' name='username' type="text" defaultValue={formik.values.username} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="email">Email</label>
    <input className={formik.errors.email && classes.error} id='email' name='email' type="text" defaultValue={formik.values.email} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="street">Street</label>
    <input className={formik.errors.street && classes.error} id='street' name='street' type="text" defaultValue={formik.values.street} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="city">City</label>
    <input className={formik.errors.city && classes.error} id='city' name='city' type="text" defaultValue={formik.values.city} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="zipCode">Zipcode</label>
    <input className={formik.errors.zipCode && classes.error} id='zipCode' name='zipCode' type="text" defaultValue={formik.values.zipCode} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="phone">Phone</label>
    <input className={formik.errors.phone && classes.error} id='phone' name='phone' type="text" defaultValue={formik.values.phone} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="website">Website</label>
    <input className={formik.errors.website && classes.error} id='website' name='website' type="text" defaultValue={formik.values.website} onChange={formik.handleChange} readOnly={isEditable} />
    <label htmlFor="comment">Comment</label>
    <textarea id='comment' name='comment' defaultValue={formik.values.comment} onChange={formik.handleChange} />
    <button className={formik.isValid ? classes.formIsValid : ''} type="submit">Отправить</button>
  </form>)

  return (
    <div className={classes.component}>
      <div className={classes.title}>
        <h2>Профиль пользователя</h2>
        <button onClick={isEditableHandler}>Редактировать</button>
      </div>
      {currentUserIsLoading && <Loading />}
      {!currentUserIsLoading && !currentUserError && form}
    </div>
  );
});

export default UserForm;
