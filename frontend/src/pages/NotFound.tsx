import { Link } from "react-router-dom";

const NotFound = () => {

  return (
    <>
      <title>404 Not Found</title>
      <div className="flex h-screen items-center justify-center bg-slate-900 text-white">
        <div className="text-center">
          <h1 className="text-8xl font-bold text-sky-400">404</h1>

          <h2 className="mt-4 text-3xl font-semibold">
            Page Not Found
          </h2>

          <p className="mt-3 text-slate-400">
            Sorry, the page you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="mt-8 inline-block rounded-lg bg-sky-500 px-6 py-3 font-semibold text-slate-900 transition hover:bg-sky-400"
          >
            Back Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;