var name = (state = [], action) => {
    switch (action.type) {
        case 'setLocalName':
            state = action.payload;
            return state;

        case 'resetState':
            state = ""
            return state

        default:
            return state
    }
}

var reducers = {
  name
}

export default reducers;