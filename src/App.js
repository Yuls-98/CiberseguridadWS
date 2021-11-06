import React from 'react';
import './App.css';
import TextCard from './components/TextCard/TextCard';
import TitleCard from './components/TitleCard/TitleCard';
import Introduction from './components/Introduction/Introduction';
import TextBox from './components/TextBox/TextBox';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import infografia1 from './ContresniasSeguras.jpeg';
import infografia2 from './ErroresEnContrasenias.jpeg';
import infografia3 from './Recomendaciones.jpeg';
import Viewer from 'react-viewer';


function App() {

  let [ visible, setVisible ] = React.useState(false);

  return (
    <div className="App">
      <div className='bgi flex-column'>
        <div className='bg flex-column' style={{justifyContent: 'flex-end'}}>
          <div className='mb4 center'>  
            <TitleCard text={'INTERNET'}/>
          </div>
          <div className='mb7 center'>
            <TextCard text={'¿QUÉ TAN SEGURO NAVEGAS?'}/>
          </div>
          <a className='arrow center' href="#2" type="button"> </a>
        </div>
      </div>
      <div id="2" className='flex-column grey'>
        <div className='ph4'>
          <Introduction />
        </div>
        <Carousel showStatus={false} autoPlay={true} interval={10000} infiniteLoop={true}>
          <div className='pt4 pb4'>
            <TextBox 
              text='Hay 2,244 ciberataques por día y 164 ciberdelitos denunciados todos los días.'
            />
          </div>
          <div className='pt4'>
            <TextBox 
              text= 'De acuerdo al reporte de violaciones de seguridad de fin de año, en 2020, más de 37 billones de registros de información confidencial fueron comprometidos.'
            />
          </div>
          <div className='pt4'>
            <TextBox 
              text= 'Uno de cada 36 teléfonos tienen instaladas aplicaciones peligrosas'
            />
          </div>
          <div className='pt4'>
            <TextBox 
              text= 'Los piratas informáticos robaron más de 9 millones de registros médicos en septiembre de 2020.'
            />
          </div>
          <div className='pt4'>
            <TextBox 
              text= 'A nivel mundial, tan sólo detrás de Estados Unidos y el Reino Unido, México se ubica en el tercer lugar de países con más ciberataques, lo que reflejó en el 2017 una pérdida de 7,700 millones de dólares como consecuencia.'
            />
          </div>
          <div className='pt4'>
            <TextBox 
              text='La encuesta de Impacto de Contraseñas encontró que el 52% de los encuestados han compartido al menos una contraseña, mientras que el 41% las comparte con mayor frecuencia.'
            />
          </div>
          <div className='pt4'>
            <TextBox 
              text='De acuerdo al FBI, phishing fue el cibercrímen más común durante 2020, representando el 36% de todas las violaciones de seguridad.'
            />
          </div>
          <div className='pt4'>
            <TextBox 
              text='38% de los archivos adjuntos maliciosos enviados a través de correo electrónico fueron formatos de Microsoft Office, como Word, Powerpoint o Excel. Por su parte, los archivos PDF representan el 14% del total.'
            />
          </div>
          <div className='pt4'>
            <TextBox
              text='Los hackers se enfocan mucho en sitios de compras online, redes sociales, sitios de servicios en streaming y videos como Netflix, YouTube y similares.'
            />  
          </div> 
        </Carousel>
        <Container>
          <div className='flex-column'>
            <TextBox text={"INFOGRAFÍAS ÚTILES"}/>
            <div className='flex-row'>
              <img className="pl3 pr5 info"
                src={infografia1}
                alt="Infografía"
                height='390'
                onClick={() => { setVisible(true); } }>
                </img>
                <img className="pr5 info"
                  src={infografia2}
                  alt="Infografía"
                  height='390'
                  onClick={() => { setVisible(true); } }>
                  </img>
                <img className="pr5 info"
                  src={infografia3}
                  alt="Infografía"
                  height='390'
                  onClick={() => { setVisible(true); } }>
                  </img>
            </div>
          </div>
          <div className='flex-column pl4' style={{justifyContent: 'center'}}>
            <TextBox 
              text={
                'Si toda esta información te ha resultado útil, apóyame respondiendo la siguiente encuesta, gracias.'
              }
            />
            <Button/>
          </div>
        </Container>
        <Viewer
              visible={visible}
              onClose={() => { setVisible(false); } }
              images={[{src: infografia1, alt: ''},
                      {src: infografia2, alt: ''},
                      {src: infografia3, alt: ''}
                    ]}
              />
      </div>
    </div>
  );
}

export default App;