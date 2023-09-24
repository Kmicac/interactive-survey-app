'use client'

import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createSurvey } from '../api/apiRequest';
import { english, french, german, spanish } from '@/app/images/images';
import './language/language.css';
import Link from 'next/link';

const Survey = () => {

  const [step, setStep] = useState(1);
  const { register, handleSubmit, setValue } = useForm();
  const stepsTotal = 3;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Formulario enviado:', data);
    }
  };

  const progressValue = ( step / stepsTotal) * 100;

  return (

    <div>
      <progress className="progress-bar" min='0' max='100' value={progressValue}>
        <div className="progress"></div>
      </progress>

      <form onSubmit={handleSubmit(async (data) => {
        const response = await createSurvey(data);
        console.log(data)
      })}>
        {step === 1 && (
          <div>
            <h2 className='center'>Bienvenid@, completa con tus datos!</h2>
            <div className='center'>
              <div className='form-group'>
                <label className='tracking-in-contract-bck'>Nombre completo:</label>
                <input
                  type="text"
                  name="full_name"
                  {...register('full_name')}
                />
              </div>
            </div>
            <br />

            <div className='center'>
              <div className='form-group'>
                <label className='tracking-in-contract-bck'>Número de teléfono:</label>
                <input
                  type="tel"
                  name="phone_number"
                  {...register('phone_number')}
                />
              </div>
            </div>
            <br />
            <div className='center'>
              <div className='form-group'>
                <label className='tracking-in-contract-bck'>Fecha de inicio:</label>
                <input
                  type="date"
                  name="start_date"
                  {...register('start_date')}
                />
              </div>
            </div>
            <br />
            <div className='center'>

              <button className='button' onClick={handleNext}>Siguiente</button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <section>
              <h2 className='center'>¿Cuál es tu idioma preferido?</h2>

              <div className='container'>
                <div type="select">
                  <div className="rotate-scale-up">
                    <button className='idioma' type='button' name="preferred_language"
                      onClick={() => setValue('preferred_language', 'english')}>
                      <img src={english} alt="English Image" />
                      <div>
                        <h4>Inglés</h4>
                      </div>
                    </button>
                  </div>
                </div>
                <div type="select">
                  <div className="rotate-scale-up">
                    <button className='idioma' type="button"
                      name="preferred_language"
                      onClick={() => setValue('preferred_language', 'spanish')}>
                      <img src={spanish} alt="Spanish Image" />
                      <div>
                        <h4>Español</h4>
                      </div>
                    </button>
                  </div>
                </div>
                <div type="select">
                  <div className="rotate-scale-up">
                    <button className='idioma' type="button"
                      name="preferred_language"
                      onClick={() => setValue('preferred_language', 'french')}>
                      <img src={french} alt="French Image" />
                      <div>
                        <h4>Francés</h4>
                      </div>
                    </button>
                  </div>
                </div>
                <div type="select">
                  <div className="rotate-scale-up">
                    <button className='idioma' type="button"
                      name="preferred_language"
                      onClick={() => setValue('preferred_language', 'german')}>
                      <img src={german} alt="German Image" />
                      <div>
                        <h4>Alemán</h4>
                      </div>
                    </button>
                  </div>
                </div>

              </div>
            </section>
            <div className='center'>

              <button type="button" className="button" onClick={handleNext}>Siguiente</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div >
            <div className='center'>
              <h2>¿Cómo nos encontraste?</h2>

            </div>
            <div className='center'>
              <div className='conta'>
                <div className='div-found' name="how_found" onClick={() => setValue('how_found', 'friends')}>Amigos</div>
                <div className='div-found' name="how_found" onClick={() => setValue('how_found', 'online_search')} >Búsqueda en línea</div>
                <div className='div-found' name="how_found" onClick={() => setValue('how_found', 'advertisement')}>Publicidad</div>

              </div>
            </div>
            <br />
            <div className='center'>
              <label>
                ¿Desea recibir nuestro boletín informativo?
                <input
                  type="checkbox"
                  name="newsletter_subscription"
                  {...register('true')}
                />
              </label>
            </div>
            <div className='center'>
              <button className='button' type='submit'>
               {/* <Link href='/info'> */}
                Enviar
               {/* </Link> */}
                </button>

            </div>

          </div>
        )}
      </form>
    </div>
  )

}

export default Survey