import { Router, Request, Response } from "express";
import Reminder from "../models/reminder";
import createReminderSchema from "../dtos/create-reminder.dto";

const router = Router();

const reminders: Reminder[] = [];

router.post("/", (req: Request, res: Response) => {
  const { error } = createReminderSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0]?.message,
    });
  }

  const reminder = new Reminder(req.body.title);
  reminders.push(reminder);

  res.status(201).json(reminder);
});

router.get("/", (req: Request, res: Response) => {
  res.json(reminders);
});

export default router;
