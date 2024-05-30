
function Header({customStyle = null}) {
  return (
    <header className={`aspect-video w-full h-[max(100px,350px)] bg-header bg-fill bg-no-repeat bg-top mix-blend-hard-light ${customStyle} z-40`}>
    </header>
  );
}

export default Header;
