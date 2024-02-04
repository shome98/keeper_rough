import React, { useState } from "react";

function CreateArea() {
    const [note, updateNote] = useState({
        title: "",
        content:""
    })
    function handleChange(event) {
        const { name, value } = event.target
        updateNote(previousNote => {
            return {
                ...previousNote,
                [name]:value
            }
        })
    }
    function submitNote(event) {
        props.onAdd(note)
        updateNote({
            title: "",
            content:""
        })
        event.preventDefault();
    }
    return (
        <div>
            <form>
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title" />
                <textarea
                    name="content"
                    onChange={handleChange}
                    placeholder="Take a note..."
                    rows="3" />
                <button onClick={submitNote}>Note+</button>
            </form>
        </div>
    )

}
export default CreateArea;