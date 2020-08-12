export default function clickFilterCheckBox(draft, data) {
  if (draft.clickedList.includes(data)) {
    draft.clickedList = draft.clickedList.filter((value) => value !== data);
  } else {
    draft.clickedList.push(data);
  }
}
