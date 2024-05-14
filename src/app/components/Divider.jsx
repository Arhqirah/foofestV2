import Image from "next/image";
function Divider() {
  return (
    <div className="bg-repeat-x w-full">
       <Image className="w-full" src={"/assets/img/divider.webp"} alt={"logo"} width={900} height={600}></Image>
    </div>
  )
}

export default Divider