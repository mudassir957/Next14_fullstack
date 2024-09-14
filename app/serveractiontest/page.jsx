import React from 'react'
import { addPost, deletePost } from "@/lib/actions"

const NavigationTest = () => {
    return (
        <div>
            <form style={{ color: "black" }} action={addPost}>
                <input type='text' placeholder='title' name='title' />
                <input type='text' placeholder='desc' name='desc' />
                <input type='text' placeholder='slug' name='slug' />
                <input type='text' placeholder='userId' name='userId' />
                <button style={{ color: "white" }}>Create</button>
            </form>

            <form style={{ color: "black" }} action={deletePost}>
                <input type='text' placeholder='Post Id' name='id' />
                <button style={{ color: "white" }}>Delete</button>
            </form>
        </div>
    )
}

export default NavigationTest
