import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Viento=styled.p`
    font-size:12px !important;
    color:#039be5;
`;

const Clima = ({resultado}) => {

    const {name,main,wind}=resultado;

    if(!name)return null;
    
    //paso grados
    const kelvin=273.15;
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                    <p className="temperatura">
                        {parseFloat(main.temp-kelvin).toFixed(2)}<span> &#x2103;</span>
                    </p>

                    <p> Temperatura Máxima:
                        {parseFloat(main.temp_max-kelvin).toFixed(2)}<span> &#x2103;</span>
                    </p>

                    <p> Temperatura Mínima:
                        {parseFloat(main.temp_min-kelvin).toFixed(2)}<span> &#x2103;</span>
                    </p>

                    <Viento> Velocidad del Viento:
                        {parseFloat(wind.speed).toFixed(2)} k/h
                    </Viento>

                    <Viento> Direccion del Viento:
                        {parseFloat(wind.deg).toFixed(2)} °
                    </Viento>
            </div>
        </div>
     );
}
 
Clima.propTypes={
    resultado:PropTypes.object.isRequired
}
export default Clima;