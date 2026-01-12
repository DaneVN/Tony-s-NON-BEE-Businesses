import { useEffect, useState } from "react";
import { listedBusinesses } from "../Data.jsx";
import BusinessCard from "../Elements/BusinessCard";

interface Business {
  name: string;
  contactEmail: string;
  phoneNumber: string;
  website: string;
  keywords: string[];
  logoUrl: string;
}

function ListedBusinesses() {
  /* States for filtering and sorting businesses */
  const [filterChosen, setfilterChosen] = useState<string>("");
  const [sortChosen, setSortChosen] = useState<string>("");
  const [filteredBusinesses, setFilteredBusinesses] = useState<Business[]>([]);

  /* Extract unique keywords from listedBusinesses for filter options */
  const filterOptions = listedBusinesses.flatMap(
    (business) => business.keywords
  );
  const uniqueFilterOptions = Array.from(new Set(filterOptions));

  /* Effect to filter businesses based on selected filter */
  useEffect(() => {
    const filteredBusinessesTemp = listedBusinesses.filter((business) => {
      if (!filterChosen || filterChosen === "ALL") {
        return true;
      } else {
        return business.keywords.includes(filterChosen);
      }
    });

    setFilteredBusinesses(filteredBusinessesTemp);
  }, [filterChosen]);

  /* Effect to sort businesses based on selected sort option */
  useEffect(() => {
    const sortedBusinesses = [...filteredBusinesses];
    if (sortChosen === "a-z") {
      sortedBusinesses.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortChosen === "z-a") {
      sortedBusinesses.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      // No sorting applied
      return;
    }
    setFilteredBusinesses(sortedBusinesses);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortChosen]);

  return (
    <>
      <h1 className="text-6xl text-center text-(--cl-dark-accent) dark:text-(--cl-light-accent) w-full mt-32">
        <strong>Listed Businesses</strong>
      </h1>
      <div className="w-fit flex justify-between items-center m-4 gap-4 md:flex-row flex-col">
        <div id="sort" className="flex justify-baseline items-center w-full">
          <select
            name="List of businesses Filter"
            id="filter-businesses"
            className="m-4 p-2 rounded-lg bg-(--cl-contrast) w-full"
            onChange={(e) => setfilterChosen(e.target.value)}
          >
            <option value="ALL">Filter by</option>
            {/* add from keywords in all listedBusinesses data */}
            {uniqueFilterOptions.map((keyword, index) => (
              <option key={index} value={keyword}>
                {keyword}
              </option>
            ))}
          </select>
        </div>
        <div id="sort" className="flex justify-baseline items-center w-full">
          <select
            name="List of businesses Sort"
            id="sort-businesses"
            className="m-4 p-2 rounded-lg bg-(--cl-contrast) w-full"
            onChange={(e) => setSortChosen(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
      </div>
      <div
        id="placeholder_card"
        className="flex flex-col justify-items-center items-center w-full h-full md:grid md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredBusinesses &&
          filteredBusinesses.map((business, index) => (
            <BusinessCard
              key={index}
              name={business.name}
              contactEmail={business.contactEmail}
              phoneNumber={business.phoneNumber}
              website={business.website}
              keywords={business.keywords}
              logoUrl={business.logoUrl}
            />
          ))}
        {!filteredBusinesses && <p>Loading businesses...</p>}
      </div>
    </>
  );
}
export default ListedBusinesses;
