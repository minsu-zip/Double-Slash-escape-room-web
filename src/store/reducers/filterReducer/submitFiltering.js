export function request(draft, data) {
  draft.clickedList = {
    activity: "",
    area: "",
    barrier: "",
    genreId: 0,
    level: 0,
    peopleNum: 0,
    sorting: "",
    themeName: "",
    time: 0,
  };
  draft.filteringResult = "전송 중";
  draft.filteringResult = false;
}

export function success(draft, data) {
  draft.filteringResult = true;
}

export function failure(draft, data) {
  draft.filteringResult = "전송 실패";
  draft.filteringResult = false;
}
