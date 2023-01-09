import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <main>
        <h1>Oops!</h1>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}

        <Link to="/">Return Home</Link>
      </main>
    );
  } else {
    return <div>No note found with that ID 😭</div>;
  }
}

export default ErrorPage;
