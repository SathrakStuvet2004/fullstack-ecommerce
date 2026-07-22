import { useEffect, useState } from "react";
import { useAuthMe } from "../hoocks/hoock"
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import LoadingSpinner from "../components/LoadingSpinner";


export default function HomePage() {

  const { data, isError, isLoading, isSuccess } = useAuthMe()

  const navigate = useNavigate()

  const [isVerified, setIsVerified] = useState(false)

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

      console.log("inise the success",data.data)

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