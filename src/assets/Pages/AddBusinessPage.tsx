function AddBusinessPage() {
  return (
    <main>
      <h1 className="text-6xl text-center w-full text-(--cl-light-accent) mt-32">
        <strong>Adding a business</strong>
      </h1>
      <p className="text-2xl text-(--cl-text-dark) w-3/4 mx-auto mt-16">
        To add your business to our list, please follow the steps below:
      </p>
      <ol className="text-2xl text-(--cl-text-dark) w-3/4 mx-auto mt-16">
        <li className="mt-4">
          Prepare the following information about your business:
          <ul className="list-disc list-inside mt-2">
            <li>Business Name</li>
            <li>Contact Email</li>
            <li>Phone Number</li>
            <li>Website URL</li>
            <li>Relevant Keywords (up to 3)</li>
            <li>Logo Image (optional)</li>
          </ul>
        </li>
        <li className="mt-4">
          Send an email to <a href="mailto:">Tony's email</a> with the required
          information.
        </li>
      </ol>
    </main>
  );
}

export default AddBusinessPage;
