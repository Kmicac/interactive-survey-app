import axios from 'axios';

export const createSurvey = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/survey', data);
    return response;
  } catch (error) {
    console.error('Error al crear la encuesta:', error.response.data.message);
  }
};

export const getInfo = async () => {
  const id = localStorage.getItem('UserId');

  try {
    if (!id) {
      throw new Error('El ID del usuario no está disponible en el almacenamiento local.');
    }

    const res = await axios.get(`http://localhost:3001/survey/${id}`);
    const user = res.data;
    console.log(user);
    return user;
  } catch (error) {
    console.error('Error al obtener la información del usuario:', error.message);
    throw error;
  }
};


export const updateSurvey = async (dataToUpdate) => {
 const id = localStorage.getItem('UserId')
  try {
    const response = await axios.patch(`http://localhost:3001/survey/${id}/update/`, dataToUpdate);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la encuesta:', error);
    throw error;
  }
};
