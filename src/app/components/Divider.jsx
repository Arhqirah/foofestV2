function Divider({customStyle = ""}) {
  return (
    <div className={`relative bg-divider bg-repeat-x w-full h-[200px] ${customStyle}`} style={{backgroundSize: 'auto 200px'}}></div>
  )
}

export default Divider