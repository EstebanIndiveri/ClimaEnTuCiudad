import React,{useState,Fragment} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';


const Formulario = ({busqueda,guardarBusqueda,guardarConsultar}) => {

   
    //state del error
    const [error,guardarError]=useState(false);

    //extraigo ciudad y pais
    const{ciudad,pais}=busqueda;

    //coloca los elementos en el state:
    const handleChange=e=>{
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }


    //submit del formulario
    const handleSubmit=e=>{
        e.preventDefault();
        //valido
        if(ciudad.trim() ==='' || pais.trim() ===''){
            guardarError(true);
            return;
        }

        guardarError(false);
        //paso al componentne principal
        guardarConsultar(true);
    }

    return ( 
        <Fragment>
            
            <form
            onSubmit={handleSubmit}
            >
                {error?<Error mensaje="ambos campos son obligatorios"/>:null}

                <div className="input-field col s12">
                    <input
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        value={ciudad}
                        onChange={handleChange}
                    />
                    <label htmlFor="ciudad">Ciudad: </label>
                </div>

                <div className="input-field col s12">
                    <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                    >
                        <option value="">-- Seleccione un país --</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="US">Estados Unidos</option>
                        <option value="ES">España</option>
                        <option value="MX">México</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                    <label htmlFor="pais">País: </label>
                    <div className="input-field col s12">
                        <input
                        type="submit"
                        value="Buscar Clima"
                        className="waves-effect waves-light btn-large btn-block yellow accent-4"
                        />
                    </div>

                
            </form>

        </Fragment>
     );
}
Formulario.propTypes={
    busqueda:PropTypes.object.isRequired,
    guardarBusqueda:PropTypes.func.isRequired,
    guardarConsultar:PropTypes.func.isRequired

}
 
export default Formulario;