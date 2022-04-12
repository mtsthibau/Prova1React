import { connect } from 'react-redux';
import { Destino } from './Destino';

//O método mapStateToProps transforma um trecho do estado da Store
//em uma prop utilizável pelo componente, com o nome newValue.
const mapStateToProps = store => ({
    inputValue: store.inicioState.newValue
});


//No momento de exportar o componente, precisamos fazer a sua conexão
// através do método connect do React Redux
const DestinoConnected = connect(mapStateToProps)(Destino);

export { DestinoConnected as Destino }