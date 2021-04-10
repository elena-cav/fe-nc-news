import styled from 'styled-components';
export const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 7px #00000044;
  padding: 2rem;
  margin-top: 4rem;
  align-items: center;

  .delete-btn:hover {
    transform: scale(1.03);
    background-color: #f5f5f5;
    cursor: pointer;
  }
  .author-date {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    font-size: 0.9rem;

    & p {
      margin: 0.2rem;
    }
  }
  .author {
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
    text-transform: capitalize;
    border-radius: 0;
    border: 0;
    box-shadow: none;
    background-color: transparent;
    cursor: pointer;
    position: relative;

    &::after {
      position: absolute;
      content: '';
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
    }
    &:hover::after {
      width: 100%;
      background-color: #d5573b;
      transition: all 0.3s linear;
    }
  }

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

      &:disabled svg {
        color: lightgrey;
      }

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
        cursor: pointer;
      }
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

    button:hover {
      transform: scale(1.03);
      background-color: #f5f5f5;
      cursor: pointer;
    }
  }
`;
