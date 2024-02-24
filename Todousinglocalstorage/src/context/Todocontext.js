import { createContext, useContext } from "react"

export const Todocontext=createContext({todos:[{
    id:1,
    todo:"Todo msg",
    completed:false,
}],
  addtodo:(todo)=>{},
  updatetodo:(id,todo)=>{},
  deletetodo:(id)=>{},
  toggleComplete:(id)=>{}
  })
export const useTodo=()=>{
    return useContext(Todocontext)
}

export const Todoprovider=Todocontext.Provider 