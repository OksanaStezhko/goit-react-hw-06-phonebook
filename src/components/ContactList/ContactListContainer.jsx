import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { deleteContact } from '../../redux/contactActions';

import ContactList from './ContactList';

const getVisibleContacts = (filter, items) => {
  const normalizedContactName = filter.toLowerCase();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedContactName),
  );
};

const mapStateToProps = ({ contacts: { filter, items } }) => {
  const visibleContacts = getVisibleContacts(filter, items);
  return {
    contactList: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: idContact => dispatch(deleteContact(idContact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
