
import {addTasks} from"../server-actions/addTask";


export default function TasksForm(){
    return (

        <form action = {addTasks} className="mb-6">
        <div className="mb-4">
            <label htmlFor="title" className="block text-white mb-2">Title</label>
            <input 
                type="text"
                id="title"
                name="title"
                className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="description" className="block text-white mb-2">Description</label>
            <input 
                type="text"
                id="description"
                name="description"
                className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
                required
            />
        </div>
        <div className="mb-4">
            <label htmlFor="referenceNumber" className="block text-white mb-2">Reference Number</label>
            <input 
                type="text"
                id="referenceNumber"
                name="referenceNumber"
                className="shadow appearance-none border border-gray-600 bg-gray-700 rounded w-full py-2 px-3 text-white"
            />
        </div>
        <button type="submit" className="bg-gray-600 hover:bg-gray-300 text-white hover:text-black font-bold py-2 px-4 rounded">
            Add Task
        </button>
    </form>     

    )
}