import React from 'react';
import { Link } from '@reach/router';
import { StyledDeleted } from '../styled/deleted';

function Deleted(props) {
  console.log(props.location.state)

  if (props.location.state.err) return (
  <StyledDeleted>
    <h2>{props.location.state.err.message}</h2>
    <Link to={`/articles/${props.article_id}`}>Go back</Link>
  </StyledDeleted>
  )

  if (props.location.state.item === 'articles') return (
     <StyledDeleted>
      <h2>You have successfully deleted your article</h2>
      <Link to={`/`}>Go back</Link>
    </StyledDeleted>
  )
  return (
    <StyledDeleted>
      <h2>You have successfully deleted your comment</h2>
      <Link to={`/articles/${props.article_id}`}>Go back</Link>
    </StyledDeleted>
  );
}

export default Deleted;
