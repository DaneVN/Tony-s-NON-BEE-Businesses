function BusinessCard() {
  return (
    <div className="w-80 h-48 bg-(--cl-light-accent) rounded-lg shadow-lg p-4 m-4 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-(--cl-text-dark)">John Doe</h2>
        <p className="text-(--cl-text-dark)">Software Engineer</p>
      </div>
      <div className="flex gap-5 ">
        <a href="mailto:Dane.vN23@gmail.com" className="text-(--cl-text-dark)">
          Email
        </a>
        <a href="tel:0810314325" className="text-(--cl-text-dark)">
          Phone
        </a>
        <a href="https://www.google.com" className="text-(--cl-text-dark)">
          Website
        </a>
      </div>
    </div>
  );
}

export default BusinessCard;
