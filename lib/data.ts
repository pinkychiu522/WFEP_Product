export type ForumPost = {
  id: number;
  tag: string;
  title: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
  likes: number;
  liked: boolean;
  comments: number;
};

export type ForumReply = {
  author: string;
  avatar: string;
  time: string;
  content: string;
};

export const initialForumPosts: ForumPost[] = [
  {
    id: 1,
    tag: '育兒求助',
    title: '想問下有沒有適合小朋友的英文補習老師？',
    author: '梓敏媽咪',
    avatar: '👩',
    time: '2020-1-11 13:02',
    content: `各位媽咪好，我個女今年8歲，最近對英文好抗拒，見到英文書就想走開。想幫佢搵個補習老師，但唔知邊個適合。

希望老師具備以下條件：
• 有耐心，識得用遊戲方式教
• 有教小朋友經驗
• 可以上門或視像教學
• 收費合理

有冇媽咪可以推薦？多謝！`,
    likes: 5,
    liked: true,
    comments: 2,
  },
  {
    id: 2,
    tag: '同路圍爐',
    title: '9歲SEN仔仔功課跟唔上成日發脾氣，求補習社推介！',
    author: 'KAY WONG',
    avatar: '👨',
    time: '2023-05-15 12:43:21',
    content:
      '我個仔9歲有SEN特質，功課多發脾氣，有無補習社真係識教SEN小朋友？想搵同路人分享經驗。',
    likes: 7,
    liked: false,
    comments: 4,
  },
  {
    id: 3,
    tag: '心力交瘁',
    title: '5歲SEN細女遭遇醫生誤判錯過黃金期，10歲仔怨偏心點算？',
    author: 'YAN_825',
    avatar: '👩',
    time: '2023-04-20 09:15:00',
    content:
      '我個女5歲SEN，排政府好耐，大仔又怨偏心，好無助。想問下有冇同路人經歷過類似情況？',
    likes: 12,
    liked: false,
    comments: 8,
  },
  {
    id: 4,
    tag: '經驗分享',
    title: '用三年幫ADHD仔建立作息表，成績由包尾變中游',
    author: '謙媽',
    avatar: '👩',
    time: '2023-03-08 18:30:00',
    content: '固定作息表加獎勵，頭半年難捱，而家功課交齊。附時間表圖，希望幫到其他ADHD家長。',
    likes: 24,
    liked: false,
    comments: 15,
  },
];

export const postReplies: Record<number, ForumReply[]> = {
  1: [
    {
      author: '我仔仔叫幼幼豬',
      avatar: '🧑',
      time: '2020-1-11 15:20',
      content:
        '我哋用緊一位Miss Wong，佢好有耐性，會用遊戲同故事教英文，我仔由抗拒到而家主動讀書。可以私信我攞聯絡。',
    },
    {
      author: '梓敏媽咪',
      avatar: '👩',
      time: '2020-1-11 16:05',
      content: '多謝！！我即刻私信你 🙏',
    },
  ],
};
