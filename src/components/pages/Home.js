import React from 'react';
import { connect } from 'react-redux';
import { toggleFilter } from '../../actions/filterPollByAnswered';

const mapStateToProps = (state) => {
  const answeredPollIds = state.answers
    .filter((answer) => answer.userId === state.authedUser)
    .map((answer) => answer.pollId);

  const filteredPolls = Object.values(state.polls).filter(
    (poll) => answeredPollIds.includes(poll.id) === state.filterPollByAnswered
  );

  return {
    filterPollByAnswered: state.filterPollByAnswered,
    filteredPolls: filteredPolls,
  };
};

const mapDispatchToProps = {
  toggleFilter,
};

function Home() {
  return <div></div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
