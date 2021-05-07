export default function getPlatforms(questions, setPlatforms) {
  if (questions.length > 2) {
    let newPlatforms = [];

    questions
      .filter(
        (question) =>
          question.title === "Which platforms do you need supported?"
      )
      .map((question) =>
        question.options.filter((option) => option.selected)
      )[0]
      .map((option) => newPlatforms.push(option.title));

    setPlatforms(newPlatforms);
  }
}
