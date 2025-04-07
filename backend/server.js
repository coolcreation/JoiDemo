import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectToDatabase from "./database.js" 
import blogpost from './routes/blogpost.js'

dotenv.config()  

const PORT = process.env.PORT || 5000
const app = express()
  
app.use(cors())
app.use(express.json())
  
app.use("/blogposts", blogpost)


console.log("########################@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@########################")

// Connect to MongoDB
connectToDatabase()

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
}) 

