FIELDS.ai = {
  title: { en: "AI / ML", ko: "AI / ML" },
  blurb: { en: "Models that learn from data.", ko: "데이터로부터 학습하는 모델을 다뤄요." },
  groups: {
    classic: { color: "#0f8b6d", name: { en: "Classical ML", ko: "고전 머신러닝" } },
    deep: { color: "#2f5bea", name: { en: "Deep learning", ko: "딥러닝" } },
    apps: { color: "#c2410c", name: { en: "Applications", ko: "응용" } }
  },
  nodes: [
    N("sup", "core", "classic", "Supervised Learning", "지도학습", "Learning a mapping from labeled examples.", "라벨이 있는 예시로 입력과 출력의 관계를 학습해요."),
    N("unsup", "core", "classic", "Unsupervised Learning", "비지도학습", "Finding structure without labels.", "라벨 없이 데이터의 구조를 찾아요."),
    N("dl", "core", "deep", "Deep Learning", "딥러닝", "Multi-layer neural networks trained end to end.", "여러 층의 신경망을 end-to-end로 학습해요."),
    N("rl", "core", "deep", "Reinforcement Learning", "강화학습", "Learning actions from reward signals.", "보상 신호로부터 행동을 학습해요."),
    N("nlp", "core", "apps", "Natural Language Processing", "자연어 처리", "Models for text and language.", "텍스트와 언어를 다루는 모델이에요."),
    N("cv", "core", "apps", "Computer Vision", "컴퓨터 비전", "Models for images and video.", "이미지와 영상을 다루는 모델이에요."),
    N("trans", "interest", "deep", "Transformers", "트랜스포머", "Attention-based architecture behind modern language models.", "현대 언어 모델의 바탕이 되는 어텐션 기반 구조예요."),
    N("genm", "interest", "deep", "Generative Models", "생성 모델", "Models that produce new data such as text or images.", "텍스트나 이미지 같은 새 데이터를 만드는 모델이에요."),
    N("bioml", "interest", "apps", "ML for Biology", "생물학을 위한 ML", "Applying learning methods to omics and imaging data.", "오믹스와 영상 데이터에 학습 방법을 적용해요.")
  ],
  edges: [
    E("sup", "dl", "extends to", "확장됨"), E("unsup", "dl", "extends to", "확장됨"),
    E("dl", "nlp", "powers", "바탕이 됨"), E("dl", "cv", "powers", "바탕이 됨"),
    E("rl", "dl", "uses", "활용함"), E("dl", "trans", "architecture", "구조"),
    E("trans", "genm", "enables", "가능하게 함"), E("sup", "bioml", "applied to", "적용됨"), E("unsup", "bioml", "applied to", "적용됨")
  ],
  items: [
    { type: "output", title: { en: "Example project", ko: "결과물 예시" }, link: "", desc: { en: "Replace with something you built.", ko: "직접 만든 것으로 바꿔 주세요." } }
  ]
};
