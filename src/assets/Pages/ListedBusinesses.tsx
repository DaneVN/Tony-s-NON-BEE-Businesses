import BusinessCard from "../Elements/BusinessCard";

function ListedBusinesses() {
  return (
    <>
      <div className="w-fit flex justify-between items-center m-4 gap-4 md:flex-row flex-col">
        <div id="sort" className="flex justify-baseline items-center w-full">
          <select
            name="List of businesses Filter"
            id="filter-businesses"
            className="m-4 p-2 rounded-lg bg-(--cl-contrast) w-full"
          >
            <option value="">Filter by</option>
            <option value="engineer">Engineer</option>
          </select>
        </div>
        <div id="sort" className="flex justify-baseline items-center w-full">
          <select
            name="List of businesses Sort"
            id="sort-businesses"
            className="m-4 p-2 rounded-lg bg-(--cl-contrast) w-full"
          >
            <option value="">Sort by</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="date-desc">Date Decsending</option>
            <option value="date-asce">Date Ascending</option>
          </select>
        </div>
      </div>
      <div
        id="placeholder_card"
        className="flex flex-col justify-items-center items-center w-full h-full md:grid md:grid-cols-2 lg:grid-cols-3"
      >
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
        <BusinessCard />
      </div>
    </>
  );
}
export default ListedBusinesses;
