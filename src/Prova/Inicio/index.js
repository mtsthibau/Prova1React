import { connect } from 'react-redux';
import { setInicio } from '../redux/actions';
import { Inicio } from './Inicio';

//O método mapStateToProps transforma um trecho do estado da Store
//em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
    inputValue: store.inicioState.newValue
});

//O método mapDispatchToProps transforma a Action Creator clickButton
//em uma prop para o componente.
const mapDispatchToProps = dispatch => ({
    setInicio: (value) => dispatch(setInicio(value))
});

//No momento de exportar o componente, precisamos fazer a sua conexão
// através do método connect do React Redux
const InicioConnected = connect(mapStateToProps, mapDispatchToProps)(Inicio);

export { InicioConnected as Inicio }