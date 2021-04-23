import contactTypes from './contactTypes';

export const addContact = value => {
  return {
    type: contactTypes.ADD_CONTACT,
    payload: value,
  };
};

export const deleteContact = value => ({
  type: contactTypes.DELETE_CONTACT,
  payload: value,
});

export const changeFilter = value => ({
  type: contactTypes.CHANGE_FILTER,
  payload: value,
});

// export default {addContact, deleteContact};
