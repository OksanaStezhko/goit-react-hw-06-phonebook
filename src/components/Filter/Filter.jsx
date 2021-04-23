import React from 'react';
import { connect } from 'react-redux';
import * as formActions from '../../redux/contactActions';

import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <label className={style.label} htmlFor="">
    Find contacts by name:
    <input
      className={style.input}
      type="text"
      value={value}
      onChange={onChangeFilter}
    />
  </label>
);

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ contacts: { filter } }) => {
  return {
    value: filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: ({ currentTarget }) => {
      return dispatch(formActions.changeFilter(currentTarget.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
