export const SET_VISITOR = 'SET_VISITOR';

export const SET_VARS = 'SET_VARS';

export const SET_OBJS = 'SET_OBJS';
export const APPEND_OBJS = 'APPEND_OBJS';

export function setVisitor(visitor) {
  return {
    type: SET_VISITOR,
    visitor: visitor
  };
}

export function logout() {
  return {
    type: SET_VISITOR,
    visitor: {
      isLogin: false,
    }
  };
}

export function setVars(key, value) {
  return {
    type: SET_VARS,
    key,
    value
  };
}
export function mapSet(...keyPath) {
  let value = keyPath.pop();
  return {
    type: 'MAP_SET',
    keyPath,
    value
  }
}

export function mapDelete(...keyPath) {
  return {
    type: 'MAP_DELETE',
    keyPath
  }
}

export default exports;

