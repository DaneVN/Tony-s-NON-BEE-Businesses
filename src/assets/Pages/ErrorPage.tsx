function ErrorPage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 className="text-6xl text-center text-(--cl-dark-accent) dark:text-(--cl-light-accent) w-full">
        404 - Page Not Found
      </h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
}

export default ErrorPage;
