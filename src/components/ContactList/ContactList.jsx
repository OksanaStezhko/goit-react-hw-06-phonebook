import React from 'react';
import { connect } from 'react-redux';
import * as formActions from '../../redux/contactActions';
import ContactListItem from '../ContactListItem';
// import PropTypes from 'prop-types';
import style from './ContactList.module.css';

const ContactList = ({ contactList, onDeleteContact }) => {
  return (
    <ul className={style.list}>
      {contactList.map(({ id, ...dataContact }) => (
        <ContactListItem
          key={id}
          id={id}
          listItem={Object.values(dataContact)}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

const getVisibleContacts = (filter, items) => {
  const normalizedContactName = filter.toLowerCase();
  // console.log('filter', filter);
  // console.log('normalizedContactName', normalizedContactName);
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedContactName),
  );
};

const mapStateToProps = state => {
  const visibleContacts = getVisibleContacts(
    state.contacts.filter,
    state.contacts.items,
  );

  return {
    contactList: visibleContacts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: idContact =>
      dispatch(formActions.deleteContact(idContact)),
  };
};

// ContactList.propTypes = {
//   contactList: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   onDeleteContact: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
