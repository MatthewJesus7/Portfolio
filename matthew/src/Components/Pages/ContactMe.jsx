import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import BackButton
 from '../Items/Buttons/BackButton';

import Input from '../Layout/input/Input';
import Textarea from '../Layout/input/Textarea';
import Section from '../Layout/Section';

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY
          )
          .then(
            (result) => {

              console.log('SUCCESS:', result.text);
              alert('Email enviado com sucesso!');
            },
            (error) => {

              console.log('FAILED:', error.text);
              alert('Erro ao enviar email.');
            }
          );
      };

  return (
    <>
    
    <BackButton />
    <Section customclass="pt-20">

        

    <main className=' relative z-20 max-w-lg mx-auto p-6 bg-gray-50/50 shadow-md rounded-lg'>

        <h1 className="text-2xl font-semibold text-gray-700 mb-4">Entre em Contato</h1>
        
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <Input
            text="Nome:"
            name="name"
            type="text"
            />

            <Input
            text="Nome:"
            name="name"
            type="email"
            />
            
            <Textarea 
            text="Mensagem:"
            name="message"
            rows="4"
            />

          <button
            type="submit"
            className="w-full py-2 px-4 bg-gray-500 text-white font-semibold rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Enviar
          </button>
        </form>
        </main>
    </Section>
    </>

  );
};

export default ContactMe;