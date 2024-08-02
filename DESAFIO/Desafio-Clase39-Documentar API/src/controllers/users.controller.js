import { userService } from "../services/index.js";
import { logger } from "../logger.js";

export const getUser = async (req, res) => {

    try {
        const {user} = req.user

        const result = await userService.getUser(user._id)

        res.send(result)
    } catch (error) {
        logger.error(error)
    }
    
}