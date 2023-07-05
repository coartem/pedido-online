import axios from 'axios'

import { SnackData } from '../interfaces/SnackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})

export const getBurgers = () => api.get<SnackData[]>('snacks?snack=burger')
export const getPizzas = () => api.get<SnackData[]>('/snacks?snack=pizza')
export const getDrinks = () => api.get<SnackData[]>('snacks?snack=drinks')
export const getIceCreams = () => api.get<SnackData[]>('snacks?snack=ice-creams')

export default api
