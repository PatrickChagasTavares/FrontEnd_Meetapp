import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddCircleOutline, MdAutorenew } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container, SubmitButton } from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const loading = useSelector(state => state.user.loading);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));

    data.oldPassword = null;
    data.password = null;
    data.confirmPassword = null;
  }

  /**
   * Validation data
   */
  const schema = Yup.object().shape({
    avatar_id: Yup.number(),
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um e-mail válido')
      .required('O e-mail é obrigatório'),
    oldPassword: Yup.string(),
    password: Yup.string().when('oldPassword', (oldPassword, field) =>
      oldPassword
        ? field
            .min(6, 'No minimo de 6 caracteres')
            .required('Nova senha é obrigatória!')
        : field
    ),
    confirmPassword: Yup.string().when('password', (password, field) =>
      password
        ? field
            .required('Confirmação de senha é obrigatória!')
            .oneOf(
              [Yup.ref('password')],
              'Confirmação de senha deve ser igual a senha'
            )
        : field
    ),
  });

  return (
    <Container>
      <Form schema={schema} initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" type="text" />
        <Input name="email" type="email" />

        <hr />

        <Input
          name="oldPassword"
          type="password"
          placeholder="Sua senha atual"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <SubmitButton type="submit" loading={loading}>
          {loading ? (
            <>
              <MdAutorenew color="#fff" size="16px" />
              {' Carregando...'}
            </>
          ) : (
            <>
              <MdAddCircleOutline color="#fff" size="16px" />
              {'Salvar perfil'}
            </>
          )}
        </SubmitButton>
      </Form>
    </Container>
  );
}
