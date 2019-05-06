const GET_D2P_DATA = (state, col) => {
  state.Dagtilbud2Praktik = col;
};

const GET_SF2P_DATA = (state, col) => {
  state.Skolefritid2Praktik = col;
};

const GET_SS2P_DATA = (state, col) => {
  state.SocialSpecial2Praktik = col;
};

const GET_D3P_DATA = (state, col) => {
  state.Dagtilbud3Praktik = col;
};

const GET_SF3P_DATA = (state, col) => {
  state.Skolefritid3Praktik = col;
};

const GET_SS3P_DATA = (state, col) => {
  state.SocialSpecial3Praktik = col;
};

export default {
  GET_D2P_DATA,
  GET_SF2P_DATA,
  GET_SS2P_DATA,
  GET_D3P_DATA,
  GET_SF3P_DATA,
  GET_SS3P_DATA
};
