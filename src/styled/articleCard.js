import styled from 'styled-components';
export const StyledArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
  min-width: 270px;
  max-width: 640px;
  box-shadow: 0 0 7px #00000044;
  background-color: #fff;

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
  .topic {
    display: flex;
    font-weight: 600;
    column-gap: 0.2rem;
    color: #4f6d7a;
    margin: 0.5rem 0 0.2rem 0;
    p {
      font-size: 0.9rem;
      margin: 0;
      &::after {
        position: absolute;
        content: '';
        bottom: 0;
        left: 0;
        width: 0;
        height: 1.3px;
      }
      &:hover::after {
        width: 100%;
        background-color: #d5573b;
        transition: all 0.3s linear;
      }
    }
    svg {
      width: 0.7rem;
    }
  }
  button {
    margin-top: 1rem;
    align-self: center;
  }
`;
