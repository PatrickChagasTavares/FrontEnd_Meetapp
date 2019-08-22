import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';
import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo_dashboard.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="MeetApp" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />

          <Profile>
            <div>
              <strong>Patrick Chagas</strong>
              <Link to="profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Patrick Chagas"
            />
            <button type="submit" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
