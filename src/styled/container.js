import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f5f5f5;
  /* transition: background-color 0.3s ease-in-out; */
  background-size: cover;
  padding: 2rem;
  box-sizing: border-box;
  color: #4f6d7a;
  height: auto;
  min-height: 100vh;
  text-align: center;
  font-weight: 400;
  margin: 0;
  position: relative;

  @media screen and (min-width: 900px) {
    padding-left: 170px;
  }
`;
