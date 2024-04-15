import React,{useRef} from 'react'
import "./style.css"

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void
}
// const InputField:React.FC<Props> = ({todo,setTodo}) => {
const InputField = ({todo,setTodo,handleAdd}:Props) => {
    const inputRef=useRef<HTMLInputElement>(null);


  return (
    <form className='input' onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();      //it will change focus from this
    }}>
      <input ref={inputRef} value={todo} onChange={(e)=>{
        setTodo(e.target.value)
    }} type="input" placeholder='Enter a task' className='input__box'></input>
      <button className='input__submit' type="submit">Go</button>
    </form>
  )
}

export default InputField






