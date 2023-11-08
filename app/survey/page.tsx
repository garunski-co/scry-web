import { Title } from "@tremor/react";
import fetchFacade from "./fetchFacade";

export default async function SurveyPage() {
  const data = await fetchFacade(1, "EXTRAVERSION");

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>{data.prompt.text}</Title>
      <form>
        <ul className="grid w-full gap-6 md:grid-cols-3">
          {data.words.map((word) => (
            <li>
              <input
                type="checkbox"
                id={`${word.text}-option`}
                value=""
                className="hidden peer"
                required={false}
              ></input>
              <label
                htmlFor={`${word.text}-option`}
                className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="block">
                  <div className="w-full text-lg font-semibold">
                    {word.text}
                  </div>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </form>
    </main>
  );
}
