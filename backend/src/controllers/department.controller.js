import { getdepartmentinfo } from "../services/department.service.js"
import { errorResponse, successResponse } from "../utils/response.js"

export const getDepartmentList = async (req, res) => {

  try {
    const departments = await getdepartmentinfo()

    if (departments) {
      return successResponse(res, 200, "Departments fetched successfully", departments)
    }
  }
  catch (err) {
    return errorResponse(res, 500, err.message)
  }
}