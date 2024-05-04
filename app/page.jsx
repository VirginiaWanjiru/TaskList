import AuthForm from "./components/AuthForm"

export default function Home() {
  return (

<div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="container mx-auto p-6 sm:p-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            My TaskList
          </h1>
          <p className="text-lg md:text-xl text-white mb-6">
              My personal space to plan my day 
          </p>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <AuthForm />
          </div>
      </div>
  </div>


  )
    
}
