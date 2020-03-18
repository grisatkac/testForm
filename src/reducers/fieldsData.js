/*const obj = {};*/
const arr = [{},{},{}];

const fieldsData = (state = arr, { value, name, type }) => {

    switch (type) {
        case 'ADD_NUMBER_VALUES':
            state[0] = {
                [name]: value,
            }
            return state;
        case 'ADD_STRING_VALUES':
            state[1] = {
                [name]: value,
            }
            return state;
        case 'ADD_LIST_VALUES':

            state[2] = {
                [name]: value[0],
            }
            return state;
        default:
            return state;
    }
}

export default fieldsData;
