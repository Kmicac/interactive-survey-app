'use client'

import React, { useEffect, useState } from "react";
import { getInfo, updateSurvey } from "../api/apiRequest";
import Link from "next/link";
import '../updateForm/update.css';

const UpdateInfo = () => {

  const [userInfo, setUserInfo] = useState({
    full_name: "",
    phone_number: "",
    start_date: "",
    preferred_language: "",
    how_found: "",
    newsletter_subscription: "",
  });
  
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
          const user = await getInfo();
          setUserInfo(user);
          console.log(user);
      } catch (error) {
          console.error(error);
      }
  };
  fetchUserInfo()
  },[])

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value || checked,
    });
  };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
      const updatedUser = await updateSurvey(userInfo.id, userInfo); // Pasa el ID y el formulario
      setUserInfo(updatedUser); // Actualiza el estado con la respuesta
      console.log(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2>Actualizar Información de Usuario</h2>
        <label htmlFor="full_name">Nombre Completo:</label>
        <input className='input'
          type="text"
          name="full_name"
          value={userInfo.full_name}
          onChange={handleInputChange}
        />

        <label htmlFor="phone_number">Número de Teléfono:</label>
        <input className='input'
          type="text"
          name="phone_number"
          value={userInfo.phone_number}
          onChange={handleInputChange}
        />

        <label htmlFor="preferred_language">¿Cuál es tu idioma preferido?</label>
        <select className='select'
          type="select"
          name="preferred_language"
          value={userInfo.preferred_language}
          onChange={handleInputChange}
        >
          <option value='english'>Ingles</option>
          <option value='spanish'>Español</option>
          <option value='french'>Frances</option>
          <option value='german'>Aleman</option>
        </select>


        <label htmlFor="how_found">¿Cómo nos encontraste?</label>
        <select className='select'
          type="select"
          name="how_found"
          value={userInfo.how_found}
          onChange={handleInputChange}
        >
          <option value="friends">Amigos</option>
          <option value="online_search">Busqueda en linea</option>
          <option value="advertisement">Publicidad</option>
        </select>
        <br />
        <br />
        <label htmlFor="newsletter_subscription">
          ¿Estás Subscrito al Boletín?{"  "}
        </label>
        <input
          type="checkbox"
          name="newsletter_subscription"
          checked={userInfo.newsletter_subscription}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <Link href='/showInfo'>
          <button className='button2' type="submit">Guardar Cambios</button>
        </Link>
      </form>
    </div>

  );
};

export default UpdateInfo;
