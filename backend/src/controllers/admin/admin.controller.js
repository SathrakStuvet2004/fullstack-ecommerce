import { addDoctor } from "../../services/admin/admin.service.js"
import { errorResponse, successResponse } from "../../utils/response.js"

export const createDoctor = async (req, res) => {

  const doctor = req.body

  try {
    const result = await addDoctor(doctor)

      console.log("result",result);
      return successResponse(res, 200, "doctor created successfully")

  } catch (err) {
    console.log(err)
    if (err instanceof Error) {
      return errorResponse(res, 500, err.message);
    }

    return errorResponse(res, 500, "Something went wrong");

  }
}