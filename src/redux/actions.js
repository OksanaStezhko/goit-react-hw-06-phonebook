export const addContact = value => {
  return {
    type: 'form/addContact',
    payload: value,
  };
};

export const deleteContact = value => ({
  type: 'form/deleteContact',
  payload: value,
});

export const changeFilter = value => ({
  type: 'form/changeFilter',
  payload: value,
});

// export default {addContact, deleteContact};
