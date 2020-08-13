export default function loadCafes(draft, data) {
  draft.top10Cafes = data.slice(0, 10);
  draft.allCafes = data;
}
