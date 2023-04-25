import { post } from '../../test/data';
import type { Post } from '../../types/Post';

export function load({ params }: { params: { id: number } }): {
  post?: Post;
} {
  return {
    post: post.find((v) => v.id == params.id),
  };
}
