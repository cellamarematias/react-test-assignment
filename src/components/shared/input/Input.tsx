import React from 'react';
import styles from './input.module.css';
import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";



type InputProps = {
  label: any;
  register: any;
  required: boolean;
};

export default function ({ label, register, required }: InputProps) {
  return (
    <>
      <label>{label}</label>
      <input {...register(label, { required })} className={styles.input} />
    </>
  )
}

