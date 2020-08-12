export default function loadThemesSuccess(draft, data) {
  draft.top10Themes = data.slice(0, 10);
  draft.theOthersTheme = data.slice(10, data.length);
}
