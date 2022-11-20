import React from 'react';
import styles from './login.module.css';
import LoginForm from '../../components/loginForm/LoginForm';
import  Logo  from "../../../public/logo.svg";

export default function Login() {
  return (
    <div className={styles.loginBody}>
        <img src={Logo} alt="company logo" className={styles.logo}/>
        <LoginForm></LoginForm>
    </div>
  )
}
