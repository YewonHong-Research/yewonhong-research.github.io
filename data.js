// 사이트에 표시되는 모든 내용은 이 파일에서 수정해요. (예시 내용이므로 본인 것으로 바꿔 주세요)

const SITE = {
  name: "이름",
  tagline: "연구 분야와 하는 일을 한 줄로 소개해요.",
  about:
    "자기소개를 2~3문장으로 적어요. 어떤 문제에 관심이 있는지, 지금 무엇을 연구하거나 만들고 있는지 알려주세요.",
  links: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "이메일", url: "mailto:you@example.com" }
  ]
};

const PROJECTS = [
  {
    title: "프로젝트 이름 A",
    period: "2025.03 – 2025.08",
    role: "맡은 역할",
    summary: "해결하려던 문제, 내가 한 일, 결과를 두세 문장으로 적어요.",
    link: ""
  },
  {
    title: "프로젝트 이름 B",
    period: "2024.09 – 2025.01",
    role: "맡은 역할",
    summary: "해결하려던 문제, 내가 한 일, 결과를 두세 문장으로 적어요.",
    link: "https://github.com/"
  }
];

// ===== 그래프 데이터 =====
// tier : "core"(핵심, 항상 표시·크게) 또는 "interest"(관심, 켜고 끌 수 있음·작게)
// on   : interest 노드를 처음부터 켜 둘지 (true/false, 생략하면 꺼짐)
// group: 노드 분류. 색은 groups에서 지정해요.
// image: 이미지 경로(예: "images/concept-a.jpg"). 없으면 빈 문자열로 두세요.
// id는 노드마다 달라야 하고, edges의 source/target은 반드시 nodes에 있는 id여야 해요.
const GRAPH = {
  groups: {
    개념: "#2f5bea",
    방법: "#0f8b6d",
    응용: "#c2410c"
  },
  nodes: [
    // --- 핵심 노드 ---
    { id: "core", tier: "core", label: "핵심 개념", group: "개념", image: "",
      description: "연구의 중심이 되는 개념이에요.\n여기에 정의와 왜 중요한지를 적어요." },
    { id: "theory-a", tier: "core", label: "이론 A", group: "개념", image: "",
      description: "핵심 개념을 설명하는 이론 중 하나예요." },
    { id: "theory-b", tier: "core", label: "이론 B", group: "개념", image: "",
      description: "이론 A와 대비되는 관점이에요." },

    // --- 관심 노드 ---
    { id: "a1", tier: "interest", label: "세부 개념 a1", group: "개념", image: "",
      description: "이론 A 안에서 특히 관심 있는 세부 개념이에요." },
    { id: "a2", tier: "interest", label: "세부 개념 a2", group: "개념", image: "",
      description: "이론 A와 연결된 또 다른 세부 개념이에요." },
    { id: "b1", tier: "interest", label: "세부 개념 b1", group: "개념", image: "",
      description: "이론 B에서 나온 세부 개념이에요." },
    { id: "method-x", tier: "interest", on: true, label: "방법 X", group: "방법", image: "",
      description: "이론을 검증하거나 적용할 때 쓰는 방법이에요." },
    { id: "method-y", tier: "interest", label: "방법 Y", group: "방법", image: "",
      description: "방법 X를 보완하는 접근이에요." },
    { id: "method-z", tier: "interest", label: "방법 Z", group: "방법", image: "",
      description: "최근 관심을 갖게 된 방법이에요." },
    { id: "app-1", tier: "interest", label: "응용 사례 1", group: "응용", image: "",
      description: "개념이 실제로 쓰이는 사례예요." },
    { id: "app-2", tier: "interest", label: "응용 사례 2", group: "응용", image: "",
      description: "다른 맥락에서의 사례예요." },
    { id: "app-3", tier: "interest", label: "응용 사례 3", group: "응용", image: "",
      description: "또 다른 분야에서의 사례예요." }
  ],
  edges: [
    { source: "core", target: "theory-a", label: "설명함" },
    { source: "core", target: "theory-b", label: "설명함" },
    { source: "theory-a", target: "theory-b", label: "대비됨" },
    { source: "theory-a", target: "a1", label: "세부 개념" },
    { source: "theory-a", target: "a2", label: "세부 개념" },
    { source: "theory-b", target: "b1", label: "세부 개념" },
    { source: "theory-a", target: "method-x", label: "검증에 사용" },
    { source: "theory-b", target: "method-y", label: "검증에 사용" },
    { source: "method-x", target: "method-y", label: "보완함" },
    { source: "b1", target: "method-z", label: "적용됨" },
    { source: "method-x", target: "app-1", label: "적용됨" },
    { source: "method-y", target: "app-2", label: "적용됨" },
    { source: "method-z", target: "app-3", label: "적용됨" },
    { source: "core", target: "app-1", label: "응용됨" }
  ]
};
