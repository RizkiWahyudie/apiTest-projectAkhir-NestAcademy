import { assert } from "chai";
import BookingApi from "$root/pages/booking.api";
import * as data from '$root/data/user.data';

describe('Login', () => {
    it('Should Successful login', async () => {
        const response = await BookingApi.login(data.LOGIN_USER_VALID);
        assert.equal(response.status, 200);
    })
})