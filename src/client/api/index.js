import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
})

export const insertItem = payload => api.post(`/item`, payload)
export const getAllItems = () => api.get(`/clothing_items`)
export const updateItemById = (id, payload) => api.put(`/item/${id}`, payload)
export const deleteItemById = id => api.delete(`/item/${id}`)
export const getItemById = id => api.get(`/item/${id}`)

const apis = {
    insertItem,
    getAllItems,
    updateItemById,
    deleteItemById,
    getItemById,
}

export default apis