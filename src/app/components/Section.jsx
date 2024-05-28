function Section({children, title = null, customStyle = ""}) {
  return (
    <section className={`flex flex-col min-h-[fit-content] max-w-[100rem] gap-y-2 my-4 p-1 sm:p-4 md:p-8 ${customStyle}`}>
      {title && <h2 className="text-orange">{title}</h2>}
      {children}
    </section>
  )
}
export default Section;