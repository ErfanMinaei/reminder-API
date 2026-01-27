import Joi from "joi";

const createReminderSchema = Joi.object({
  title: Joi.string().min(3).required()
});

export default createReminderSchema;