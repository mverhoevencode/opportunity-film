function Footer() {
  return (
    <>
      <footer className="overflow-hidden px-4 py-16 sm:px-8">
        <section className="bg-darkgreen/20 max-w-container relative mx-auto box-border flex flex-col-reverse justify-between gap-16 p-8 lg:flex-row">
          <div className="flex flex-1 flex-col justify-between gap-x-16 gap-y-8 sm:flex-row lg:flex-col">
            <div className="mb-4 text-3xl sm:text-4xl">
              <h2>Klaar om jouw verhaal</h2>
              <h2 className="font-[800]">zichtbaar</h2>
              <h2>te maken?</h2>
            </div>
            <div className="">
              <img
                src="/logo.png"
                alt="opportunity-film-logo"
                className="w-32"
              />
              <div className="flex gap-x-2">
                <div className="bg-darkgreen/20 h-16 w-16 p-4">
                  <div className="h-full w-full bg-white"></div>
                </div>
                <div className="bg-darkgreen/20 h-16 w-16 p-4">
                  <div className="h-full w-full bg-white"></div>
                </div>
                <div className="bg-darkgreen/20 h-16 w-16 p-4">
                  <div className="h-full w-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-x-32 gap-y-8 sm:flex-row">
            <ul className="space-y-4 text-sm">
              <li className="text-lg font-[800]">Navigeren naar</li>
              <li>
                <a href="javascript:;">Over ons</a>
              </li>
              <li>
                <a href="javascript:;">Portfolio</a>
              </li>
              <li>
                <a href="javascript:;">Contact</a>
              </li>
            </ul>
            <ul className="space-y-4 text-sm">
              <li className="text-lg font-[800]">Contact us</li>
              <li>
                <ul className="space-y-1">
                  <li className="font-[800]">Cas Kerssens</li>
                  <li>cas@opportunityfilm.com</li>
                  <li>+31 6 37358266</li>
                </ul>
              </li>
              <li>
                <ul className="space-y-1">
                  <li className="font-[800]">Alex Bijvoet</li>
                  <li>alex@opportunityfilm.com</li>
                  <li>+31 6 37358266</li>
                </ul>
              </li>
              <li>
                <ul className="space-y-1">
                  <li className="font-[800]">Cas Kerssens</li>
                  <li>cas@opportunityfilm.com</li>
                  <li>+31 6 37358266</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="from-darkgreen absolute right-0 bottom-1/2 -z-10 aspect-square w-[600px] translate-x-1/2 translate-y-1/2 bg-radial to-70% opacity-50"></div>
          <div className="from-darkgreen absolute bottom-0 left-0 -z-10 aspect-square w-[600px] -translate-x-1/2 translate-y-1/2 bg-radial to-70% opacity-50"></div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
