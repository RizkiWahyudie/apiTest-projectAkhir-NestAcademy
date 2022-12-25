// LOGIN
export const LOGIN_USER_VALID = {
    "username" : "admin",
    "password" : "password123"
}

// GET DATA BY ID
export const BOOKING_BY_ID = {
    bookingId : 582
}

// POST DATA
export const CREATE_BOOKING_REQUIRED = {
    firstname : "Jim",
    lastname : "Brown",
    totalprice : 111,
    depositpaid : true,
    bookingdates : {
        checkin : "2018-01-01",
        checkout : "2019-01-01"
    },
    additionalneeds : "Breakfast"
}

// PUT DATA
export const UPDATE_BOOKING_ALL = {
    firstname : "Rizki",
    lastname : "Brown",
    totalprice : 200000,
    depositpaid : true,
    bookingdates : {
        checkin : "2018-01-01",
        checkout : "2020-01-01"
    },
    additionalneeds : "Breakfast"
}

export const UPDATE_BOOKING_ID = {
    bookingId : 582
}

export const UPDATE_BOOKING_PARTIAL = {
    firstname : "Nabil",
    lastname : "Uqon"
}

// DELETE
export const DELETE_BOOKING_ID = {
    bookingId : 29
}