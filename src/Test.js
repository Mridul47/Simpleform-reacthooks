import React from 'react';
import { useForm } from 'react-hook-form';

function Test() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register('firstName',{required: true})} placeholder='First Name' />
      {errors.firstName && <p>First Name is required.</p>}
      <br/>
      <input {...register('lastName', { required: true })} placeholder='Last Name'/>
      {errors.lastName && <p>Last name is required.</p>}
      <br/>
      <input {...register('age', { pattern: /\d+/ })} placeholder='Age' />
      {errors.age && <p>Please enter number for age.</p>}
      <br/>
      <input type="submit" />
    </form>
  );
}


export default Test