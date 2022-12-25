import { assert } from "chai";
import BookingApi from "$root/pages/booking.api";
import * as data from '$root/data/user.data';
import { getBookingId } from '$root/helpers/getbooking-id';

describe('Get Booking by ID User', () => {
    it('Should successful get data user by ID ' + getBookingId(data.BOOKING_BY_ID['bookingId']), async () => {
        const param = getBookingId(data.BOOKING_BY_ID['bookingId']);
        const response = await BookingApi.getBookingById(param);

        assert.equal(response.status, 200);
    })
})