function Footer() {
  return (
    <div className="m-4">
      <div className="container mx-auto p-2 bg-white w-[600px] text-slate-700 flex justify-between">
        <div className="antialiased flex flex-col gap-2">
          <h5 className="underline underline-offset-4">Info@devlane.com</h5>
          <p className="text-[8px] font-bold text-slate-500">Srinagar,J&K</p>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-end">
          <div className="flex gap-3">
            <a>
              <img
                src="https://img.icons8.com/?size=100&id=32309&format=png&color=000000"
                width="20px"
              />
            </a>
            <a>
              <img
                src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000"
                width="20px"
              />
            </a>
            <a>
              <img
                src="https://img.icons8.com/?size=100&id=37326&format=png&color=000000"
                width="20px"
              />
            </a>
          </div>

          <p className="text-[10px] md:text-[8px] font-bold text-slate-500">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
