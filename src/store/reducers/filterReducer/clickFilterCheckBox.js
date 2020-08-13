export const genre = {
  드라마: 1,
  아케이드: 2,
  판타지: 3,
  감성: 4,
  코미디: 5,
  모험: 6,
  스릴러: 7,
  음악: 8,
  야외: 9,
  추리: 10,
  미스터리: 11,
  연애: 12,
  미션: 13,
  잠입: 14,
  역사: 15,
  SF: 16,
  성인: 18,
};

export default function clickFilterCheckBox(draft, data) {
  const { category, name } = data;
  if (draft.clickedList[category] === name) {
    draft.clickedList[category] =
      typeof draft.clickedList[category] === "string" ? "" : 0;
  } else {
    draft.clickedList[category] = category === "genre" ? genre[name] : name;
  }
}
