import React from 'react';
import * as api from '../utils/api';
import { StyledButtons } from '../styled/buttons';
import { ReactComponent as Up } from '../images/thumbs-up-regular.svg';
import { ReactComponent as Down } from '../images/thumbs-down-regular.svg';

class Vote extends React.Component {
  state = {
    votesUpdates: 0,
    hasVoted: false
  };


  // componentDidMount() {
  //   console.dir(sessionStorage, localStorage)
  //   const storedVoted = sessionStorage.getItem('hasVoted');
  //   const storedId = sessionStorage.getItem('id');
  //   if (storedVoted ) {
  //     this.setState({ hasVoted: true});
  //   }
  // }

  updateVotes = (id, increment, item) => {
    this.setState({hasVoted: true})
    this.setState((currState) => {
      
      return {
        votesUpdates: currState.votesUpdates + increment
      };
    });
    api.patchVotes(id, increment, item).then(() => {
      //collection of ids array or obj
          sessionStorage.setItem('id', id)
    }).catch((err) => {
      this.setState((currState) => {
        return {
          votesUpdates: currState.votesUpdates - increment
        };
      });
    });
  };

  render() {
    const { id, votes, item } = this.props;
    const { votesUpdates, hasVoted} = this.state;
    return (
      <StyledButtons>
        
        <button disabled={hasVoted} className='btn'
          onClick={() => {
            this.updateVotes(id, 1, item);
          }}
        >
          <Up />
        </button>
        <p className="votes">{votes + votesUpdates}</p>
        <button disabled={hasVoted} className='btn'
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
