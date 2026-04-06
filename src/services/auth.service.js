import User from "../models/User.js"
import { signToken } from "../utils/JWT.js";
import { comparPassword, hashPassword } from "../utils/password.js"



export const createUser = async (data) => {

    const password = await hashPassword(data.password);

    const newUser = await User.create({
        ...data,
        password
    }).select('-password')

    return newUser
}

export const login = async (data) => {
    const user = await findOne({email: data.email}).select('+password')
    
    const vrifyPassword = await comparPassword(data.password, user.password);

    if(!vrifyPassword) {
        return { success: false, message: 'password incorrect' }
    }

    const token = signToken({
        _id: user._id,
        email: user.email,
        role: user.role
    });

    user.password = undefined;

    return { success: true, user, token }
}