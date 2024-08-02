import userModel from "./models/user.model.js"

export default class UserManager {
    getUser = async (id) => {
        const user = await userModel.findOne({_id: id})
        return user
    } 

}