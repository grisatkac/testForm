export const addNumberFied = (name, value) => ({
    type: 'ADD_NUMBER_VALUES',
    value,
    name,
});

export const addStringField = (name, value) => ({
    type: 'ADD_STRING_VALUES',
    value,
    name,
});

export const addListField = (name, value) => ({
    type: 'ADD_LIST_VALUES',
    value,
    name,
});
