import './topbar.css'
import React ,{useState} from 'react'
function Nav(props) {
  const[focused,setFocused]=useState(false)
  const handleFocus=()=>{
    setFocused(true)
  }
  const { label, id, onChange, errorMessage, ...inputProps } = props
  return (
    <div className="formInput">
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} onBlur ={handleFocus} focused={focused.toString()}></input>
      <span>{errorMessage}</span>
    </div>
  )
}

export default Nav; 