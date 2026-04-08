import { Suppliers } from "../models/Supplier.js"
import { forbidden, notFound } from "../utils/apiResponse.js";
import Users from "../models/User.js";

// supllier

export const supllierExist = async (req, res, next) => {
    const supplier = await Suppliers.findOne(req.body);

    if(supplier) {
        return forbidden(res, 'supplier is alrady exist')
    }

    next()
}


// auth

export const userAlradyrExist = async (req, res, next) => {
    const user = await Users.findOne(req.body);

    if(user) {
        return forbidden(res, 'user is alrady exist')
    }

    next()
}

export const userExist = async (req, res, next) => {
    const user = await Users.findOne({email: req.body.email});

    if(!user) {
        return notFound(res, 'user not Found')
    }

    next() 
}


// globale error

class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = String(statusCode).startsWith('4') ? 'fail' : 'error';
        Error.captureStackTrace(this, this.constructor)
    }
}


export { AppError }