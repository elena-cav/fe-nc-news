import styled from 'styled-components';
export const StyledArticles = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;

  ul {
    padding-inline-start: 0px;
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

  .filters {
    display: flex;
    flex-direction: row;
    row-gap: 0;
    align-self: center;
    margin: 0;
    & ul {
      margin: 0;
      padding: 0.5rem;
    }

    & button {
      align-content: center;
      justify-content: center;
      display: flex;
      justify-content: space-between;
      column-gap: 0.3rem;
      margin: 0;
      color: #4f6d7a;
    }
    & svg {
      width: 1rem;
      color: #d5573b;
    }
    & p {
    }
  }
`;
