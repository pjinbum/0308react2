import React from 'react';
import Comment from './Comment';
import { useState } from 'react';
import AddBox from './AddBox';
import AddPractice from './AddPractice';

const comments = [
  {
    name : "이예진1",
    comment : "안녕하세요. 이예진 입니다."
  },
  {
    name : "이예진2",
    comment : "리액트 재밌다~!"
  }, 
  {
    name : "이예진3",
    comment : "리액트 재미없어!!"
  }
]




function CommentList() {

   const [CommentList , setCommentList] = useState(comments)
   const [name , setName] = useState('');
   const [content , setContent] = useState('');
   
   const deleteComment = (index) => {
     const newCommentList = [...CommentList];
     newCommentList.splice(index , 1)
     setCommentList(newCommentList)
    //  alert(index)

    // const pushComment = () => {
    //   const newPush = [...CommentList];
    //   newPush.push('{name :  sdfdsf  , comment : sdfsf }')
    //   setCommentList(newPush)
    // }  </div>onAdd={()=>pushComment(i)

     
     
   }

   
   const addComment = () => {
    const add = {name : '하하하' , comment : '아아아아아아아~!!!'}
    setCommentList([add,...CommentList])
    // 스테이트 변경함수
  }

  
  const addComment11 = () => {
     const add1 = {name : name , comment : content}
     setCommentList([add1,...CommentList])
    // 스테이트 변경함수
    setName('')
    setContent('')
    //state변경 함수에 빈문자열을 넣어서 input 에 작성된 내용을 초기화 시켜준다
  }


   

   
  return (
    <div>
      {
        CommentList.map((comment, i)=>{
          return (
            <div>
               <Comment name={comment.name} comment={comment.comment} key={i} onDelete={()=>deleteComment(i)}  > 
            
               </Comment>

              
            
            </div>
            
          
          )
        })
      }
      <button onClick={addComment}>글쓰기</button>
      <button onClick={addComment11}>데이터값 추가</button>
      {/* onchange 이벤트는 input 요소에서 값이 변경될때 발생
       그때 발생한 이벤트를 매개변수 e  */}

       이름 : <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
       댓글 : <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
      {/* <div style={{display : 'flex'}}>
        <div>
          이름 : <input type="text" onChange={(e)=> comments.name.target.value}/>
        </div>
        <div>
          댓글 : <input type="text" onChange={(t)=> comments.comment.target.value}/>
        </div>
        <div>
          <button onClick={addComment11}>글추가</button>
        </div>
      </div> */}

      




    </div>
  )
}

export default CommentList;