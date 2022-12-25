import BaseApi from "$root/pages/base.api";
import CookieApi from '$root/pages/cookie.api';

const BookApi = {
    login: (data) => BaseApi.post('/auth', data),
    getBookingAll: () => BaseApi.get('/booking'),
    getBookingById: (param) => BaseApi.get(`/booking/${param}`),
    createBooking: (data) => BaseApi.post('/booking', data),
    updateBookingAll: (id, data) => CookieApi.put(`/booking/${id}`, data),
    updateBookingPartial: (id, data) => CookieApi.patch(`/booking/${id}`, data),
    deleteBookingId: (data) => CookieApi.delete(`/booking/${data}`),
    healthCheck: () => BaseApi.get('/ping')
}

export default BookApi