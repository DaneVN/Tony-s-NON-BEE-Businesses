import { NavLink } from "react-router-dom";
import WelcomeImage from "../Elements/WelcomeImage";
import { listOptions } from "../Data.tsx";

function Welcome() {
  return (
    <>
      <WelcomeImage />
      <main className="flex justify-items-center items-center w-full h-full text-(--cl-text-dark) flex-col mt-32 mb-8">
        <h3 className="text-4xl font-semibold mx-10">
          <strong>What would you like to do?</strong>
        </h3>
        {/* have the div class styles apply to the children (NavLinks) of the div */}
        <ul className="gap-4 mt-8 text-xl w-3/4" role="list">
          {/* Site navigation options goes here */}
          {listOptions.map((option, index) => (
            <li
              key={index}
              className="w-full odd:text-start even:text-end p-6 border-b-2 border-(--cl-light-accent) text-2xl"
            >
              <NavLink to={option.to}>{option.label}</NavLink>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default Welcome;
