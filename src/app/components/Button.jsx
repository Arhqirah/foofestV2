export default function Button({children, variant = null, onClick = null, randomClass = null}) {
  return (  
    <button onClick={onClick} className={`w-fit rounded py-2 px-4 text-white bg-${variant} ${randomClass}`}>{children}</button>
  )
}