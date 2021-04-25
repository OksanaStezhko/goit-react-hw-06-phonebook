import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { changeFilter } from '../../redux/contactActions';

import Filter from './Filter';

const mapStateToProps = ({ contacts: { filter } }) => {
  return {
    value: filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeFilter: ({ currentTarget }) => {
      return dispatch(changeFilter(currentTarget.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
