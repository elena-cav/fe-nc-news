import React from 'react';
import * as api from '../utils/api';
import { StyledButtons } from '../styled/buttons';
import { ReactComponent as Up } from '../images/thumbs-up-regular.svg';
import { ReactComponent as Down } from '../images/thumbs-down-regular.svg';

class Vote extends React.Component {
  state = {
    votesUpdates: 0,
    err: null
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
        <span
          onClick={() => {
            this.updateVotes(id, 1, item);
          }}
        >
          <Up />
        </span>
        <p className="votes">{votes + votesUpdates}</p>
        <span
          onClick={() => {
            this.updateVotes(id, -1, item);
          }}
        >
          <Down />
        </span>
      </StyledButtons>
    );
  }
}

export default Vote;
