import { Router, Request, Response } from "express";
import Reminder from "../models/reminder";
import createReminderSchema from "../dtos/create-reminder.dto";
import prisma from "../prisma";

const router = Router();


router.post("/", async (req: Request, res: Response) => {
  const { error } = createReminderSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0]?.message,
    });
  }

  const reminder = await prisma.reminders.create({
    data:{
      title: req.body.title
    }
  });

  res.status(201).json(reminder);
});

router.patch('/:id', async (req: Request, res: Response) => {
  try {
    const reminder = await prisma.reminders.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title: req.body.title,
      },
    });

    res.json(reminder);
  } catch (err: any) {
    console.error('there is an error in assigning', err.message);
    res.status(500).json({ error: 'Update failed' });
  }
});

router.delete('/:id', async(req: Request, res: Response)=>{
  const reminder = await prisma.reminders.delete({
    where: {
      id: Number(req.params.id),
    }
  })
})

router.get("/", async(req: Request, res: Response) => {
  const reminders = await prisma.reminders.findMany();
  res.json(reminders);
});

export default router;
