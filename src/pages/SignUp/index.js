import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { FaSpinner } from 'react-icons/fa';
import * as Yup from 'yup';

import { SubmitButton } from '~/pages/_layouts/auth/styles';
import logo from '~/assets/logo.svg';

/**
 * Validation data
 */
const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'No minimo de 6 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img src={logo} alt="logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <SubmitButton type="submit">
          {loading ? (
            <>
              <FaSpinner color="#fff" size={14} />
              {' Carregando...'}
            </>
          ) : (
            'Criar conta'
          )}
        </SubmitButton>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
