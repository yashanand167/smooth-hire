import React from "react"
import RegistrationOtpVerification from "@/components/RegistrationOtpVerification"
import Link from "next/link"
import Footer from "@/components/Footer"

const page: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Link href="/" className="text-3xl font-bold">SmoothHire</Link>
        </div>
      </header>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-81 flex-grow">
        <div className="max-w-3xl p-6 mx-auto bg-white shadow-md rounded-lg overflow-hidden">           
            <RegistrationOtpVerification/>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default page