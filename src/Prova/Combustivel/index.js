import { connect } from 'react-redux';
import { setTempoGasto, setVelocidadeMedia, setRendimentoMedio, setPrecoCombustivel } from '../redux/actions';
import { Combustivel } from './Combustivel';

//O método mapStateToProps transforma um trecho do estado da Store
//em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
    newValueTempoGasto: store.combustivelState.newValueTempoGasto,
    newVelocidadeMedia: store.combustivelState.newVelocidadeMedia,
    newRendimentoMedio: store.combustivelState.newRendimentoMedio,
    newPrecoCombustivel: store.combustivelState.newPrecoCombustivel
});

//O método mapDispatchToProps transforma a Action Creator clickButton
//em uma prop para o componente.
const mapDispatchToProps = dispatch => ({
    setTempoGasto: (value) => dispatch(setTempoGasto(value)),
    setVelocidadeMedia: (value) => dispatch(setVelocidadeMedia(value)),
    setRendimentoMedio: (value) => dispatch(setRendimentoMedio(value)),
    setPrecoCombustivel: (value) => dispatch(setPrecoCombustivel(value))
});

//No momento de exportar o componente, precisamos fazer a sua conexão
// através do método connect do React Redux
const CombustivelConnected = connect(mapStateToProps, mapDispatchToProps)(Combustivel);

export { CombustivelConnected as Combustivel }