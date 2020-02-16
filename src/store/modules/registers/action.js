export function getRegisters() {
  return {
    type: '@register/GET_ALL_REGISTERS',
  };
}

export function loading(isLoading) {
  return {
    type: '@register/LOADING',
    payload: isLoading,
  };
}

export function getAllRegistersSucess(registers) {
  return {
    type: '@register/GET_ALL_REGISTERS_SUCCESS',
    payload: registers,
  };
}

export function deleteRegister(id) {
  return {
    type: '@register/DELETE_REGISTER',
    payload: id,
  };
}

export function deleteRegisterSuccess() {
  return {
    type: '@register/DELETE_REGISTER_SUCCESS',
  };
}

export function createRegister(payload) {
  return {
    type: '@register/CREATE_REGISTER',
    payload,
  };
}
export function createSuccess() {
  return {
    type: '@register/CREATE_REGISTER_SUCCESS',
  };
}

export function updateRegister(payload) {
  return {
    type: '@register/UPDATE_REGISTER',
    payload,
  };
}
export function updateRegisterSuccess() {
  return {
    type: '@register/UPDATE_REGISTER_SUCCESS',
  };
}
