import produce from 'immer';

export default function Register(state = {}, action) {
  // eslint-disable-next-line consistent-return
  return produce(state, draft => {
    switch (action.type) {
      case '@register/GET_ALL_REGISTERS_SUCCESS': {
        draft.registers = action.payload;
        break;
      }
      case '@register/DELETE_REGISTER_SUCCESS': {
        draft.delete = true;
        break;
      }
      case '@register/CREATE_REGISTER_SUCCESS': {
        draft.status = true;
        break;
      }
      case '@register/UPDATE_REGISTER_SUCCESS': {
        draft.status = true;
        break;
      }
      case '@register/LOADING': {
        draft.loading = action.payload;
        break;
      }

      default:
        return state;
    }
  });
}
