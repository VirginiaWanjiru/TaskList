import TasksForm from "../components/TasksForm"
import EditTasks  from "../components/EditTasks"
import {cookies} from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { deleteTasks } from "../server-actions/deteleTask";


export default async function TasksList(){


    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore});
    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user;

    const {data: tasks,error} = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', user.id)
    .order('title',{ascending: true})

    if (error){
        console.log('Error')
    }

    console.log({user})


    return(
        <div className="min-h-screen bg-gray-900 text-gray-300">
        <div className="container mx-auto p-6 sm:p-12">
            <div className="flex justify-between items-start">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">Tasks List</h1>
                <form action="/auth/signout" method="post">
                    <button 
                        type="submit" 
                        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign out
                    </button>
                </form>
            </div>
            <TasksForm />
            <div className="mt-6">
                {tasks.map((tasks) => (
                    <div key={tasks.id} className="mb-4 p-4 bg-gray-800 rounded-lg shadow">
                    <h2 className="text-xl text-white mb-2">{tasks.title} - {tasks.description}</h2>
                    <div className="flex space-x-2">
                        <form action={deleteTasks}>
                        <input type="hidden" name="id" value={tasks.id} />
                        <button 
                            type="submit"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                        </form>
                        <EditTasks tasks={tasks} />
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}