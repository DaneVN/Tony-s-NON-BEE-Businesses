function BusinessCard() {
  return (
    <div className="w-100 h-48 bg-(--cl-light-accent) rounded-lg shadow-lg p-4 m-4 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-(--cl-text-dark)">John Doe</h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col">
          <div className="flex gap-2 justify-around h-full">
            <a
              href="mailto:Dane.vN23@gmail.com"
              className="w-1/6 text-(--cl-text-dark)"
            >
              <img src="./Email.svg" alt="Email link" className="w-full" />
            </a>
            <a href="tel:0810314325" className="w-1/6 text-(--cl-text-dark)">
              <img src="./Phone.svg" alt="Phone link" className="w-full" />
            </a>
            <a
              href="https://www.google.com"
              className="w-1/6 text-(--cl-text-dark)"
            >
              <img src="./Code.svg" alt="Website link" className="w-full" />
            </a>
          </div>
          <div className="flex gap-1 flex-wrap">
            <p className="keyword text-(--cl-text-dark)">software engineer</p>
            <p className="keyword text-(--cl-text-dark)">engineer</p>
            <p className="keyword text-(--cl-text-dark)">programming</p>
          </div>
        </div>
        <div className="h-full w-4/5 flex justify-start items-start">
          <img
            src="/bee-icon.png"
            alt="business logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
