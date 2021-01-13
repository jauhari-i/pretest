import axios from 'axios';

const baseUrl = 'http://api-tugas.herokuapp.com/v1';

const fetch = (url, method, param1, param2) => {
  return new Promise((resolve, reject) => {
    axios[method](url, param1, param2)
      .then((res) => resolve(res.data))
      .catch((err) => {
        const defaultError = {
          code: 500,
          status: 'error',
          message: 'Failed to fetch data. Please contact developer.',
        };
        if (!err.response) reject(defaultError);
        else if (!err.response.data) reject(defaultError);
        else reject(err.response.data);
      });
  });
};

export const getProfileList = async () => await fetch(`${baseUrl}/irfan`, 'get');
export const getProfileId = async (id) => await fetch(`${baseUrl}/irfan/${id}`, 'get');
export const addProfile = async (data) => await fetch(`${baseUrl}/irfan`, 'post', data);
export const editProfile = async (id, data) => await fetch(`${baseUrl}/irfan/${id}`, 'put', data);
export const deleteProfile = async (id) => await fetch(`${baseUrl}/irfan/${id}`, 'delete');
