export interface Post {
  id: number;
  title: string;
  content: string;
  date: Date;
  comment: number;
  like: number;
  image?: string;
  tag?: string[];
  private?: boolean;
}
