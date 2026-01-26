import { StaticImageData } from 'next/image';

export interface IBlog {
  id: number;
  title: string;
  content: string;
  author: string;
  thumbnail: string;
  cover: string;
  tags: string[];
  isFeatured: boolean;
  views: number;
  createdAt: Date;
}

export interface IUser {
  name: string;
  email: string;
  photo?: string;
  password?: string;
}

export interface ILoginResponse {
  success: boolean;
  message?: string;
  data: IUser;
}

export interface IReview {
  name: string;
  title: string;
  heading: string;
  description: string;
  image: StaticImageData;
}
