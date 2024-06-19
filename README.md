# AirlineManagment

INSTRUCTIONS FOR RUNNING THE SERVER IN LOCALHOST---

1.Open the folder AirlineManagement in terminal
2.Inside the Folder AirlineManagement there are three folder ---
  A.backend ---
    i.Change directory of backend folder  ( .....\AirlineManagement\backend>)
   ii.Run command  npm i              (.....\AirlineManagement\backend>npm i)
  iii.Run command  npm nodemon server.js .If your script is disabled then  run command  npx nodemon server.js
   iv.Make sure that you put .env file and required credential before running localhost.Look at line number 18 of server.js  for port information and change according to you. And if you change this port number then accordingly adjust frontend file which connect to backend   (frontend->src->components->API->api.js     line no 3.).

  B.frontendadmin   ---
    i.Now open a new terminal and change directory of frontendadmin folder ( .....\AirlineManagement\frontendadmin>)
   ii.Run command npm i      ( .....\AirlineManagement\frontendadmin>npm i)
  iii.Run command npm start
   iv.Make sure that your port 3000 is free and no other server is running on localhost:3000, otherwise change cors settings in the server file in backend folder.

  C.frontend   ---
    i.Now open a new terminal and change directory of frontend folder ( .....\AirlineManagement\frontend>)
   ii.Run command npm i      ( .....\AirlineManagement\frontend>npm i)
  iii.Run command npm start
   iv.Make sure that your port 3001 is free and no other server is running on localhost:3001, otherwise change cors settings in the server file in backend folder. Also put .env file with proper  entries in frontend folder for razorpay pyment gateway and Firebase notification.
Initialization   ---
  Initially there will be no flights or staff available in an empty database. To add flights and staff run the frontendadmin page. If the page is being opened first time ever. It will ask you to create a manager id and password and will save this in your database. Do Not forget the password as it is required to register new staffs to your company site. further the staffs or the manager both can add new flights and users will be able to see them in the frontend page.
  
   