import { assert } from "chai";
import BookingApi from "$root/pages/booking.api";

describe('Get Booking All ID', () => {
    it('Should Successful GET ID All Booking', async () => {
        const response = await BookingApi.getBookingAll();
        assert.equal(response.status, 200);
    })
})