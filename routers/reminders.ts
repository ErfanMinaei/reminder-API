import { Router } from "express";
import CreateRminderDto from "../Dtos/create-reminder";
import Reminder from "../models/reminder";

const router = Router();
let reminders: Reminder[]= [];

router.get('/',(req, res)=>{
    res.json(reminders);
})


router.post('/',(req, res)=>{
    const {title} = req.body as CreateRminderDto;
    const reminder = new Reminder(title);
    reminders.push(reminder);
    res.status(201).json(reminder);
})

export default router; 