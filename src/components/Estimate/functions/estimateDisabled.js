export default function estimateDisabled(questions) {
  let disabled = true;

  const emptySelections = questions
    .map((question) => question.options.filter((option) => option.selected))
    .filter((question) => question.length === 0);

  if (questions.length === 2) {
    if (emptySelections.length === 1) {
      return false;
    }
  } else if (questions.length === 1) {
    return true;
  } else {
    if (
      emptySelections.length < 3 &&
      questions[questions.length - 1].options.filter(
        (option) => option.selected
      ).length > 0
    ) {
      return false;
    }
  }

  return disabled;
}
