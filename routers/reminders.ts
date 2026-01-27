import { Router, Request, Response } from 'express';
import createReminderSchema from '../Dtos/create-reminder.dto';
import Reminder from "../models/reminder";

const router = Router();
let reminders: Reminder[]= [];

router.get('/',(req, res)=>{
    res.json(reminders);
})


router.post('/', (req: Request, res: Response) => {
  const { error } = createReminderSchema.validate(req.body);

    if (error) {
    return res.status(400).json({
        message: error.details?.[0]?.message || 'Validation error'
    });
    }

  res.status(201).json({
    message: 'Reminder created',
    data: req.body
  });
});
  

export default router; 