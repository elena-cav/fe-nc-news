import React from 'react';
import * as api from '../utils/api';
import { StyledButtons } from '../styled/buttons';
import { ReactComponent as Up } from '../images/thumbs-up-regular.svg';
import { ReactComponent as Down } from '../images/thumbs-down-regular.svg';

class Vote extends React.Component {
  state = {
    votesUpdates: 0,
  };

  updateVotes = (id, increment, item) => {
    this.setState((currState) => {
      
      return {
        votesUpdates: currState.votesUpdates + increment
      };
    });
    api.patchVotes(id, increment, item).catch((err) => {
      this.setState((currState) => {
        return {
          votesUpdates: currState.votesUpdates - increment
        };
      });
    });
  };

  render() {
    const { id, votes, item } = this.props;
    const { votesUpdates } = this.state;
    return (
      <StyledButtons>
        
        <button className='btn'
          onClick={() => {
            this.updateVotes(id, 1, item);
          }}
        >
          <Up />
        </button>
        <p className="votes">{votes + votesUpdates}</p>
        <button className='btn'
          onClick={() => {
            this.updateVotes(id, -1, item);
          }}
        >
          <Down />
        </button>
      </StyledButtons>
    );
  }
}

export default Vote;
