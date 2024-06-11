export default function Section({children, title = null, customStyle = ""}) {
  return (
    <section className={`flex flex-col min-h-[fit-content] w-full  ${customStyle}`}>
      {title && <h2 className="text-orange">{title}</h2>}
      {children}
    </section>
  )
}