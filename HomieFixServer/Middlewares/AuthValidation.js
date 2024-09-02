const Joi = require('joi'); // Joi library for validation

const signupValidation = (req, res, next) => {
    console.log("...");
    const schema = Joi.object({
        name: Joi.string().required(),
        number: Joi.number().min(10).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        console.log("error=", error);
        return res.status(400).json({ message: "BAD REQUEST", error });
    }
    next();
}

const adminSignupValidation = (req, res, next) => {
    console.log("...");
    const schema = Joi.object({
        name: Joi.string().required(),
        number: Joi.number().min(10).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required(),
        city: Joi.string().required(),
        state: Joi.string().required(),
        pincode: Joi.number().min(6).required(),
        dob: Joi.date().required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        console.log("error=", error);
        return res.status(400).json({ message: "BAD REQUEST", error });
    }
    next();
}

const loginValidation = (req, res, next) => { 
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).required(),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: "BAD REQUEST", error });
    }
    next();
}

module.exports = { signupValidation, adminSignupValidation, loginValidation };
