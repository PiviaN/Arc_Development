export default function getTotal(questions, setUsers, setTotal) {
  let cost = 0;

  const selections = questions
    .map((question) => question.options.filter((option) => option.selected))
    .filter((question) => question.length > 0);

  selections.map((options) => options.map((option) => (cost += option.cost)));

  if (questions.length > 2) {
    const userCost = questions
      .filter((question) => question.title === "How many users do you expect?")
      .map((question) =>
        question.options.filter((option) => option.selected)
      )[0][0];

    setUsers(userCost.title);

    cost -= userCost.cost;
    cost *= userCost.cost;
  }

  setTotal(cost);
}
