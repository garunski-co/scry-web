import { sampleSize } from "lodash";

async function getPrompt(context: number, trait: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_USER_API}/user_prompts?filter[context][_eq]=${context}&filter[trait_id][_eq]=${trait}&filter[status][_eq]=published&fields[]=text&fields[]=id`,
    { mode: "no-cors" }
  );
  return res.json();
}

async function getWords(trait: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_USER_API}/word_selection?filter[trait_id][_eq]=${trait}&filter[status][_eq]=published&fields[]=text&fields[]=id`,
    { mode: "no-cors" }
  );
  return res.json();
}

export default async (context: number, trait: string) => {
  const promptData = getPrompt(context, trait);
  const wordData = getWords(trait);

  const [prompts, allWords] = await Promise.all([promptData, wordData]);

  return {
    prompt: prompts.data[0],
    words: sampleSize(allWords.data, 12)
  };
};
