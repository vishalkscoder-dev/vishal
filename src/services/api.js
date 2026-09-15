import axios from 'axios'

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL || 'https://vishalbackend-le7f.onrender.com').replace(/\/$/, '')

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
})


export class ApiError extends Error {
  constructor(message, { status, errors } = {}) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.errors = errors
  }
}


export async function postContact(payload) {
  try {
    const { data } = await api.post('/api/contact/', payload)
    return data
  } catch (error) {
    if (!error.response) {
      throw new ApiError('The server is unavailable. Please try again in a moment.')
    }

    const { data = {}, status } = error.response
    throw new ApiError(data.message || 'Unable to send your message. Please try again.', {
      status,
      errors: data.errors,
    })
  }
}


export default api
