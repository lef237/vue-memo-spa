function loadMemos() {
  return JSON.parse(localStorage.getItem("memos") || "[]");
}

function saveMemos(memos) {
  localStorage.setItem("memos", JSON.stringify(memos));
}

export default {
  loadMemos,
  saveMemos,
};
