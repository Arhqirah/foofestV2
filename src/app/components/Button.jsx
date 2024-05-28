function Button({children, variant = null, onClick = null, randomClass = ""}) {
  return (  
    <button onClick={onClick} className={`w-fit rounded py-2 text-white px-4 bg-${variant} ${randomClass}`}>{children}</button>
  )
}
export default Button;