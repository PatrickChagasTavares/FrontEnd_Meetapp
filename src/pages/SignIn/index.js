import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { FaSpinner } from 'react-icons/fa';
import * as Yup from 'yup';

import { SubmitButton } from '~/pages/_layouts/auth/styles';
import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

/**
 * Validation data
 */
const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="logo" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <SubmitButton loading={loading}>
          {loading ? (
            <>
              <FaSpinner color="#fff" size={14} />
              {' Carregando...'}
            </>
          ) : (
            'Entrar'
          )}
        </SubmitButton>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
