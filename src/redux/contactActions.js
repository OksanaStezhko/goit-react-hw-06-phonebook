import contactTypes from './contactTypes';
import shortid from 'shortid';

export const addContact = ({ name, number }) => {
  return {
    type: contactTypes.ADD_CONTACT,
    payload: { id: shortid.generate(), name, number },
  };
};

export const deleteContact = idContact => ({
  type: contactTypes.DELETE_CONTACT,
  payload: idContact,
});

export const changeFilter = valueFilter => ({
  type: contactTypes.CHANGE_FILTER,
  payload: valueFilter,
});
