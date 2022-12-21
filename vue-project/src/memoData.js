function loadMemos() {
  return JSON.parse(localStorage.getItem("memos") || "[]");
}

export default {
  loadMemos,
};
