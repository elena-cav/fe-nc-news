import styled from 'styled-components';
export const StyledArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-bottom: 1rem;
  padding: 1rem;
  max-width: 640px;
  box-shadow: 0 0 7px #00000044;
  background-color: #fff;

  .author-date {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 0.2rem;
    font-size: 0.9rem;
  }

  .author {
    cursor: pointer;
  }
  .author:hover {
    text-shadow: 0 0 10px #00000044;
  }
`;
