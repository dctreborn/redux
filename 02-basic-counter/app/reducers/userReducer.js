export default function reducer(state={
    user: ''
  }, action) {

    switch (action.type) {
      case 'CHANGE_USER':
        return {...state, user: action.payload}
      default:
        return state;
    }
}
