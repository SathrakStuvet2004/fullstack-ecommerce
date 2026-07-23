import { useEffect, useState } from "react";
import { useAuthMe } from "../hoocks/hoock"
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";
import { useDispatch } from "react-redux";
import { setUser } from "../slice/AuthSlice";
import { notify } from "../utils/toster";


export default function HomePage() {

  const { data, isError, isLoading, isSuccess } = useAuthMe()

  const navigate = useNavigate()

  const [isVerified, setIsVerified] = useState(false)

  const dipatch = useDispatch()

  useEffect(() => {

    if (isLoading) {
      toast.loading("loading...", { toastId: "authme_loading" })
    }

    if (isError || isSuccess) {
      setTimeout(() => {
        toast.done("authme_loading")
      }, 1000)
    }

    if (isError) {
      setTimeout(() => {
        toast.error("please login")

        setTimeout(() => {
          navigate("/login")
        }, 2000)

      }, 1000)
    }

    if (isSuccess) {

      const user = data.data;

      dipatch(setUser(user));

      const role = user.role

      console.log(role)

      switch (role) {
        case "admin":
          notify.success("welcom admin")
          break

        case "doctor":
          notify.success("welcom doctor")
          break

        case "Patient":
          notify.success("welcom Patient")
          break
      }

      setTimeout(() => {
        setIsVerified(true)
      }, 2000)
    }

  }, [isLoading, isSuccess, isError])

  return (
    <>
      {isVerified ?
        (
          <div>
            verified
          </div>

        ) : (
          <div>
            <LoadingSpinner />
          </div>)}
    </>
  )
}