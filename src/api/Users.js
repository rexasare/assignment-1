import apiCall from './apiCall';

export const fetchUsers = async (results, page) => {
  const response = await apiCall.get(
    `/api?results=${results}&page=${page}&seed=abc`
  );
  return response.data;
};
