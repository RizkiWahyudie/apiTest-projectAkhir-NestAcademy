import { assert } from "chai";
import BookingApi from "$root/pages/booking.api";
import * as data from '$root/data/user.data';

describe('Create Booking', () => {
    it('Should Successful Create Data Booking', async () => {
        const response = await BookingApi.createBooking(data.CREATE_BOOKING_REQUIRED);
        assert.equal(response.status, 200);
    })
})