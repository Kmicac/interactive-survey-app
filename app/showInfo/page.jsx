'use client'

import React, { useEffect, useState } from "react"
import { getInfo } from "../api/apiRequest";
import { english, spanish, french, german } from "../images/images";
import '../showInfo/info.css';
import Link from "next/link";

const InfoUser = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const user = await getInfo();
                setUser(user);
                console.log(user);
            } catch (error) {
                console.error(error);
            }
        };
        fetchUserInfo();
    }, []);

    if (!user) {
        return <p>Cargando...</p>;
    }

    const hendleDeleteInfo = () => {
        localStorage.clear('UserId')
    };

    return (

        <div className="box">
            <div>
                <div className="card">
                    <h1>{user.full_name}</h1>
                    <p><b>Idioma</b></p>
                    <img src={
                        user.preferred_language === "english"
                            ? english
                            : user.preferred_language === "spanish"
                                ? spanish
                                : user.preferred_language === "french"
                                    ? french
                                    : user.preferred_language === "german"
                                        ? german
                                        : ""
                    }
                        alt="Image Language"
                    />
                    <br />
                    <p><b>Numero de telefono <br /> {user.phone_number}</b></p>
                    <br />
                    <p className="price">Estás subscripto: {user.newsletter_subscription ? 'Si' : 'No'}</p>
                    <br />
                    <p><b>Nos encontraste a través de:
                        <br />
                        {user.how_found === 'friends'
                            ? 'Amigos'
                            : user.how_found === 'online_search'
                                ? 'Busqueda en linea'
                                : user.how_found === 'advertisement'
                                    ? 'Publicidad'
                                    : ""}</b></p>
                    <br />
                    <p><b>Fecha de inicio: {user.start_date}</b></p>
                    <br />
                    <Link href='/updateForm'>
                        <button>
                            Actualizar info
                        </button>
                    </Link>
                </div>
                <br />
                <br />
            </div>
            <Link href='/'>
                <button className="boton2" onClick={hendleDeleteInfo}>Inicio</button>
            </Link>
        </div>
        
    )
}

export default InfoUser