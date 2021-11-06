import React from 'react';
import './Introduction.css';

const Introduction = () => {
    return(
        <div className='introduction'>
            <p>
                Debido a la pandemia reciente, el mundo se ha digitalizado en gran medida, incrementando el número de usuarios que navega por Internet, realizando todo tipo de actividades, tales como educación o trabajo remotos, ver películas y series, compras de todo tipo (comida, ropa, dispositivos electrónicos, etc), transacciones bancarias, comunicarse con amigos y familiares, jugar, etc.
            </p>
            <p>
                Para muchas de estas actividades, las personas deben crear cuentas en las plataformas en las que desean interactuar, por lo que deben de brindar ciertos datos personales mínimos que dichas plataformas requieren; dependiendo del tipo de plataforma, esta información personal varía: nombre, edad, gustos, ocupaciones, direcciones domiciliarias, números telefónicos, datos bancarios, etc. Adicionalmente, siempre se le solicita a los usuarios la creación de una contraseña cin el fin de restringir el acceso a cualquier otra persona que no la conozca. Por lo que, si alguien lograra decifrar o conseguir la información necesaria para acceder a estas cuentas, todos los datos personales que contengan estarán a merced del atacante y, seguramente, no querrás que puedan disponer de tus fotos, tarjetas de crédito, que sepan donde vives, lo que haces, a quiénes conoces, o incluso que utilicen tu cuenta para hacerse pasar por ti y hacer cosas en tu nombre, tales como dañar tu imagen pública o cometer delitos.
            </p>
            <p>
                A cotinuación se presentan datos importantes que brindan una mejor idea del constante riesgo en el que los usuarios se encuentran al navegar por Internet.
            </p>
        </div>
    );  
};

export default Introduction;