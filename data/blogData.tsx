export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  summary: string;
  content: string[]; // Array of paragraphs
  featuredImage: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
}

export const blogData: BlogPost[] = [
  {
    id: 1,
    slug: 'navigating-your-first-trimester',
    title: 'Navigating Your First Trimester: A Guide for Expectant Mothers',
    summary: 'The first trimester is a time of incredible changes. Here’s what to expect and how to take the best care of yourself and your growing baby.',
    content: [
      'The first trimester of pregnancy, spanning from week 1 to week 12, is a period of rapid development for your baby and significant changes for you. While exciting, it can also bring a host of new experiences and questions. Understanding what’s happening can help you navigate this time with confidence.',
      'Common symptoms during this stage include morning sickness, fatigue, and food cravings or aversions. It\'s crucial to listen to your body and get plenty of rest. Eating small, frequent meals can help manage nausea. Stay hydrated and focus on a balanced diet rich in folic acid, iron, and calcium.',
      'Your first prenatal visit is a major milestone. We will confirm your pregnancy, estimate your due date, and conduct essential health screenings. This is the perfect opportunity to ask any questions you have about your pregnancy journey. Remember, every pregnancy is unique, and we are here to support you every step of the way.'
    ],
    featuredImage: 'https://picsum.photos/seed/trimester/1200/800',
    author: 'Dr. Neha Bhatnagar',
    date: 'October 26, 2023',
    category: 'Pregnancy Care',
    tags: ['First Trimester', 'Pregnancy', 'Health'],
  },
  {
    id: 2,
    slug: 'understanding-pcos',
    title: 'Understanding PCOS: Symptoms, Causes, and Treatment',
    summary: 'Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder. Learn about its key signs and the effective management strategies available.',
    content: [
      'Polycystic Ovary Syndrome (PCOS) is a health condition that affects about 1 in 10 women of childbearing age. It can cause hormonal imbalances, irregular periods, and cysts on the ovaries. While the exact cause is unknown, it is linked to genetics and insulin resistance.',
      'Symptoms of PCOS can vary but often include irregular menstrual cycles, excess androgen (male hormone) levels leading to hair growth, acne, and weight gain. If you are experiencing these symptoms, it is important to consult a healthcare provider for an accurate diagnosis.',
      'While there is no cure for PCOS, the symptoms can be managed effectively through lifestyle changes and medication. A healthy diet, regular exercise, and maintaining a healthy weight are the first line of defense. Medical treatments can help regulate periods, manage fertility issues, and reduce other symptoms. A personalized care plan is key to managing PCOS long-term.'
    ],
    featuredImage: 'https://picsum.photos/seed/pcos/1200/800',
    author: 'Dr. Neha Bhatnagar',
    date: 'November 5, 2023',
    category: 'Women\'s Health',
    tags: ['PCOS', 'Hormonal Health', 'Infertility'],
  },
   {
    id: 3,
    slug: 'importance-of-postnatal-care',
    title: 'The Importance of Postnatal Care for New Mothers',
    summary: 'The "fourth trimester" is a critical period of recovery and adjustment. Discover why postnatal check-ups are essential for your health and well-being.',
    content: [
      'The postnatal period, often called the "fourth trimester," begins right after delivery and lasts for about six to eight weeks. This is a crucial time for a new mother to recover from childbirth, adjust to hormonal changes, and bond with her newborn. Comprehensive postnatal care is vital to ensure both physical and emotional well-being.',
      'Your postnatal check-up is an opportunity to discuss your physical recovery, including healing from delivery, uterine health, and any concerns about bleeding or discomfort. It\'s also a safe space to talk about your emotional health, screen for postpartum depression, and discuss challenges like fatigue and baby blues.',
      'We also cover topics like breastfeeding, contraception, and easing back into physical activity. Remember, taking care of yourself is just as important as taking care of your new baby. A healthy, supported mother is better equipped to handle the joys and demands of motherhood.'
    ],
    featuredImage: 'https://picsum.photos/seed/postnatal/1200/800',
    author: 'Dr. Neha Bhatnagar',
    date: 'November 18, 2023',
    category: 'Postnatal Care',
    tags: ['New Mother', 'Recovery', 'Wellness'],
  },
];
