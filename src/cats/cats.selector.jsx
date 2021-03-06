import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchByType } from './cats.actions';
import { DEFAULt_NB_IMG, IMG_TYPES, MAX_IMAGES } from './cats.constants';

class CatsSelector extends Component {
  state = { nbImg: DEFAULt_NB_IMG };

  componentDidMount() {
    this.props.changeType(IMG_TYPES[0]);
  }

  handleChange = ({ target }) => this.props.changeType(target.value, this.nb.value);

  handleRefresh = () => this.props.changeType(this.select.value, this.nb.value);

  handleNumber = ({ target }) => {
    const nbImg = Math.min(target.value, MAX_IMAGES);
    this.setState({ nbImg });
    this.props.changeType(this.select.value, nbImg);
  };

  render() {
    return (
      <section>
        <input
          ref={(s) => (this.nb = s)}
          type="number"
          value={this.state.nbImg}
          onChange={this.handleNumber}
        />
        <select ref={(s) => (this.select = s)} onChange={this.handleChange}>
          {IMG_TYPES.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <button type="button" onClick={this.handleRefresh}>
          Refresh
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeType: (type, nb) => dispatch(fetchByType(type, nb)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CatsSelector);
