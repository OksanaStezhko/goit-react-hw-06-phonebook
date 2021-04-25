import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { addContact } from '../../redux/contactActions';

import Form from './Form';

const mapStateToProps = ({ contacts: { items } }) => ({
  contacts: { items },
});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
