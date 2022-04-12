import React from 'react';
import './Combustivel.css';

export class Combustivel extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputTempoGasto: '',
            inputVelocidadeMedia: '',
            inputRendimentoMedio: '',
            inputPrecoCombustivel: '',
            textDistanciaPercorrida: '',
            textLitrosGastos: '',
            textValorTotalGasto: '',
        }
    }

    //controla estado inputTempoGasto
    inputChangeTempoGasto(valor) {
        this.setState({
            inputTempoGasto: valor
        });
        // const { setTempoGasto } = this.props;
        // setTempoGasto(valor);
    }

    //controla estado inputVelocidadeMedia
    inputChangeVelocidadeMedia(valor) {
        this.setState({
            inputVelocidadeMedia: valor
        });
        // const { setVelocidadeMedia } = this.props;
        // setVelocidadeMedia(valor);
    }

    //controla estado inputRendimentoMedio
    inputChangeRendimentoMedio(valor) {
        this.setState({
            inputRendimentoMedio: valor
        });
        // const { setRendimentoMedio } = this.props;
        // setRendimentoMedio(valor);
    }

    inputChangePrecoCombustivel(valor) {
        this.setState({
            inputPrecoCombustivel: valor
        });
        // const { setPrecoCombustivel } = this.props;
        // setPrecoCombustivel(valor);
    }

    //Função que dispara validação e calculos
    buttonCalcular() {
        const validated = this.validateForm()
        if (!validated) {
            alert("Preencha todos os campos corretamente.")
            return
        }

        //chamadas para funções que são responsáveis pelos calculos dos valores finais
        const distancia = this.calcDistanciaPercorrida()
        const litros = this.calcListrosGastos(distancia)
        const valorTotal = this.calcValorTotalGasto(litros)

        //Setando valores ao final dos calculos
        this.setState({
            textDistanciaPercorrida: parseFloat(distancia).toFixed(2),
            textLitrosGastos: parseFloat(litros).toFixed(2),
            textValorTotalGasto: parseFloat(valorTotal).toFixed(2)
        });
    }

    validateForm() {
        let {
            inputTempoGasto,
            inputVelocidadeMedia,
            inputRendimentoMedio,
            inputPrecoCombustivel,
        } = this.state;

        //Se cada um dos valores inputados pelo usuário for um numero valida os (true) dados inputados
        //caso haja qualquer um dos campos cujo valor informado não seja númeral retorna false para validação  
        inputTempoGasto = parseFloat(inputTempoGasto)
        inputVelocidadeMedia = parseFloat(inputVelocidadeMedia)
        inputRendimentoMedio = parseFloat(inputRendimentoMedio)
        inputPrecoCombustivel = parseFloat(inputPrecoCombustivel)

        if (isNaN(inputTempoGasto))
            return false
        if (isNaN(inputVelocidadeMedia))
            return false
        if (isNaN(inputRendimentoMedio))
            return false
        if (isNaN(inputPrecoCombustivel))
            return false

        return true

    }

    //Calculo de distância percorrida
    calcDistanciaPercorrida() {
        const { inputTempoGasto, inputVelocidadeMedia } = this.state;
        return parseFloat(inputTempoGasto).toFixed(2) * parseFloat(inputVelocidadeMedia).toFixed(2)
    }

    //Calculo de total listros gastos
    calcListrosGastos(distancia) {
        const { inputRendimentoMedio } = this.state;
        return parseFloat(distancia).toFixed(2) / parseFloat(inputRendimentoMedio).toFixed(2)
    }

    //Calculo de total de reais gastos
    calcValorTotalGasto(litros) {
        const { inputPrecoCombustivel } = this.state;
        return litros * parseFloat(inputPrecoCombustivel).toFixed(2)
    }

    render() {
        const {
            inputTempoGasto,
            inputVelocidadeMedia,
            inputRendimentoMedio,
            inputPrecoCombustivel,
            textDistanciaPercorrida,
            textLitrosGastos,
            textValorTotalGasto
        } = this.state;

        return (
            <div>
                <div className="combustivel">
                    <h1>Combustível</h1>
                    <div className="form">
                        <div className="inputGroup">
                            <p>Tempo gasto</p>
                            <input type="text" pattern="[0-9]" className="formInput"
                                onChange={(event) => this.inputChangeTempoGasto(event.target.value)}
                                type='text' value={inputTempoGasto} placeholder="Em horas" onKeyPress={(event) => {
                                    if (!/[0-9,.]/.test(event.key)) { //Remoção de caracteres indesejados
                                        event.preventDefault();
                                    }
                                }}
                            />
                        </div>
                        <div className="inputGroup">
                            <p>Velocidade média</p>
                            <input type="text" pattern="[0-9]" className="formInput"
                                onChange={(event) => this.inputChangeVelocidadeMedia(event.target.value)}
                                type='text' value={inputVelocidadeMedia} placeholder="Em Km/h" onKeyPress={(event) => {
                                    if (!/[0-9,.]/.test(event.key)) { //Remoção de caracteres indesejados
                                        event.preventDefault();
                                    }
                                }}
                            />
                        </div>
                        <div className="inputGroup">
                            <p>Rendimento médio</p>
                            <input type="text" pattern="[0-9]" className="formInput"
                                onChange={(event) => this.inputChangeRendimentoMedio(event.target.value)}
                                type='text' value={inputRendimentoMedio} placeholder="Em Km/litro" onKeyPress={(event) => {
                                    if (!/[0-9,.]/.test(event.key)) { //Remoção de caracteres indesejados
                                        event.preventDefault();
                                    }
                                }}
                            />
                        </div>
                        <div className="inputGroup">
                            <p>Preço combustível</p>
                            <input type="text" pattern="[0-9]" className="formInput"
                                onChange={(event) => this.inputChangePrecoCombustivel(event.target.value)}
                                type='text' value={inputPrecoCombustivel} placeholder="Em reais (R$)" onKeyPress={(event) => {
                                    if (!/[0-9,.]/.test(event.key)) { //Remoção de caracteres indesejados
                                        event.preventDefault();
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div>
                        <button className="formInput" onClick={() => this.buttonCalcular()}>CALCULAR</button>
                    </div>
                </div>
                {textDistanciaPercorrida !== "" && textDistanciaPercorrida !== 0 ?  //Verificação para exibição dos resultados
                    <div className="resultado">
                        <h1>RESULTADO</h1>
                        <div>
                            <p>Tempo gasto na viagem:  {inputTempoGasto}H</p>
                        </div>
                        <div>
                            <p>Velocidade média:{inputVelocidadeMedia}Km/h</p>
                        </div>
                        <div>
                            <p>Rendimento médio: {inputRendimentoMedio}Km/l</p>
                        </div>
                        <div>
                            <p>Preço Combustível: R${inputPrecoCombustivel}</p>
                        </div>
                        <div>
                            <p>Distância percorrida: {textDistanciaPercorrida}Km</p>
                        </div>
                        <div>
                            <p>Litros utilizados: {textLitrosGastos}l</p>
                        </div>
                        <div>
                            <p>Valor total gasto combustivel: R${textValorTotalGasto}</p>
                        </div>
                    </div> : null
                }
            </div>
        );
    }
}
