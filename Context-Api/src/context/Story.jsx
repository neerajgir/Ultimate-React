import React, { createContext } from 'react'
export let data = createContext()


const Story = ({children}) => {
    let story = {
        Name: "Kala Kua",
        Author: "Neeraj Goswami",
        Storyline: "A story about man, who search for meaning in life"
    }
  return (
    <div>
        <data.Provider value={story}>
            {children}
        </data.Provider>
    </div>
  )
}

export default Story