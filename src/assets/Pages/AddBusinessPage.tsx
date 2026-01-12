function AddBusinessPage() {
  return (
    <main>
      <h1 className="text-6xl text-center w-full text-(--cl-light-accent) mt-32">
        <strong>Adding a business</strong>
      </h1>
      <p className="text-2xl text-(--cl-text-dark) w-3/4 mx-auto mt-16">
        To add your business to our list, please follow the steps below:
      </p>
      <ol className="text-2xl text-(--cl-text-dark) w-3/4 mx-auto mt-16 list-decimal list-inside">
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
        <li className="mt-4">
          Wait for a confirmation email from Tony. He will review your
          submission and get back to you within 3-5 business days.
        </li>
        <li className="mt-4">
          Once approved, you will be required to make a once-off payment of R450
          via banking information provided in the confirmation email.
        </li>
        <li className="mt-4">
          After payment, your business will be added to our listings and you
          will receive a notification email.
        </li>
      </ol>
      <br />
      <p className="text-2xl text-(--cl-text-dark) w-3/4 mx-auto mt-16 list-decimal list-inside">
        Thank you for choosing to list your business with us.
      </p>
    </main>
  );
}

export default AddBusinessPage;
