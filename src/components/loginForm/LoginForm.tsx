import React, { useContext, useEffect, useState } from 'react';
import styles from './loginForm.module.css';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import login from '../../api/index';
import  loader  from "../../../public/loader.svg";
import { LoginContext } from '../../App';
// shared components
import Button from '../shared/button/Button'

interface IFormInput {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email('Invalid email format.').required('Email is required'),
  password: yup.string().min(6, 'Password is too short.').required('Password is required'),
}).required();

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { loggedIn, setLoggedIn } = useContext(LoginContext)

  const onSubmit = (data: IFormInput) => {
    setIsLoading(true)
    login(data).then((res) => {
      setIsLoading(false)
      console.log(res);
      setLoggedIn(true)
    }).catch((err) => {
      console.log(err);
      setIsLoading(false)
    })
  };

  useEffect(() => {
    console.log(isLoading)
    console.log('user is', loggedIn)  
  }, [isLoading, loggedIn])


  return (
    <div className={styles.formContainer}>
      <div className={styles.formBody}>
        <h2>Welcome, stranger!</h2>
        <p className={styles.legend}>Please log in to this form if you wish to pass the exam.</p>
        <form action="" className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder='Email' className={errors.email ? styles.inputError : styles.input}/>
          <p className={styles.error}>{errors.email?.message}</p>
          <input {...register("password")} type='password' placeholder='Password' className={errors.password ? styles.inputError : styles.input}/>
          <p className={styles.error}>{errors.password?.message}</p>
            <Button> { isLoading ? <img src={loader}/> : 'Login'}</Button>
        </form>
      </div>
    </div>
  )
}
