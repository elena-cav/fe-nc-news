import styled from 'styled-components';
export const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 7px #00000044;
  padding: 2rem;
  margin-top: 4rem;
  align-items: center;

  p {
    line-height: 1.5rem;
  }

  .page-btn-wrapper {
    display: flex;
    column-gap: 1rem;
    align-items: center;

    button {
      padding: 0;
      border-radius: 0;
      border: 0;
      box-shadow: none;
      overflow: hidden;
      white-space: nowrap;
      text-indent: 120%;
      background-color: transparent;
      position: relative;
      width: 1.5rem;
      height: 1.5rem;

      svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    & svg:hover {
      opacity: 0.8;
    }
  }

  .topic {
    align-self: flex-start;
    display: flex;
    font-weight: 600;
    column-gap: 0.2rem;
    color: #4f6d7a;
    margin: 0.5rem 0 0.2rem 0;

    svg {
      width: 0.7rem;
    }
  }

  .comment {
    margin-bottom: 1rem;
    box-shadow: 0 0 7px #00000044;
    padding: 1rem;
  }

  .comments-wrapper {
    padding: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 640px;
  }
`;
