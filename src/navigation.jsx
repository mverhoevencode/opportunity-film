function Navigation() {
  return (
    <>
      <nav className="fixed top-0 z-10 flex w-full items-center justify-between px-8 py-4">
        <img src="/logo.png" alt="" className="w-24" />
        <ul className="flex gap-x-8">
          <li>
            <a href="javascript:;" className="cursor-pointer hover:opacity-50">
              Over ons
            </a>
          </li>
          <li>
            <a href="javascript:;" className="cursor-pointer hover:opacity-50">
              Portfolio
            </a>
          </li>
          <li>
            <a href="javascript:;" className="cursor-pointer hover:opacity-50">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
