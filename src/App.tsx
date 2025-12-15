import Footer from "./assets/Elements/Footer";
import Header from "./assets/Elements/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="mt-20 mb-0 min-h-[calc(100vh-3rem)]">
        {/* Top Margin of the div element should be the same as the height of the header element */}
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
