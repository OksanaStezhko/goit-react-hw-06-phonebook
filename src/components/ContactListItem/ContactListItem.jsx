import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import style from './ContactListItem.module.css';

const ContactListItem = ({ id, listItem, onDeleteContact }) => {
  return (
    <li className={style.item}>
      {listItem.map(value => (
        <span className={style.info} key={shortid.generate()}>
          {value}
        </span>
      ))}
      <button
        type="button"
        className={style.button}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  listItem: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
