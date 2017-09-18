let initialState = {

}

export default ( state =initialState, actions)=>{
  switch (actions.type){
    case '':
      const data = actions.payload;
      return {
        ...state,
        ...data
      }
    default:
      return state
  }

}
