import React from 'react';
import { useRouteError, Link } from 'react-router-dom';

const ErrorPage = () => {
  let err = useRouteError();
  console.log(err);

  return (
    <>
      <div className="h-screen w-screen bg-gray-100 flex items-center">
        <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
          <div className="max-w-md">
            <div className="text-5xl font-dark font-bold">{err.status}</div>
            <div className="text-2xl font-dark font-bold">{err.statusText}</div>
            <p className="text-2xl md:text-3xl font-light leading-normal">
              {err.data}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>

            <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              <Link to={'/'}> back to homepage </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
