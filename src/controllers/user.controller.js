import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        message: "User Registered Successfully"
    })
})

const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Kya chahiye laude?"
    })
})

export { registerUser,loginUser }