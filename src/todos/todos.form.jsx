import React, { Component } from 'react';
import { connect } from 'react-redux';

import { add, reset } from './todos.actions';

class TodosForm extends Component {
  state = { text: '', showID: true };

  handleChange = ({ target }) => this.setState({ [target.name]: target.value });

  handleCheck = ({ target }) =>
    this.setState({ [target.name]: target.checked });

  handleSubmit = (event) => {
    event.preventDefault();
    const { text, showID } = this.state;
    text.length && this.props.add(text, showID);
  };

  handleReset = () => this.props.reset();

  render() {
    const { text, showID } = this.state;
    return (
      <section>
        <button type="reset" onClick={this.handleReset}>
          Reset
        </button>
        <form onSubmit={this.handleSubmit}>
          <input
            type="checkbox"
            name="showID"
            checked={showID}
            onChange={this.handleCheck}
          />
          <input
            type="text"
            name="text"
            value={text}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            className="round-button"
            disabled={!text.length}
          >
            +
          </button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (todo, showID) => dispatch(add(todo, showID)),
  reset: () => dispatch(reset()),
});

export default connect(
  null,
  mapDispatchToProps,
)(TodosForm);
