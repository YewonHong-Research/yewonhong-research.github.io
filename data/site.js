// Shared content (name, home text, About page) + helpers used by the field files.
// Every text is {en:"...", ko:"..."}. English is the default; Korean shows when the toggle is switched.
const SITE = {
  name: "Your Name",
  tagline: { en: "Life sciences, statistics and machine learning.", ko: "생명과학, 통계, 머신러닝을 연구해요." },
  intro: {
    en: "A short introduction to this site: what I study, what I build, and how the three areas connect.",
    ko: "이 사이트에 대한 짧은 소개예요. 무엇을 공부하고 만드는지, 세 분야가 어떻게 연결되는지 적어요."
  },
  links: [{ label: "GitHub", url: "https://github.com/" }, { label: "Email", url: "mailto:you@example.com" }]
};

const ABOUT = {
  interests: [
    { en: "Computational biology", ko: "계산생물학" },
    { en: "Statistical modeling", ko: "통계 모델링" },
    { en: "Machine learning for omics", ko: "오믹스를 위한 머신러닝" }
  ],
  cv: [
    { when: "2023 – Present", title: { en: "Degree / Program", ko: "학위 / 과정" }, org: { en: "Institution", ko: "기관" } }
  ],
  experience: [
    { when: "2024", title: { en: "Role title", ko: "직책" }, org: { en: "Lab or company", ko: "연구실 또는 회사" },
      desc: { en: "What you worked on and what came out of it.", ko: "어떤 일을 했고 어떤 결과가 있었는지 적어요." } }
  ]
};

window.FIELDS = window.FIELDS || {};
// N(id, group, labelEn, labelKo, descEn, descKo, parent)
// parent: id of the node this one hangs off. Leave it out to attach the node directly to the field's center node.
function N(id, group, le, lk, de, dk, parent) {
  return { id: id, group: group, label: { en: le, ko: lk }, description: { en: de, ko: dk }, parent: parent, image: "" };
}
// E(source, target, labelEn, labelKo): an extra link between two topics that are not parent and child.
// Shown as a dashed line (and in "Connected topics") when one of the two is selected.
function E(s, t, le, lk) { return { source: s, target: t, label: { en: le, ko: lk } }; }
