export function Timeline() {
  return (
    <>
      <nav class="border-gray-200 bg-[#fff] dark:bg-gray-800 dark:border-gray-700">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Here's your journey as a scientist
          </span>
          <button
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
            <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li class="flex flex-row items-center">
                <div class="text-white text-[32px] font-bold font-['Inter'] mr-2">
                  📟
                </div>
                <a
                  href="javascript:void(0)"
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Past
                </a>
              </li>
              <li class="flex flex-row items-center">
                <div class="text-white text-[32px] font-bold font-['Inter'] mr-2">
                  ☁️
                </div>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Present
                </a>
              </li>
              <li class="flex flex-row items-center">
                <div class="text-white text-[32px] font-bold font-['Inter'] mr-2">
                  🌠
                </div>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Future
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <p class="border-gray-200 bg-[#fff] dark:bg-gray-800 dark:border-gray-700">
          You are viewing your past
        </p>
      </section>
    </>
  );
}
