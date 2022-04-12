import React from 'react';

import './Destino.css';
import marte from './img/marte1.png';
import marte2 from './img/marte2.png';
import lua from './img/lua1.png';
import lua2 from './img/lua2.png';
import terra from './img/terra1.png';
import terra2 from './img/terra2.png';

export class Destino extends React.Component {

    componentDidUpdate() {
        console.log('Atualizou o destino...')
    }

    //Renderiza cabeçalho da página Destino
    renderCabecalho() {
        const { inputValue } = this.props;
        return inputValue === "Marte" ? //Validação para destino selecionado
            <div>
                <h1>Marte</h1>
                <p>Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar. Batizado em homenagem ao deus romano da guerra,
                    muitas vezes é descrito como o "Planeta Vermelho", porque o óxido de ferro predominante em sua superfície lhe dá uma aparência avermelhada.
                    Marte é um planeta rochoso com uma atmosfera fina, com características de superfície que lembram tanto as crateras de impacto da Lua quanto vulcões, vales, desertos e
                    calotas polares da Terra. O período de rotação e os ciclos sazonais de Marte são também semelhantes aos da Terra, assim como é a inclinação que produz as suas estações do ano.
                    Marte é o lar do Monte Olimpo, a segunda montanha mais alta conhecida no Sistema Solar (a mais alta em um planeta), e do Valles Marineris, um desfiladeiro gigantesco.
                    A suave Bacia Polar Norte, no hemisfério norte marciano, cobre cerca de 40% do planeta e pode ser uma enorme marca de impacto.
                    Marte tem duas luas conhecidas, Fobos e Deimos, que são pequenas e de forma irregular.
                    Estas luas podem ser asteroides capturados, semelhante ao 5261 Eureka, um asteroide troiano marciano.</p>
            </div> : inputValue === "Lua" ? <div>
                <h1>Lua</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div> :
                <div>
                    <h1>Terra</h1>
                    <p>A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar.
                        É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul.
                        Lar de milhões de espécies de seres vivos, incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a
                        existência de vida. O planeta formou-se há 4,56 bilhões de anos, e a vida surgiu na sua superfície um bilhão de anos
                        depois. Desde então, a biosfera terrestre alterou significativamente a atmosfera e outros fatores abióticos do planeta,
                        permitindo a proliferação de organismos aeróbicos, bem como a formação de uma camada de ozônio, a qual, em conjunto com o
                        campo magnético terrestre, bloqueia radiação solar prejudicial, permitindo a vida no planeta. As propriedades físicas do planeta,
                        bem como sua história geológica e órbita, permitiram que a vida persistisse durante este período.
                        Acredita-se que a Terra poderá suportar vida durante pelo menos outros 500 milhões de anos.</p>
                </div>
    }


    //Renderiza fotos da página Destino
    renderFotos() {
        const { inputValue } = this.props;
        return inputValue === "Marte" ? //Validação para destino selecionado
            <div className="imgDestino">
                <div>
                    <img src={marte} alt="marte um" />
                </div>
                <div>
                    <img src={marte2} alt="marte dois" />
                </div>
            </div>
            : inputValue === "Lua" ?
                <div className="imgDestino">
                    <div>
                        <img src={lua} alt="lua um" />
                    </div>
                    <div>
                        <img src={lua2} alt="lua dois" />
                    </div>
                </div>
                : <div className="imgDestino">
                    <div>
                        <img src={terra} alt="terra um" />
                    </div>
                    <div>
                        <img src={terra2} alt="marte dois" />
                    </div>
                </div>
    }

    //Renderização de informações complementares página destino
    renderInfos() {
        const { inputValue } = this.props;
        return inputValue === "Marte" ? //Validação para destino selecionado
            <div className="infos">
                <div>
                    <p>Temperatura</p>
                    <text>média: −63 ºC / mínima: −143 ºC / máxima: 35 ºC</text>
                </div>
                <div>
                    <p>Duração dia</p>
                    <text>1d 0h 37m da terra</text>
                </div>
                <div>
                    <p>Raio</p>
                    <text>3.389,5 km</text>
                </div>
                <div>
                    <p>Atmosfera</p>
                    <text> Dióxido de Carbono 95,97% / Argônio 1,93% / Nitrogênio 1,89% / Oxigênio 0,146% / Monóxido de carbono 0,0557% / Outros elementos	0,0083%</text>
                </div>
            </div>
            : inputValue === "Lua" ?
                <div className="infos">
                    <div>
                        <p>Temperatura</p>
                        <text>média: -53,1ºC / mínima: -173,1ºC / máxima: 116,9 ºC</text>
                    </div>
                    <div>
                        <p>Duração dia</p>
                        <text>29,5 dias da terra</text>
                    </div>
                    <div>
                        <p>Raio</p>
                        <text>1.737,4 km</text>
                    </div>
                    <div>
                        <p>Atmosfera</p>
                        <text>Hélio 25% / Neônio 25% / Hidrogênio 23% / Argônio 20%</text>
                    </div>
                </div>
                : <div className="infos">
                    <div>
                        <p>Temperatura</p>
                        <text>média: 14ºC / mínima: -93,2ºC / máxima: 57,8ºC</text>
                    </div>
                    <div>
                        <p>Duração dia</p>
                        <text>24 horas</text>
                    </div>
                    <div>
                        <p>Raio</p>
                        <text>6.371 km</text>
                    </div>
                    <div>
                        <p>Atmosfera</p>
                        <text>Nitrogênio 78,08% / Oxigênio 20,95% / Argônio 0,93% / Dióxido de carbono 0,03 / Vapor de água ~1% </text>
                    </div>
                </div>
    }

    render() {
        return (
            <div>
                <div className="destinos">
                    {this.renderCabecalho()}
                    {this.renderFotos()}
                    {this.renderInfos()}
                </div>
            </div>
        );
    }
}
