import { assert } from "chai";
import BookingApi from "$root/pages/booking.api";
import * as data from '$root/data/user.data';

describe('Delete Booking by ID User', () => {
    it('Should successful delete data user by ID', async () => {
        const response = await BookingApi.deleteBookingId(data.DELETE_BOOKING_ID['bookingId']);
        assert.equal(response.status, 201);
    })
})