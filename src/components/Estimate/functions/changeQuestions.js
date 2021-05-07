import { cloneDeep } from "lodash";

export function previousQuestion(questions, setQuestions) {
  const newQuestions = cloneDeep(questions);

  const currentlyActive = newQuestions.filter((question) => question.active);
  const activeIndex = currentlyActive[0].id - 1;
  const nextIndex = activeIndex - 1;

  newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
  newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

  setQuestions(newQuestions);
}

export function nextQuestion(questions, setQuestions) {
  const newQuestions = cloneDeep(questions);

  const currentlyActive = newQuestions.filter((question) => question.active);
  const activeIndex = currentlyActive[0].id - 1;
  const nextIndex = activeIndex + 1;

  newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
  newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

  setQuestions(newQuestions);
}
