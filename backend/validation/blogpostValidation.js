import Joi from 'joi';

const blogpostSchema = Joi.object({
  name: Joi.string().trim().min(2).max(50).required(),
  email: Joi.string().trim().email().required(),
  details: Joi.string().trim().min(10).max(400).required(),
});

export default blogpostSchema;