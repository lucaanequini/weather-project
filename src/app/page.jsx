'use client'

import Input from "@/components/Input"
import useVariables from "@/hooks/useVariables"
import Main from "@/components/Main"

export default function Home() {
  const { loading } = useVariables()

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center">
        <Input></Input>
      </div>
    )
  }

  return (
    <Main />
  )
}