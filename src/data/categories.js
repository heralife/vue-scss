export const categories = [
  {
    id: 'language',
    name: '어학',
    icon: 'globe',
    color: '#2196F3',
    description: '토익, 토플, 영어회화 등 어학 전문 강의',
    subcategories: [
      { id: 'toeic', name: 'TOEIC', slug: 'toeic' },
      { id: 'toefl', name: 'TOEFL', slug: 'toefl' },
      { id: 'english-conversation', name: '영어회화', slug: 'english-conversation' }
    ]
  },
  {
    id: 'certification',
    name: '자격증',
    icon: 'certificate',
    color: '#FF6B00',
    description: '각종 자격증 취득을 위한 전문 강의',
    subcategories: [
      { id: 'computer', name: '컴퓨터활용능력', slug: 'computer' },
      { id: 'accounting', name: '회계자격증', slug: 'accounting' },
      { id: 'realestate', name: '공인중개사', slug: 'realestate' }
    ]
  },
  {
    id: 'employment',
    name: '취업',
    icon: 'briefcase',
    color: '#00A651',
    description: '취업 준비를 위한 맞춤 강의',
    subcategories: [
      { id: 'resume', name: '이력서/자소서', slug: 'resume' },
      { id: 'interview', name: '면접', slug: 'interview' },
      { id: 'ncs', name: 'NCS', slug: 'ncs' }
    ]
  }
]
