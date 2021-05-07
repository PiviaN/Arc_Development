export function getFeatures(questions, setFeatures) {
  if (questions.length > 2) {
    let newFeatures = [];

    questions
      .filter(
        (question) => question.title === "Which features do you expect to use?"
      )
      .map((question) => question.options.filter((option) => option.selected))
      .map((option) =>
        option.map((newFeature) => newFeatures.push(newFeature.title))
      );

    setFeatures(newFeatures);
  }
}

export function getCustomFeatures(questions, setCustomFeatures) {
  if (questions.length > 2) {
    const newCustomFeatures = questions
      .filter(
        (question) =>
          question.title ===
          "What type of custom features do you expect to need?"
      )
      .map((question) =>
        question.options.filter((option) => option.selected)
      )[0][0].title;

    setCustomFeatures(newCustomFeatures);
  }
}
