export function backButtonDisabled(questions) {
  const currentlyActive = questions.filter((question) => question.active);
  const activeId = currentlyActive[0].id;

  if (activeId === 1) {
    return true;
  } else {
    return false;
  }
}

export function forwardButtonDisabled(questions) {
  const currentlyActive = questions.filter((question) => question.active);
  const activeId = currentlyActive[0].id;

  if (activeId === questions[questions.length - 1].id) {
    return true;
  } else {
    return false;
  }
}
