FIELDS.life = {
  title: { en: "Life Sciences", ko: "생명과학" },
  blurb: { en: "Molecules, cells, genomes and systems.", ko: "분자, 세포, 유전체, 시스템을 다뤄요." },
  groups: {
    cell: { color: "#0f8b6d", name: { en: "Molecular & cellular", ko: "분자·세포" } },
    gen: { color: "#2f5bea", name: { en: "Genetics & genomics", ko: "유전학·유전체학" } },
    sys: { color: "#c2410c", name: { en: "Systems", ko: "시스템" } }
  },
  nodes: [
    N("molbio", "cell", "Molecular Biology", "분자생물학", "How DNA, RNA and proteins store and express information.", "DNA, RNA, 단백질이 정보를 저장하고 발현하는 방식을 다뤄요."),
    N("cellbio", "cell", "Cell Biology", "세포생물학", "Cell structure, signaling, division and death.", "세포의 구조, 신호전달, 분열, 사멸을 다뤄요."),
    N("biochem", "cell", "Biochemistry", "생화학", "The chemistry of biomolecules and metabolism.", "생체분자의 화학과 대사를 다뤄요."),
    N("genetics", "gen", "Genetics", "유전학", "Inheritance, variation and gene function.", "유전, 변이, 유전자 기능을 다뤄요."),
    N("genomics", "gen", "Genomics", "유전체학", "Large-scale study of genomes and their regulation.", "게놈과 그 조절을 대규모로 연구해요."),
    N("sysbio", "sys", "Systems Biology", "시스템생물학", "Modeling biological networks as integrated systems.", "생물학적 네트워크를 통합된 시스템으로 모델링해요."),
    N("scrna", "gen", "Single-cell RNA-seq", "단일세포 RNA 시퀀싱", "Measures gene expression in individual cells.", "개별 세포의 유전자 발현을 측정해요.", "genomics"),
    N("crispr", "cell", "CRISPR Gene Editing", "CRISPR 유전자 편집", "Programmable editing of DNA sequences.", "DNA 서열을 원하는 대로 편집하는 기술이에요.", "genetics"),
    N("neuro", "sys", "Neuroscience", "신경과학", "How nervous systems process information.", "신경계가 정보를 처리하는 방식을 다뤄요.", "cellbio")
  ],
  edges: [
    E("molbio", "cellbio", "underlies", "기반이 됨"), E("molbio", "biochem", "overlaps", "겹침"),
    E("molbio", "genetics", "underlies", "기반이 됨"), E("genetics", "genomics", "scales up to", "확장됨"),
    E("genomics", "sysbio", "feeds", "입력이 됨"), E("cellbio", "sysbio", "feeds", "입력이 됨"),
    E("genomics", "scrna", "technique", "기술"), E("genetics", "crispr", "tool", "도구"), E("cellbio", "neuro", "extends to", "확장됨")
  ],
  // type: "work" | "study" | "output". Add your own entries here.
  items: [
    { type: "study", title: { en: "Example study note", ko: "공부 노트 예시" }, link: "", desc: { en: "Replace with your own note.", ko: "본인의 노트로 바꿔 주세요." } }
  ]
};
