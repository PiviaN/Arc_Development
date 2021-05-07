import { cloneDeep } from "lodash";

import { softwareQuestions, websiteQuestions } from "../../../data/questions";

export default function handleSelect(
  id,
  questions,
  setQuestions,
  setService,
  setPlatforms,
  setFeatures,
  setCustomFeatures,
  setUsers,
  setCategory
) {
  const newQuestions = cloneDeep(questions);

  const currentlyActive = newQuestions.filter((question) => question.active);
  const activeIndex = currentlyActive[0].id - 1;

  const newSelected = newQuestions[activeIndex].options[id - 1];

  const previousSelected = currentlyActive[0].options.filter(
    (option) => option.selected
  );

  switch (currentlyActive[0].subtitle) {
    case "Select one.":
      if (previousSelected[0]) {
        previousSelected[0].selected = !previousSelected[0].selected;
      }
      newSelected.selected = !newSelected.selected;
      break;
    default:
      newSelected.selected = !newSelected.selected;
      break;
  }

  switch (newSelected.title) {
    case "Custom Software Development":
      setQuestions(softwareQuestions);
      setService(newSelected.title);
      setPlatforms([]);
      setFeatures([]);
      setCustomFeatures("");
      setUsers("");
      setCategory("");
      break;
    case "iOS/Android App Development":
      setQuestions(softwareQuestions);
      setService(newSelected.title);
      setPlatforms([]);
      setFeatures([]);
      setCustomFeatures("");
      setUsers("");
      setCategory("");
      break;
    case "Website Development":
      setQuestions(websiteQuestions);
      setService(newSelected.title);
      setPlatforms([]);
      setFeatures([]);
      setCustomFeatures("");
      setUsers("");
      setCategory("");
      break;
    default:
      setQuestions(newQuestions);
      break;
  }
}
