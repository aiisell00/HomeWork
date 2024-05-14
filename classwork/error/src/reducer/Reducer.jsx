const Reducer = (state, action) => {
  switch (action.type) {
    case "SetInpValue":
      console.log({ ...state, [action.field]: action.inpName9+5+ });

    default:
      state;
  }
};

export default Reducer;
