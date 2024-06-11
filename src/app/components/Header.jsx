
function Header({customStyle = null}) {
  return (
    <header className={`relative w-full h-[max(20rem,10dvh)] bg-header bg-fill bg-no-repeat bg-top z-10 ${customStyle}`}>
    </header>
  );
}

export default Header;
