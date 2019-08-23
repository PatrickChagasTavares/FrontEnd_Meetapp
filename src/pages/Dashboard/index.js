import React, { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosAdd } from 'react-icons/io';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
import pt from 'date-fns/locale/pt';

import api from '~/services/api';

import { Container, Title, ListMeetups, Meetup } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

      const data = response.data.map(meetup => ({
        ...meetup,
        date: format(
          parseISO(meetup.times),
          "dd 'de' MMMM' de 'yyyy', às' H:mm'h'",
          {
            locale: pt,
          }
        ),
      }));

      setMeetups(data);
    }
    loadMeetups();
  }, [setMeetups]);

  return (
    <Container>
      <Title>
        <p>Meus Meetups</p>

        <button type="submit">
          <IoIosAdd color="#fff" size="20px" />
          Novo Meetup
        </button>
      </Title>

      <ListMeetups>
        {meetups.length > 0 ? (
          meetups.map(meetup => (
            <Meetup key={meetup.id} loading={false}>
              <Link to={`details/${meetup.id}`}>
                <p>{meetup.title}</p>

                <div>
                  <time>{meetup.date}</time>
                  <IoIosArrowForward color="#fff" />
                </div>
              </Link>
            </Meetup>
          ))
        ) : (
          <Meetup loading>
            <div>
              <strong>Não existem Meetups</strong>
            </div>
          </Meetup>
        )}
      </ListMeetups>
    </Container>
  );
}
