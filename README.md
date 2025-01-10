<div align="center">
  <img width="100%" height="340" src="https://i.ibb.co.com/sgtkZBp/car-house.png"  />
</div>

# Project Name

<b>Car Rental Client</b>
<hr>

# Purpose

<b>The purpose of the project is to provide a user-friendly platform that allows customers to book rental cars efficiently while enabling the business to manage its operations seamlessly.</b>
<hr>

# Main Features

<b>For Users (Customers):</b>
<li><b>Convenience:</b> Users can browse and book cars from a catalog of available options based on their needs.</li>

<li>Users can view their bookings, check details like price, rental duration, and booking status.</li>
<li>They can modify booking dates if required.</li>

<li><b>Transparency:</b>
Users see daily rental prices clearly.
They get insights into the total cost based on the rental duration.</li>
<li><b>Ease of Interaction:</b> 
Smooth interaction through features like modals for modifying bookings.
Visual aids like bar chart and Line chart to analyze car rental pricing trends.</li>
<br>
<b>For Admin/Business:</b>
<li><b>Efficient Car Inventory Management:</b>
Tracks car availability.</li>
<li>Updates booking counts dynamically to prevent overbooking.</li>
<li><b>Streamlined Data Analytics:</b> 
The bar chart and line chart provides insights into pricing trends (e.g., daily rental price). </li>
<li>The admin can understand the most popular cars and adjust pricing accordingly.</li>
<li><b>Error Prevention:</b> 
Checks prevent users from booking the same car twice.</li>
<li><b>Customer Retention:</b> 
By providing clear information and flexibility, customers are likely to return.</li>
<hr>

# Main Technologies

<li><b>Tailwind CSS: Framework of CSS</b></li>
<li><b>Daisy UI: Component library of Tailwind CSS</b></li>
<li><b>React: Library of JavaScript</b></li>
<li><b>Firebase: Authentication</b></li>
<hr>

# Key Features

<b>Authentication:</b><br>
<li>Secure Register and log-in using email and password.</li>
<li>Integration with third-party providers like Google for easier login.</li>
<br>

<b>Car Browsing and Booking:</b><br>
<li>Users can browse available cars with details like images, models and daily rental prices. Only logged-in users can book the cars.</li>
<li>Seamless car booking with form-based inputs for rental start and end dates.</li>
<br>

<b>Booking Management:</b><br>
<li>Users can view all their current and past bookings in a dedicated "My Bookings" section.</li>
<li>Modify booking dates and like to cancel any booking in this section.</li>
<br>

<b>Transparent Pricing: </b>
<li>Display of daily rental prices and calculation of total booking costs based on the rental period.</li>

<hr>

# Dependnecies

"dependencies": {
  <br>
    "@tanstack/react-query": "^5.62.9",
    <br>
    "axios": "^1.7.9",
      <br>
    "date-fns": "^4.1.0",
      <br>
    "firebase": "^11.1.0",
      <br>
    "framer-motion": "^11.15.0",
      <br>
    "localforage": "^1.10.0",
      <br>
    "match-sorter": "^8.0.0",
      <br>
    "motion": "^11.15.0",
      <br>
    "react": "^18.3.1",
      <br>
    "react-datepicker": "^7.5.0",
      <br>
    "react-dom": "^18.3.1",
      <br>
    "react-dropzone": "^14.3.5",
      <br>
    "react-icons": "^5.4.0",
      <br>
    "react-router-dom": "^7.1.0",
      <br>
    "recharts": "^2.15.0",
      <br>
    "sort-by": "^1.2.0",
      <br>
    "sweetalert2": "^11.15.3"
      <br>
  },

  <hr>

# Guideline

When anyone will clone this repository then they have to follow some rules. Otherwise, the application is not working well. So, they have to follow these rules: 
<li>Open terminal (Git bash or anything) and run this command: <b>npm install</b></li>
<li>Add <b>.env.local</b> file then add secret keys with values and URLs</li>
<hr>

# Live URL

<li><b>Live Link of Project: </b>https://car-rental-client.web.app</li>
<hr>

# Server Repository

<li><b>Link: </b>https://github.com/ssmahim01/car-rental-platform-server</li>
<hr>

# Used npm Packages

<li><b>axios: </b>https://axios-http.com/docs/intro</li>
<li><b>date-fns: </b>https://date-fns.org</li>
<li><b>motion: </b>https://motion.dev</li>
<li><b>react-datepicker: </b>https://reactdatepicker.com</li>
<li><b>react-icons: </b>https://react-icons.github.io/react-icons</li>
<li><b>sweet-alert2: </b>https://sweetalert2.github.io</li>
<li><b>recharts: </b>https://recharts.org/en-US</li>

<hr>

# Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
