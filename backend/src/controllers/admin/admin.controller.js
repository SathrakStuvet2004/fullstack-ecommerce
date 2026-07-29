import { addDoctor } from "../../services/admin/admin.service.js"
import { errorResponse, successResponse } from "../../utils/response.js"

export const createDoctor = async (req, res) => {

  const doctor = req.body

  try {
    const result = await addDoctor(doctor)

    if (result) {
      return successResponse(res, 200, "doctor created successfully")
    }

  } catch (err) {
    console.log(err)
    return errorResponse(res, 500, "something went wrong")
  }
}