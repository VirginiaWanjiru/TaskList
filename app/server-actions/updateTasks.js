'use server'

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

import{ revalidatePath } from "next/cache"
import{ cookies } from "next/headers"

export async function updateTasks(formData){
    const id = formData.get('id')
    const title = formData.get('title')
    const description = formData.get('description')
    const referenceNumber = formData.get('referenceNumber')

    const cookiesStore = cookies();

    const supabase = createServerComponentClient({cookies: () => cookiesStore})
    const {data: {session}} = await supabase.auth.getSession();

    const user = session?.user

    if(!user){
        console.error('User is not authenticated within updateTask server action ')

        return;
    
    }

    const {data, error} = await supabase
    .from('tasks')
    .update([{
        title,
        description,
        referenceNumber : referenceNumber,
        user_id:user.id}
    ]).match({id, user_id: user.id})

    if(error){
        console.error('Error inserting data', error)
        return;
    }

    revalidatePath('tasks-list')

    return{message: 'Success'}


    
}


