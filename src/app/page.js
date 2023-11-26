
"use client"
import { useContext } from "react"
import { Authentication } from "./hooks"
import AuthNavigator from "./authcontainer/page"

const page = () => {
  const {userDetails,userState}=useContext(Authentication)

  return (
    <>
      {userState?(<h1>User is there</h1>):(<AuthNavigator />)}
    </>
  )
}

export default page