const asyncHandler=require("express-async-handler");

const { sendPushNotification } = require('./notificationsController');
 
const Travel = require('../models/Travelhistory.Model')
const createBooking = async (req, res) => {
  const booking = new Travel(req.body);
  await booking.save();
const User=require('../models/user.Model')
//   const userDeviceToken = 'USER_DEVICE_TOKEN_FROM_DATABASE'; 
//   const message = 'Your booking was successfully created!';

  const user = await User.findById(req.body.userId);
  const userDeviceToken = user.deviceToken;
  const message = 'Your booking was successfully created!';

  sendPushNotification({ body: { token: userDeviceToken, message } });

  res.status(201).json({ message: 'Booking created successfully' });
};

//@ Schedule notifications 
const scheduleNotifications = async() => {
  const oneDay = 24 * 60 * 60 * 1000; 
  const threeHours = 3 * 60 * 60 * 1000; 

  const book=await Travel.find().then(bookings => {
    bookings.forEach(booking => {
      const journeyDate = new Date(booking.flightDetails.departure_date);
      const oneDayBefore = new Date(journeyDate.getTime() - oneDay);
      const threeHoursBefore = new Date(journeyDate.getTime() - threeHours);

      // @Schedule one day before notification
      setTimeout(() => {
        sendPushNotification({
          body: { token: booking.user.deviceToken, message: 'Your journey is tomorrow!' }
        });
      }, oneDayBefore - new Date());

      //@ Schedule three hours before notification
      setTimeout(() => {
        sendPushNotification({
          body: { token: booking.user.deviceToken, message: 'Your flight is in 3 hours!' }
        });
      }, threeHoursBefore - new Date());

      //@ Schedule check-in details notification (adjust timing as needed)
      setTimeout(() => {
        sendPushNotification({
          body: { token: booking.user.deviceToken, message: 'Check-in details for your flight.' }
        });
      }, journeyDate - new Date() - (1 * 60 * 60 * 1000)); 
    });
  });
};
scheduleNotifications();//
module.exports={scheduleNotifications,createBooking};
