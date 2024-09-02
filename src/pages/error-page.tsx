import * as React from "react";
import { useRouteError } from "react-router-dom";

interface IErrorPageProps {}

const ErrorPage: React.FunctionComponent<IErrorPageProps> = (props) => {
  const error: any = useRouteError();
  console.error(error);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-r from-red-200 to-purple-400 justify-center">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        an unexpected error has occurred.
      </p>
    </main>
  );
};

export default ErrorPage;
