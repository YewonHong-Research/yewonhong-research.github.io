FIELDS.stats = {
  title: { en: "Statistics & Data Analysis", ko: "통계 / 데이터 분석" },
  blurb: { en: "Inference, modeling and learning from data.", ko: "추론, 모델링, 데이터로부터의 학습을 다뤄요." },
  groups: {
    found: { color: "#2f5bea", name: { en: "Foundations", ko: "기초" } },
    model: { color: "#0f8b6d", name: { en: "Modeling", ko: "모델링" } },
    adv: { color: "#c2410c", name: { en: "Advanced", ko: "심화" } }
  },
  nodes: [
    N("prob", "core", "found", "Probability Theory", "확률론", "Random variables, distributions and limit theorems.", "확률변수, 분포, 극한 정리를 다뤄요."),
    N("infer", "core", "found", "Statistical Inference", "통계적 추론", "Estimation, confidence intervals and hypothesis tests.", "추정, 신뢰구간, 가설검정을 다뤄요."),
    N("reg", "core", "model", "Regression & GLM", "회귀·일반화선형모형", "Modeling an outcome from predictors across response types.", "다양한 반응 변수를 예측 변수로 모델링해요."),
    N("multi", "core", "model", "Multivariate Analysis", "다변량 분석", "PCA, clustering and structure in many variables.", "PCA, 군집분석 등 여러 변수의 구조를 다뤄요."),
    N("bayes", "core", "adv", "Bayesian Statistics", "베이즈 통계", "Updating beliefs with priors and posteriors.", "사전분포와 사후분포로 믿음을 갱신해요."),
    N("ts", "core", "adv", "Time Series & Survival", "시계열·생존분석", "Data ordered in time and time-to-event outcomes.", "시간 순서 데이터와 사건 발생까지의 시간을 다뤄요."),
    N("mcmc", "interest", "adv", "MCMC", "MCMC", "Sampling from posterior distributions.", "사후분포에서 표본을 추출하는 방법이에요."),
    N("mixed", "interest", "model", "Mixed-effects Models", "혼합효과 모형", "Regression with grouped or repeated measurements.", "집단이나 반복 측정이 있는 데이터의 회귀예요."),
    N("fdr", "interest", "found", "Multiple Testing & FDR", "다중검정·FDR", "Controlling errors when testing many hypotheses.", "많은 가설을 동시에 검정할 때 오류를 통제해요.")
  ],
  edges: [
    E("prob", "infer", "underlies", "기반이 됨"), E("infer", "reg", "applied in", "적용됨"),
    E("reg", "multi", "extends to", "확장됨"), E("infer", "bayes", "alternative", "대안"),
    E("reg", "ts", "extends to", "확장됨"), E("bayes", "mcmc", "computed by", "계산 방법"),
    E("reg", "mixed", "extends to", "확장됨"), E("infer", "fdr", "extends to", "확장됨")
  ],
  items: [
    { type: "work", title: { en: "Example analysis", ko: "분석 작업 예시" }, link: "", desc: { en: "Replace with your own work.", ko: "본인의 작업으로 바꿔 주세요." } }
  ]
};
