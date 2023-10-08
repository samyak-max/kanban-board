import axios from "axios";

const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

export const getTickets = () => {
  return axios.get(API_URL).then((response) => response.data.tickets);
};

export const getUsers = () => {
  return axios.get(API_URL).then((response) => response.data.users);
};