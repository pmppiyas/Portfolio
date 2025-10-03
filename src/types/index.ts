export interface IBlog {
  id: number;
  title: string;
  content: string;
  author: string;
  thumbnail: string;
  tags: string[];
  isFeatured: boolean;
  views: number;
  createdAt: Date;
}
