export const Footer = () => {
  return (
    <footer className=" bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full  mx-auto p-4 md:py-8">
        <hr className="my-6 w-full border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
