import React, { useEffect, useState } from 'react'
import { Post } from '../types/Post';
import postApi from '../apis/postApi';

//! == 게시글 목록 & 삭제 == //
function PostList() {
  const [post, setPosts] = useState<Post[]>([]);

  const fetchPost = async () => {
    const res = await postApi.get("/posts?_limit=5"); // 임시로 5개만
    setPosts(res.data);
  }

  useEffect(() => {
    fetchPost();
  }, []);

  //# 이벤트 핸들러 # //
  const handleEdit = (id: number) => {
    localStorage.setItem('editingPostId', String(id))
  }
  
  const handleDelete = async (id: number) => {
    await postApi.delete(`/posts/${id}`);
    alert("삭제 완료");
    fetchPost();
  }

  return (
    <div>
      <h2>게시글 목록</h2>
      <ul>
        {post.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            {/* 
              post.id!
              : typeScript 컴파일러에게 개발자가 null, undifined가 아님을 단언!
              >> id 값이 Post타입에서 옵셔널
            */}
            <button onClick={() => handleEdit(post.id!)}>수정</button>
            <button onClick={() => handleDelete(post.id!)}>삭제</button>
            {/* {post.id && (
              <>
                <button onClick={() => handleEdit(post.id)}>수정</button>
                <button onClick={() => handleDelete(post.id)}>삭제</button>
              </>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostList