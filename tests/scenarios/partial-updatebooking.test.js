import { assert } from "chai";
import BookingApi from "$root/pages/booking.api";
import * as data from '$root/data/user.data';

describe('Update Booking Partial', () => {
    it('Should Successful Update Data Booking Partial', async () => {
        const response = await BookingApi.updateBookingPartial(data.UPDATE_BOOKING_ID['bookingId'], data.UPDATE_BOOKING_PARTIAL);
        assert.equal(response.status, 200);
    })
})