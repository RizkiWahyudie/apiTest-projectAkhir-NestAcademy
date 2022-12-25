import { assert } from "chai";
import BookingApi from "$root/pages/booking.api";
import * as data from '$root/data/user.data';

describe('Update Booking All', () => {
    it('Should Successful Update Data Booking All', async () => {
        const response = await BookingApi.updateBookingAll(data.UPDATE_BOOKING_ID['bookingId'], data.CREATE_BOOKING_REQUIRED);
        assert.equal(response.status, 200);
    })
})