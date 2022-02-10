import axios from 'axios';

export const baseURL = 'https://xwpo-c4qw-zxn1.m2.xano.io/';
export const baseURLImage = 'https://xwpo-c4qw-zxn1.m2.xano.io';
const instance = axios.create({
  baseURL: baseURL,
});

instance.interceptors.request.use(
  async config => {
    // if (customAxiosConfig.token) {
    //   config.headers['Authorization'] = 'Bearer ' + customAxiosConfig.token;
    // }
    const Token = "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.WwCdVwiNwzgLUJ8bk6ddrrAGxl9IU8aHT1gxfEYIJmveXA59dQcLPJEuEkJ6bCc-HM3T1mJy7JSz3D1hOVrj11Oj7h0FgNnx.DcnAQGdPsEP7gWbHh5P5VA._UBPYcSHwxky0OQnrFu4dbVu_a7p1B61cl9ypKDTT4_0x5_2aXg2l3BJqV9fL0cdFbxKbT6VMIdJ2sUbF8sVleLyXUVLT9OpzxN1Lg0UZYzNQ_43k0c0P7n26-jpTr2rYsoEAi2EDgseuy6UIYeuqA.zQIXusmuVlzBhy970tCfELUvBPA8hwKwAcSaiSDbi6M";
    config.headers['Authorization'] = 'Bearer ' + Token;
    return config;
  },
  err => {
    return Promise.reject(err);
  },
);

export default instance;

//https://docs.xano.com/building-features/authenticated-request
export const customAxiosConfig = {
  token: '',
};
