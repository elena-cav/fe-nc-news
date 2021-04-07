import styled from 'styled-components';
export const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 7px #00000044;
  padding: 1rem;
  margin-top: 4rem;
  align-items: center;
  .comment {
    margin-bottom: 1rem;
    box-shadow: 0 0 7px #00000044;

    padding: 1rem;
    max-width: 640px;
  }

  .comments-wrapper {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
