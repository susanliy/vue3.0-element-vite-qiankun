import $axios from 'axios';

export const tableListApi = () => $axios.post('/dev/api/courses/list');
