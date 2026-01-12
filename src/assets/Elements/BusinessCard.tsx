function BusinessCard(businessData: {
  name: string;
  contactEmail: string;
  phoneNumber: string;
  website: string;
  keywords: string[];
  logoUrl: string;
}) {
  return (
    <div className="w-9/10 h-fit bg-(--cl-light-accent) rounded-lg shadow-lg p-4 m-4 flex flex-col justify-between">
      <div>
        <h2
          id="business-name"
          className="text-2xl font-bold text-(--cl-text-dark)"
        >
          {businessData.name}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div id="business-information" className="flex flex-col gap-5">
          <div
            id="links"
            className="flex gap-2 justify-around items-center h-full"
          >
            <a
              href={`mailto:${businessData.contactEmail}`}
              target="_blank"
              className="w-1/5 text-(--cl-text-dark)"
            >
              <img src="./Email.png" alt="Email link" className="w-full" />
            </a>
            <a
              href={`tel:${businessData.phoneNumber}`}
              className="w-1/6 text-(--cl-text-dark)"
            >
              <img src="./Phone.png" alt="Phone link" className="w-full" />
            </a>
            <a
              href={businessData.website}
              className="w-1/5 text-(--cl-text-dark)"
            >
              <img src="./Code.png" alt="Website link" className="w-full" />
            </a>
          </div>
          <div id="business-keyords" className="flex gap-1 flex-wrap">
            {businessData.keywords
              ? businessData.keywords.map((keyword, index) => (
                  <p key={index} className="keyword text-(--cl-text-dark)">
                    {keyword}
                  </p>
                ))
              : null}
          </div>
        </div>
        <div className="h-full w-4/5 flex justify-start items-start">
          <img
            src={businessData.logoUrl ? businessData.logoUrl : "/bee-icon.png"}
            alt="business logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessCard;
