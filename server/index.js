import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import fs from 'fs';


import Connection from "./connection/db.js";
import { fileURLToPath } from "url";
import box from "./Modal/Data..js";
import UserData from "./Modal/User.js";





const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());



dotenv.config();

const PORT = process.env.PORT || 8800;

const url = process.env.URL;

Connection(url);


app.get('/get-boxes', async (req, res) => {
  try {
    
    const main_type = req.query.main_type;
    const sub_type = req.query.sub_type;

    console.log(main_type,sub_type);
    const boxes = await box.find({main_type:main_type,sub_type:sub_type});

    const updatedBoxes = boxes.map((boxItem) => ({
      ...boxItem,
      img: `http://localhost:8000/uploads/${boxItem.img}`, // Update the image URL
    }));


    res.json({ message: 'Box updated successfully', data: updatedBoxes });
  } catch (error) {
    console.error('Error updating dish:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/add-user', async (req, res) => {
  try {
    const { name, email, msg } = req.body;
    const user = new UserData({ name, email, msg });
    await user.save();
    res.status(201).json({ message: 'Message added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while adding the user' });
  }
});

// Define a route to get all users
app.get('/get-all-users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
});

app.listen(PORT, () =>
  console.log(`Server is running successfully on PORT ${PORT}`)
);
