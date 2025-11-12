import Header from "./assets/Elements/Header";

function App() {
  return (
    <>
      <Header />
      <main className="flex justify-items-center items-center w-fit h-full">
        <div>
          <div className="bg-(--cl-primary) p-4">Styled!</div>
          <div className="bg-(--cl-secondary) p-4">Styled!</div>
          <div className="bg-(--cl-light-accent) p-4">Styled!</div>
          <div className="bg-(--cl-dark-accent) p-4">Styled!</div>
          <div className="bg-(--cl-contrast) p-4">Styled!</div>
        </div>
        <div className="text-(--cl-text-dark)">
          <div className="bg-(--cl-primary) p-4">Styled!</div>
          <div className="bg-(--cl-secondary) p-4">Styled!</div>
          <div className="bg-(--cl-light-accent) p-4">Styled!</div>
          <div className="bg-(--cl-dark-accent) p-4">Styled!</div>
          <div className="bg-(--cl-contrast) p-4">Styled!</div>
        </div>
        <div className="text-(--cl-text-light)">
          <div className="bg-(--cl-primary) p-4">Styled!</div>
          <div className="bg-(--cl-secondary) p-4">Styled!</div>
          <div className="bg-(--cl-light-accent) p-4">Styled!</div>
          <div className="bg-(--cl-dark-accent) p-4">Styled!</div>
          <div className="bg-(--cl-contrast) p-4">Styled!</div>
        </div>
      </main>
    </>
  );
}

export default App;
