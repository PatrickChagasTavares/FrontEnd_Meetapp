import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 940px;
  margin: 50px auto;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 32px;
    color: #fff;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f94d6a;
    border-radius: 4px;
    border: 0;
    width: 172px;
    height: 42px;
    font-weight: bold;
    color: #fff;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.2, '#f94d6a')};
    }

    svg {
      margin-right: 10px;
    }
  }
`;

export const ListMeetups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

export const Meetup = styled.div`
  ${props =>
    props.loading &&
    css`
      div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 940px;
        height: 200px;
        background: rgba(0, 0, 0, 0.2);
        opacity: 0.6;

        strong {
          font-size: 20px;
          color: #fff;
          opacity: 0.6;
        }
      }
    `}

  a {
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.2);
    border: 0;
    border-radius: 4px;
    height: 62px;
    margin: 0 0 10px;
    padding: 0 30px;
    width: 940px;
    opacity: 0.6;

    div {
      display: flex;

      time {
        margin-right: 50px;
      }
    }
  }
`;
