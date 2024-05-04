'use server'

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import{ revalidatePath } from "next/cache"
import{ cookies } from "next/headers"

export async function deleteTasks(formData){
    const tasksid = formData.get('id')
    

    const cookiesStore = cookies();

    const supabase = createServerComponentClient({cookies: () => cookiesStore})
    const {data: {session}} = await supabase.auth.getSession();

    const user = session?.user

    if(!user){
        console.error('User is not authenticated within deleteTask server action ')

        return;
    
    }

    const {error} = await supabase
    .from('tasks')
    .delete()
    .match({id: tasksid, user_id: user.id})

    if(error){
        console.error('Error inserting data', error)
        return;
    }

    revalidatePath('tasks-list')

    return{message: 'Success'}


    
}


