export function request(draft, data) {
  draft.clickedList = [];
  draft.filteringResult = "전송 중";
  draft.filteringSuccess = false;
}

export function success(draft, data) {
  draft.filteringSuccess = true;
}

export function failure(draft, data) {
  draft.filteringResult = "전송 실패";
  draft.filteringSuccess = false;
}
