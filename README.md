
### Using `JOI` for node.js server validation  
---   

**There are 3 places were data validation takes place**
- Frontend UI rendering (front tier) - gives a smooth user experience
- Backend server like Express (middle tier - use Joi) - secures the data we store
- Backend database like MongoDB (back tier - use Mongoose)
  
**All that said, we will concentrate on the front and middle tiers using Joi:**

**This project requires NPM and Node version 18 LTS or above ( https://nodejs.org/en/download )**  
```sh
# To see if you already have Node.js and NPM installed and to check the installed version
node -v
npm -v
```
---

**1. Clone repo**  
```sh
git clone <repository_url>
```


**2. Create .env file in backend root, and included these 2 lines:**
```sh
PORT=5000
URL=Your_username_and_password_mongodb_connection_string
```


**3. For frontend React using Vite, from the root of JoiDemo:**
```sh
cd frontend
npm install      # installs node modules as we don't upload those to Github
npm run dev
# React/Vite server on: http://localhost:5173/
```

 
**4. For backend Express, from the root of JoiDemo:**


```sh
cd backend
npm install
npm start
# Nodemon package listens to changes on server.js on: http://localhost:5000/
```

**5. Test frontend validation:**  
Use the form in the browser and submit invalid input to trigger Joi error messages on the UI.

**6. Test backend validation:**  
Use [Hoppscotch](https://hoppscotch.io/) or Postman to send POST requests with invalid data to the backend:  



