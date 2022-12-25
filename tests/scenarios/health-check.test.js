import { assert } from "chai";
import BookingApi from "$root/pages/booking.api";

describe('Healthy Check', () => {
    it('Should Successful Created status', async () => {
        const response = await BookingApi.healthCheck();
        assert.equal(response.status, 201);
    })
})