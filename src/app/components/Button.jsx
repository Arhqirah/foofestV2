function Button({children, variant = null, onClick = null, randomClass = ""}) {
  return (  
    <button onClick={onClick} className={`w-fit rounded py-2 px-4 text-white bg-${variant} ${randomClass}`}>{children}</button>
  )
}
export default Button;