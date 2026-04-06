import { createUser, login } from "../services/auth.service.js"
import { created, forbidden, ok, serverError } from "../utils/apiResponse.js";



export const register = async (req, res) => {
    try {
        const user = await createUser(req.body);

        created(res, user, 'user created successfully')
    }catch(error) {
        serverError(res)
    }
}

export const login = async (req, res) => {
    try {
        const user = await login(req.body);

        if(!user.success) {
            return forbidden(res, user.message)
        }

        ok(res, user)
    }catch(error) {
        serverError(res, error.message)
    }
}