import { SET_INICIO, SET_TEMPO_GASTO, SET_VELOCIDADE_MEDIA, SET_RENDIMENTO_MEDIO } from './actionTypes';

export const setInicio = value => ({
    type: SET_INICIO,
    newValue: value
});

export const setTempoGasto = value => ({
    type: SET_TEMPO_GASTO,
    newValueTempoGasto: value
});

export const setVelocidadeMedia = value => ({
    type: SET_VELOCIDADE_MEDIA,
    newVelocidadeMedia: value
});

export const setRendimentoMedio = value => ({
    type: SET_RENDIMENTO_MEDIO,
    newRendimentoMedio: value
});

export const setPrecoCombustivel = value => ({
    type: SET_RENDIMENTO_MEDIO,
    newPrecoCombustivel: value
});

//Ao ser disparada, ela comunicará ao Reducer que o type é
// CLICK_UPDATE_VALUE,
//além do valor newValue: value que deverá ser atualizado n
// a Store.