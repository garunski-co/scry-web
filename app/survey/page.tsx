import { Card, Title, Text } from "@tremor/react";
import Link from "next/link";

export default async function IndexPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Survey</Title>
      <form>
        <ul className="grid w-full gap-6 md:grid-cols-3">
          <li>
            <input
              type="checkbox"
              id="react-option"
              value=""
              className="hidden peer"
              required={false}
            ></input>
            <label
              htmlFor="react-option"
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">React Js</div>
                <div className="w-full text-sm">
                  A JavaScript library for building user interfaces.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="flowbite-option"
              value=""
              className="hidden peer"
            ></input>
            <label
              htmlFor="flowbite-option"
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">Vue Js</div>
                <div className="w-full text-sm">
                  Vue.js is an model–view front end JavaScript framework.
                </div>
              </div>
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              id="angular-option"
              value=""
              className="hidden peer"
            ></input>
            <label
              htmlFor="angular-option"
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="block">
                <div className="w-full text-lg font-semibold">Angular</div>
                <div className="w-full text-sm">
                  A TypeScript-based web application framework.
                </div>
              </div>
            </label>
          </li>
        </ul>
      </form>
    </main>
  );
}
