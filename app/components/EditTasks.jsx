'use client'


import{useState} from "react"
import {updateTasks} from'../server-actions/updateTasks'


export default function EditTasks({tasks}){

    const[showModal, setShowModal] = useState(false)
    const [formData,setFormData] = useState({

        title: tasks.title,
        description: tasks.description,
        referenceNumber: tasks.reference_Number
    })

    const handleChange = (e) => setFormData ({...formData, [e.target.name]: e.target.value})

    return(


        <div>
        <button onClick={() => setShowModal(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Edit
        </button>
        {showModal && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center px-4">
                <div className="modal-content bg-gray-900 p-6 rounded-lg w-full max-w-md">
                <span className="close text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right" onClick={() => setShowModal(false)}>&times;</span>
                <form action={updateTasks} onSubmit={() => setShowModal(false)} className="mt-4">
                    <input 
                        type="hidden" 
                        name="id" 
                        value={tasks.id} 
                    />
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-300 mb-2">title</label>
                        <input 
                            type="text" 
                            id="title"
                            name="title" 
                            value={formData.title} 
                            onChange={handleChange}
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500" 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-300 mb-2">description</label>
                        <input 
                            type="text" 
                            id="description"
                            name="description" 
                            value={formData.description} 
                            onChange={handleChange} 
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500" 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="referenceNumber" className="block text-gray-300 mb-2">Reference Number</label>
                        <input 
                            type="text" 
                            id="referenceNumber"
                            name="referenceNumber" 
                            value={formData.referenceNumber} 
                            onChange={handleChange} 
                            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500" 
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Update Tasks
                    </button>
                </form>
                </div>
            </div>
        )}
    </div>
    )
}




