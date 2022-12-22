import $axios from 'axios';

export const tableListApi = () => $axios.post('/dev/api/courses/list');

export const heardListApi = () => $axios.post('/dev/api/heard/info');
