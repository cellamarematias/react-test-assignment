import React, { useContext, useEffect } from 'react';
import styles from './profile.module.css';
import Logo from "../../../public/logo.svg";
import Button from '../../components/shared/button/Button'
import { useForm } from "react-hook-form";
import UserContext from '../../context/user';
import { UserContextType } from '../../context/types';

export default function Profile() {
  const {userContext, setUserContext} = useContext(UserContext) as UserContextType;

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    setUserContext([])
  };

  return (
    <div className={styles.profileBody}>
        <img src={Logo} alt="company logo" className={styles.logo} />
      <div className={styles.cardBody}>
      <img src={`${userContext[0].avatar}`} alt="company logo" className={styles.avatar} />
        <p className={styles.cardText}>That’s it, {userContext[0].name}!</p>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <Button>Logout</Button>
        </form>
      </div>
    </div>
  )
}
