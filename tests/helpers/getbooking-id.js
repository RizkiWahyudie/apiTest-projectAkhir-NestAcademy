import url from 'url';

export const getBookingId = (param) => {
    const params = new url.URLSearchParams(param)
    return params;
}