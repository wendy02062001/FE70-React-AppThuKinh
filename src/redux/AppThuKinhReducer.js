const stateDefault = {
  glassOnTry: {
    id: 1,
    name: "Bamboo Wood",
    descr:
      "Woodies sunglasses are Handmade from 100% Real Bamboo. Soft pouch/lens cloth are included.",
  },
};

export const appThuKinhReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "TRY_GLASSES":
      state.glassOnTry = { ...action.glasses };
      return { ...state };

    default:
      return state;
  }
};
