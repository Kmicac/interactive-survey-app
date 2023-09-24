import axios from 'axios';

export const createSurvey = async (data) => {
  try {
    const response = await axios.post('http://localhost:3001/survey', data);
    return response.data; 
  } catch (error) {
    console.error('Error al crear la encuesta:', error);
    throw error;
  }
};

export const updateSurvey = async (id, dataToUpdate) => {
  try {
    const response = await axios.patch(`http://localhost:3001/survey/${id}/update/`, dataToUpdate);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar la encuesta:', error);
    throw error;
  }
};
