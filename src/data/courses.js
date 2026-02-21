export const courses = [
  {
    id: 1,
    title: '해커스 토익 700+ 실전반',
    subtitle: '2개월 만에 토익 700점 돌파하는 전략 강의',
    categoryId: 'toeic',
    parentCategoryId: 'language',
    instructorId: 1,
    color: '#1A2B5F',
    level: '중급',
    duration: 60,
    lectureCount: 48,
    totalHours: 36,
    originalPrice: 259000,
    salePrice: 179000,
    discountRate: 31,
    rating: 4.7,
    reviewCount: 1284,
    enrollmentCount: 5420,
    tags: ['베스트', '할인중'],
    isNew: false,
    isBest: true,
    createdAt: '2025-11-15',
    description: '<h3>강의 소개</h3><p>토익 700점을 목표로 하는 수험생을 위한 실전 대비 강의입니다. LC와 RC 파트를 균형있게 학습하며, 빈출 유형 공략법을 익힙니다.</p><p>매일 실전 문제를 풀고 해설 강의를 통해 실력을 키울 수 있습니다.</p>',
    targetAudience: ['토익 600점대에서 정체된 수험생', '단기간에 점수를 올리고 싶은 직장인', '토익 기본기가 갖춰진 대학생'],
    whatYouLearn: ['LC Part별 핵심 공략법', 'RC 시간 단축 전략', '빈출 어휘 1000개 마스터', '실전 모의고사 10회분 풀이'],
    curriculum: [
      {
        sectionTitle: 'Week 1: LC Part 1 & 2 집중',
        lessons: [
          { id: 101, title: 'Part 1 사진묘사 핵심 패턴', duration: '45:00', isFree: true },
          { id: 102, title: 'Part 2 질의응답 유형 분석', duration: '50:00', isFree: false },
          { id: 103, title: 'Part 1&2 실전 연습', duration: '40:00', isFree: false }
        ]
      },
      {
        sectionTitle: 'Week 2: LC Part 3 & 4 집중',
        lessons: [
          { id: 104, title: 'Part 3 대화문 듣기 전략', duration: '55:00', isFree: false },
          { id: 105, title: 'Part 4 담화문 핵심 포인트', duration: '50:00', isFree: false },
          { id: 106, title: 'Part 3&4 실전 연습', duration: '45:00', isFree: false }
        ]
      },
      {
        sectionTitle: 'Week 3: RC Part 5 & 6',
        lessons: [
          { id: 107, title: 'Part 5 문법 핵심 정리', duration: '60:00', isFree: false },
          { id: 108, title: 'Part 6 빈칸 완성 전략', duration: '45:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 2,
    title: '해커스 토익 900+ 고득점반',
    subtitle: '토익 만점 강사의 900점 돌파 비법',
    categoryId: 'toeic',
    parentCategoryId: 'language',
    instructorId: 1,
    color: '#0F1A3E',
    level: '고급',
    duration: 90,
    lectureCount: 60,
    totalHours: 45,
    originalPrice: 349000,
    salePrice: 249000,
    discountRate: 29,
    rating: 4.9,
    reviewCount: 876,
    enrollmentCount: 3200,
    tags: ['베스트'],
    isNew: false,
    isBest: true,
    createdAt: '2025-10-01',
    description: '<h3>강의 소개</h3><p>토익 900점 이상을 목표로 하는 고급 강의입니다. 고난도 문제 유형을 집중 분석하고, 시간 관리 전략을 익힙니다.</p>',
    targetAudience: ['토익 800점대 이상 수험생', '만점을 목표로 하는 수험생'],
    whatYouLearn: ['고난도 LC 함정 문제 공략', 'RC 파트 7 속독 전략', '실전 모의고사 15회분'],
    curriculum: [
      {
        sectionTitle: 'Week 1: 고급 LC 전략',
        lessons: [
          { id: 201, title: '고난도 Part 3 패러프레이징', duration: '55:00', isFree: true },
          { id: 202, title: 'Part 4 함정 선택지 분석', duration: '50:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 3,
    title: '토익 입문 기초반',
    subtitle: '토익 처음 시작하는 분을 위한 기초 강의',
    categoryId: 'toeic',
    parentCategoryId: 'language',
    instructorId: 1,
    color: '#4A90D9',
    level: '입문',
    duration: 30,
    lectureCount: 24,
    totalHours: 18,
    originalPrice: 149000,
    salePrice: 99000,
    discountRate: 34,
    rating: 4.6,
    reviewCount: 2100,
    enrollmentCount: 8500,
    tags: ['할인중'],
    isNew: false,
    isBest: false,
    createdAt: '2025-12-01',
    description: '<h3>강의 소개</h3><p>영어 기초부터 탄탄하게! 토익을 처음 시작하는 분들을 위한 입문 강의입니다.</p>',
    targetAudience: ['토익을 처음 준비하는 분', '영어 기초가 부족한 분'],
    whatYouLearn: ['토익 시험 구조 이해', '기본 문법 정리', '필수 어휘 500개'],
    curriculum: [
      {
        sectionTitle: 'Week 1: 토익 시작하기',
        lessons: [
          { id: 301, title: '토익 시험 소개와 전략', duration: '30:00', isFree: true },
          { id: 302, title: '기초 문법 총정리', duration: '45:00', isFree: true }
        ]
      }
    ]
  },
  {
    id: 4,
    title: '해커스 토플 iBT 80+ 종합반',
    subtitle: '토플 80점 달성을 위한 4영역 종합 강의',
    categoryId: 'toefl',
    parentCategoryId: 'language',
    instructorId: 2,
    color: '#E31837',
    level: '중급',
    duration: 90,
    lectureCount: 72,
    totalHours: 54,
    originalPrice: 399000,
    salePrice: 299000,
    discountRate: 25,
    rating: 4.8,
    reviewCount: 543,
    enrollmentCount: 2100,
    tags: ['베스트'],
    isNew: false,
    isBest: true,
    createdAt: '2025-09-15',
    description: '<h3>강의 소개</h3><p>토플 iBT 80점을 목표로 Reading, Listening, Speaking, Writing 4영역을 종합적으로 학습합니다.</p>',
    targetAudience: ['해외 유학을 준비하는 학생', '토플 점수가 필요한 직장인'],
    whatYouLearn: ['Reading 지문 분석법', 'Listening 노트테이킹', 'Speaking 템플릿', 'Writing 에세이 구조'],
    curriculum: [
      {
        sectionTitle: 'Week 1: Reading Fundamentals',
        lessons: [
          { id: 401, title: 'Reading 지문 유형 분석', duration: '60:00', isFree: true },
          { id: 402, title: '어휘 문제 공략법', duration: '45:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 5,
    title: '토플 Speaking 집중반',
    subtitle: 'Speaking 영역 고득점 전략',
    categoryId: 'toefl',
    parentCategoryId: 'language',
    instructorId: 2,
    color: '#C41230',
    level: '중급',
    duration: 60,
    lectureCount: 36,
    totalHours: 27,
    originalPrice: 249000,
    salePrice: 189000,
    discountRate: 24,
    rating: 4.7,
    reviewCount: 328,
    enrollmentCount: 1500,
    tags: [],
    isNew: true,
    isBest: false,
    createdAt: '2026-01-10',
    description: '<h3>강의 소개</h3><p>토플 Speaking 영역에 특화된 집중 강의입니다. 답변 템플릿과 실전 연습으로 자신감을 키웁니다.</p>',
    targetAudience: ['Speaking 점수가 낮은 수험생', '답변 구조화가 어려운 분'],
    whatYouLearn: ['Independent 답변 템플릿', 'Integrated 노트테이킹', '발음/유창성 교정'],
    curriculum: [
      {
        sectionTitle: 'Week 1: Speaking 기본 구조',
        lessons: [
          { id: 501, title: 'Independent Task 답변법', duration: '50:00', isFree: true },
          { id: 502, title: 'Integrated Task 전략', duration: '55:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 6,
    title: '왕초보 영어회화 탈출',
    subtitle: '30일 만에 기초 회화 마스터',
    categoryId: 'english-conversation',
    parentCategoryId: 'language',
    instructorId: 3,
    color: '#FF6B00',
    level: '입문',
    duration: 30,
    lectureCount: 30,
    totalHours: 15,
    originalPrice: 129000,
    salePrice: 79000,
    discountRate: 39,
    rating: 4.8,
    reviewCount: 3200,
    enrollmentCount: 12000,
    tags: ['베스트', '할인중'],
    isNew: false,
    isBest: true,
    createdAt: '2025-08-01',
    description: '<h3>강의 소개</h3><p>영어가 두려운 왕초보를 위한 강의! 매일 하나의 패턴을 배우고 실전 대화를 연습합니다.</p>',
    targetAudience: ['영어 회화를 처음 시작하는 분', '해외여행 전 기초 회화가 필요한 분'],
    whatYouLearn: ['일상 영어 패턴 30개', '여행 영어 필수 표현', '발음 기초 교정'],
    curriculum: [
      {
        sectionTitle: 'Week 1: 인사와 자기소개',
        lessons: [
          { id: 601, title: '첫 만남 인사 표현', duration: '25:00', isFree: true },
          { id: 602, title: '자기소개 패턴', duration: '25:00', isFree: true },
          { id: 603, title: '일상 안부 묻기', duration: '25:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 7,
    title: '비즈니스 영어회화',
    subtitle: '직장인을 위한 실무 영어 표현',
    categoryId: 'english-conversation',
    parentCategoryId: 'language',
    instructorId: 3,
    color: '#D45A00',
    level: '중급',
    duration: 60,
    lectureCount: 40,
    totalHours: 30,
    originalPrice: 279000,
    salePrice: 199000,
    discountRate: 29,
    rating: 4.6,
    reviewCount: 890,
    enrollmentCount: 4200,
    tags: [],
    isNew: true,
    isBest: false,
    createdAt: '2026-01-20',
    description: '<h3>강의 소개</h3><p>회의, 프레젠테이션, 이메일 등 직장에서 바로 쓸 수 있는 비즈니스 영어를 배웁니다.</p>',
    targetAudience: ['영어를 사용하는 직장인', '외국계 기업 취업 준비생'],
    whatYouLearn: ['비즈니스 이메일 작성법', '회의/프레젠테이션 영어', '전화 영어 표현'],
    curriculum: [
      {
        sectionTitle: 'Week 1: 비즈니스 기본 표현',
        lessons: [
          { id: 701, title: '업무 이메일 핵심 표현', duration: '35:00', isFree: true },
          { id: 702, title: '전화 응대 영어', duration: '30:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 8,
    title: '컴퓨터활용능력 1급 실기 완성',
    subtitle: '엑셀+액세스 실기 완벽 대비',
    categoryId: 'computer',
    parentCategoryId: 'certification',
    instructorId: 4,
    color: '#2196F3',
    level: '중급',
    duration: 60,
    lectureCount: 45,
    totalHours: 35,
    originalPrice: 199000,
    salePrice: 149000,
    discountRate: 25,
    rating: 4.8,
    reviewCount: 1560,
    enrollmentCount: 6800,
    tags: ['베스트'],
    isNew: false,
    isBest: true,
    createdAt: '2025-10-20',
    description: '<h3>강의 소개</h3><p>컴퓨터활용능력 1급 실기 시험을 완벽하게 대비하는 강의입니다. 엑셀과 액세스 실습 위주로 진행됩니다.</p>',
    targetAudience: ['컴활 1급 자격증이 필요한 취준생', '사무직 역량을 키우고 싶은 직장인'],
    whatYouLearn: ['엑셀 함수 마스터', '매크로/VBA 기초', '액세스 쿼리 작성'],
    curriculum: [
      {
        sectionTitle: 'Part 1: 엑셀 기본',
        lessons: [
          { id: 801, title: '필수 함수 20선', duration: '50:00', isFree: true },
          { id: 802, title: '피벗테이블 완벽 정리', duration: '45:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 9,
    title: '컴퓨터활용능력 2급 단기완성',
    subtitle: '2주 만에 합격하는 컴활 2급',
    categoryId: 'computer',
    parentCategoryId: 'certification',
    instructorId: 4,
    color: '#1976D2',
    level: '초급',
    duration: 14,
    lectureCount: 20,
    totalHours: 15,
    originalPrice: 99000,
    salePrice: 69000,
    discountRate: 30,
    rating: 4.5,
    reviewCount: 2300,
    enrollmentCount: 9500,
    tags: ['할인중'],
    isNew: false,
    isBest: false,
    createdAt: '2025-11-05',
    description: '<h3>강의 소개</h3><p>컴활 2급을 빠르게 취득할 수 있는 단기 집중 과정입니다.</p>',
    targetAudience: ['빠르게 자격증이 필요한 분', '엑셀 기초를 배우고 싶은 분'],
    whatYouLearn: ['엑셀 기본 함수', '필기 핵심 요약', '실기 기출 풀이'],
    curriculum: [
      {
        sectionTitle: 'Part 1: 필기 대비',
        lessons: [
          { id: 901, title: '필기 핵심 요약 1회', duration: '40:00', isFree: true }
        ]
      }
    ]
  },
  {
    id: 10,
    title: 'NCS 직업기초능력 완전정복',
    subtitle: '공기업 NCS 시험 대비 종합강의',
    categoryId: 'ncs',
    parentCategoryId: 'employment',
    instructorId: 5,
    color: '#00A651',
    level: '중급',
    duration: 60,
    lectureCount: 50,
    totalHours: 40,
    originalPrice: 299000,
    salePrice: 219000,
    discountRate: 27,
    rating: 4.7,
    reviewCount: 920,
    enrollmentCount: 3800,
    tags: ['베스트'],
    isNew: false,
    isBest: true,
    createdAt: '2025-09-01',
    description: '<h3>강의 소개</h3><p>공기업 취업에 필수인 NCS 직업기초능력평가를 체계적으로 준비합니다. 의사소통, 수리, 문제해결 등 10개 영역 완벽 대비.</p>',
    targetAudience: ['공기업 취업을 준비하는 취준생', 'NCS 시험이 처음인 분'],
    whatYouLearn: ['NCS 10개 영역 핵심 정리', '유형별 풀이 전략', '실전 모의고사 5회'],
    curriculum: [
      {
        sectionTitle: 'Part 1: 의사소통능력',
        lessons: [
          { id: 1001, title: '의사소통능력 유형 분석', duration: '50:00', isFree: true },
          { id: 1002, title: '문서이해/작성 실전', duration: '45:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 11,
    title: '면접 완벽 대비 마스터',
    subtitle: '대기업 면접관 출신의 실전 면접 코칭',
    categoryId: 'interview',
    parentCategoryId: 'employment',
    instructorId: 5,
    color: '#008C46',
    level: '중급',
    duration: 30,
    lectureCount: 25,
    totalHours: 20,
    originalPrice: 199000,
    salePrice: 159000,
    discountRate: 20,
    rating: 4.9,
    reviewCount: 670,
    enrollmentCount: 2800,
    tags: [],
    isNew: true,
    isBest: false,
    createdAt: '2026-02-01',
    description: '<h3>강의 소개</h3><p>면접의 모든 것! 1분 자기소개부터 압박 면접까지, 실전 면접을 완벽하게 준비합니다.</p>',
    targetAudience: ['면접이 두려운 취준생', '이직을 준비하는 직장인'],
    whatYouLearn: ['1분 자기소개 작성법', '인성/직무 면접 대비', '압박 면접 대처법'],
    curriculum: [
      {
        sectionTitle: 'Part 1: 면접 기본',
        lessons: [
          { id: 1101, title: '면접의 종류와 준비법', duration: '40:00', isFree: true },
          { id: 1102, title: '1분 자기소개 만들기', duration: '35:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 12,
    title: '자기소개서 작성 완벽 가이드',
    subtitle: '합격하는 자소서의 비밀',
    categoryId: 'resume',
    parentCategoryId: 'employment',
    instructorId: 5,
    color: '#006B35',
    level: '초급',
    duration: 14,
    lectureCount: 15,
    totalHours: 10,
    originalPrice: 129000,
    salePrice: 89000,
    discountRate: 31,
    rating: 4.6,
    reviewCount: 1450,
    enrollmentCount: 5600,
    tags: ['할인중'],
    isNew: false,
    isBest: false,
    createdAt: '2025-12-15',
    description: '<h3>강의 소개</h3><p>서류 합격률을 높이는 자기소개서 작성 노하우를 배웁니다. 실제 합격 자소서 분석과 첨삭 피드백.</p>',
    targetAudience: ['자소서 쓰기가 막막한 취준생', '서류 탈락이 반복되는 분'],
    whatYouLearn: ['자소서 항목별 작성법', '합격 자소서 분석', '직무 역량 어필법'],
    curriculum: [
      {
        sectionTitle: 'Part 1: 자소서 기본',
        lessons: [
          { id: 1201, title: '자소서란 무엇인가', duration: '30:00', isFree: true },
          { id: 1202, title: '지원동기 작성법', duration: '35:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 13,
    title: '전산회계 1급 종합반',
    subtitle: '한국세무사회 전산회계 1급 합격 보장',
    categoryId: 'accounting',
    parentCategoryId: 'certification',
    instructorId: 6,
    color: '#9C27B0',
    level: '중급',
    duration: 60,
    lectureCount: 40,
    totalHours: 32,
    originalPrice: 229000,
    salePrice: 169000,
    discountRate: 26,
    rating: 4.7,
    reviewCount: 780,
    enrollmentCount: 3200,
    tags: [],
    isNew: false,
    isBest: false,
    createdAt: '2025-10-10',
    description: '<h3>강의 소개</h3><p>전산회계 1급 시험을 체계적으로 준비하는 종합 강의입니다. 이론과 실무를 동시에 학습합니다.</p>',
    targetAudience: ['회계 자격증이 필요한 취준생', '경리/회계 업무 종사자'],
    whatYouLearn: ['회계 원리 기초', '분개와 전표 처리', '재무제표 작성'],
    curriculum: [
      {
        sectionTitle: 'Part 1: 회계 원리',
        lessons: [
          { id: 1301, title: '회계의 기본 개념', duration: '45:00', isFree: true },
          { id: 1302, title: '계정과목 이해', duration: '40:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 14,
    title: '공인중개사 1차 기본이론',
    subtitle: '부동산학개론 + 민법 기초',
    categoryId: 'realestate',
    parentCategoryId: 'certification',
    instructorId: 6,
    color: '#7B1FA2',
    level: '초급',
    duration: 90,
    lectureCount: 60,
    totalHours: 48,
    originalPrice: 349000,
    salePrice: 259000,
    discountRate: 26,
    rating: 4.5,
    reviewCount: 420,
    enrollmentCount: 1800,
    tags: [],
    isNew: true,
    isBest: false,
    createdAt: '2026-01-05',
    description: '<h3>강의 소개</h3><p>공인중개사 1차 시험 대비 기본이론 강의입니다. 부동산학개론과 민법을 기초부터 학습합니다.</p>',
    targetAudience: ['공인중개사 시험을 준비하는 분', '부동산에 관심있는 직장인'],
    whatYouLearn: ['부동산학개론 핵심 이론', '민법 총칙 정리', '기출 유형 분석'],
    curriculum: [
      {
        sectionTitle: 'Part 1: 부동산학개론',
        lessons: [
          { id: 1401, title: '부동산의 개념과 특성', duration: '50:00', isFree: true },
          { id: 1402, title: '부동산 시장론', duration: '55:00', isFree: false }
        ]
      }
    ]
  },
  {
    id: 15,
    title: '해커스 토익 LC 집중반',
    subtitle: 'LC 파트만 집중 공략',
    categoryId: 'toeic',
    parentCategoryId: 'language',
    instructorId: 1,
    color: '#2A4080',
    level: '중급',
    duration: 30,
    lectureCount: 24,
    totalHours: 18,
    originalPrice: 179000,
    salePrice: 129000,
    discountRate: 28,
    rating: 4.6,
    reviewCount: 650,
    enrollmentCount: 2800,
    tags: ['할인중'],
    isNew: false,
    isBest: false,
    createdAt: '2025-11-20',
    description: '<h3>강의 소개</h3><p>토익 LC 파트만 집중적으로 학습하는 강의입니다. 듣기 실력을 빠르게 향상시킵니다.</p>',
    targetAudience: ['LC 점수가 낮은 수험생', '듣기에 자신이 없는 분'],
    whatYouLearn: ['Part 1~4 유형별 전략', '딕테이션 훈련', '속도별 듣기 연습'],
    curriculum: [
      {
        sectionTitle: 'Week 1: LC 기초 다지기',
        lessons: [
          { id: 1501, title: '영어 발음 규칙 이해', duration: '40:00', isFree: true }
        ]
      }
    ]
  }
]
