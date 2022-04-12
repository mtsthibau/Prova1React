
import { SET_TEMPO_GASTO, SET_VELOCIDADE_MEDIA, SET_RENDIMENTO_MEDIO, SET_PRECO_COMBUSTIVEL } from '../actions/actionTypes';

const initialState = {
    newValueTempoGasto: '',
    newVelocidadeMedia: '',
    newRendimentoMedio: '',
    newPrecoCombustivel: ''
};

export const combustivelRedux = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEMPO_GASTO:
            return {
                ...state,
                newValueTempoGasto: action.newValueTempoGasto
            }
        case SET_VELOCIDADE_MEDIA:
            return {
                ...state,
                newVelocidadeMedia: action.newVelocidadeMedia
            }
        case SET_RENDIMENTO_MEDIO:
            return {
                ...state,
                newRendimentoMedio: action.newRendimentoMedio
            }
        case SET_PRECO_COMBUSTIVEL:
            return {
                ...state,
                newPrecoCombustivel: action.newPrecoCombustivel
            }
        default:
            return state;
    }
};