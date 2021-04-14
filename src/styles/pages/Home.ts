import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  flex: 1;

  li {
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;

    & + li {
      margin-top: 20px;
    }
  }

  img {
    width: 150px;
    border-radius: 8px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Title = styled.h1`
  color: #8257e5;
  margin-left: 50%;
`;
