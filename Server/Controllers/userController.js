import User from '../Models/user.Model.js'

export const signUp = async (req, res) => {
    const { username, email, passowrd } = req.body;

    if (!username || !email || !passowrd) {
        return next('All fields are Required..!', 400);
    }

}