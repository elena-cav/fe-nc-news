import styled from 'styled-components';
export const StyledError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  margin-top: 100px;
  .main-img {
    width: 40%;
    border-radius: 50%;
  }

  .btn-wrapper {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    row-gap: 1rem;
    column-gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  .err-btn {
    box-shadow: 0 0 7px #00000044;
    width: 170px;
    font-size: 1.2rem;
    padding: 1rem;
    color: #4f6d7a;
    text-transform: uppercase;
  }
`;
