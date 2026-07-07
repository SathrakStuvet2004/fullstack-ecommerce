import { useEffect } from "react";
import { useVerify } from "../hoocks/hoock"
import { useSearchParams } from "react-router-dom";

export default function Verification() {

  const [searchParams] = useSearchParams();

  const token = searchParams.get("token");

  console.log(token);

  const { mutate: verifyUser } = useVerify()

  useEffect(() => {
    verifyUser({ token })
  }, [token])

  return (
    <>
      <div>
        <p>Verification Page</p>
      </div>
    </>
  )
}
