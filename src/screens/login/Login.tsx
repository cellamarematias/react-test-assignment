import React, { useContext, useState } from 'react';
import styles from './login.module.css';
import Logo from "../../../public/logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import login from '../../api/index';
import loader from "../../../public/loader.svg";
import UserContext from '../../context/user';
import { UserContextType } from '../../context/types';
import joinClassNames from '../../utils/joinClassNames';
// shared components
import Button from '../../components/shared/button/Button';
import Modal from '../../components/shared/Modal/Modal';

interface IFormInput {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().email('Invalid email format.').required('Email is required'),
  password: yup.string().min(6, 'Password is too short.').required('Password is required'),
}).required();

export default function Login() {
  const { userContext, setUserContext } = useContext(UserContext) as UserContextType;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IFormInput) => {
    setIsLoading(true)
    login(data).then((res: any) => {
      setIsLoading(false)
      const newUser = {
        name: res.data.name,
        avatar: res.data.avatar,
        loggedIn: res.data.loggedIn,
      }
      setUserContext([newUser])
    }).catch((err) => {
      setIsLoading(false)
      setIsOpen(true)
    })
  };

  return (
    <div className={joinClassNames([styles.loginBodyOne, styles.loginBodyTwo, styles.loginBodyThree])}>
      <img src={Logo} alt="company logo" className={styles.logo} />
      <>
        <div className={styles.formContainer}>
          <div className={joinClassNames([styles.formBodyOne, styles.formBodyTwo, styles.formBodyThree])}>
            <h2>Welcome, stranger!</h2>
            <p className={styles.legend}>Please log in to this form if you wish to pass the exam.</p>
            <form action="" className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
              <input {...register("email")} placeholder='Email' className={errors.email ? styles.inputError : styles.input} />
              <p className={styles.error}>{errors.email?.message}</p>
              <input {...register("password")} type='password' placeholder='Password' className={errors.password ? styles.inputError : styles.input} />
              <p className={styles.error}>{errors.password?.message}</p>
              <Button> {isLoading ? <img src={loader} /> : 'Login'}</Button>
            </form>
          </div>
        </div>

        <Modal isOpen={isOpen} setIsOpen={setIsOpen} text={'Wrong email or password.'}>
        </Modal>
      </>
    </div>
  )
}
