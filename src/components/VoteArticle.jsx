import React from 'react'
import * as api from '../utils/api';
import {StyledButtons} from '../styled/buttons'
import { ReactComponent as Up } from '../images/thumbs-up-regular.svg';
import { ReactComponent as Down } from '../images/thumbs-down-regular.svg';


function VoteArticle({article_id}) {
  return (
    <StyledButtons>
    <span onClick={() => {
            api.patchArticle(article_id, +1);
          }}><Up/></span>
     <span onClick={() => {
            api.patchArticle(article_id, -1);
          }}><Down/></span>
    </StyledButtons>
  )
}

export default VoteArticle
