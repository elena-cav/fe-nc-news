import React from 'react'
import * as api from '../utils/api';
import {StyledButtons} from '../styled/buttons'
import { ReactComponent as Up } from '../images/thumbs-up-regular.svg';
import { ReactComponent as Down } from '../images/thumbs-down-regular.svg';


function VoteComment({comment_id, votes}) {
  
  return (
    <StyledButtons>
    <p onClick={() => {
            api.patchComment(comment_id, +1);
          }}><Up/></p>
     <p onClick={() => {
            api.patchComment(comment_id, -1);
          }}><Down/></p>
          <p>something</p>
    </StyledButtons>
  )
}

export default VoteComment
