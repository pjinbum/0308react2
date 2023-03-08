/* eslint-disable */
import React from "react";
import { useState } from "react";



const styles = {
    wrapper : {
      display : 'flex',
      margin: '8px',
      padding : '8px',
      border : '1px solid #ccc',
      borderRadius : '16px',
    },
  
    image : {
      width : '50px',
      height: '50px',
      borderRadius : '50%',
    },
  
    contentContainer : {
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      marginLeft : '8px',
    },
  
    nameText : {
      fontSize : '18px',
      fontWeight : 'bold',
    },
  
    commentText : {
      fontSize : '14px',
    },
  
    buttonStyle : {
      width : '20px' ,
      height : '50px' ,
      backgroundColor : 'yellowgreen' 
      
    }
  }

   
  const comments1 = [
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
  




function AddBox(props){

    let [AdAd , setAdad] = useState(comments1)

    return(
      <div className="anan"> 
          <div style={styles.wrapper}>
            <div>
              <img style={styles.image} src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="user-img" />
            </div>
            <div style={styles.contentContainer}>
              <span style={styles.nameText}>{props.name}</span>
              <span style={styles.commentText}>{props.comment}</span>
          
            </div>
            <button className='btn' style={styles.buttonStyle} onClick={props.onDelete}>X</button>
          
          </div>
          <button onClick={(a)=>{
            let copyComments1 = [...comments1]
           copyComments1 = copyComments1.splice(a , 1)
            setAdad(copyComments1) 
          }}>글쓰기</button>
        
      </div>
    )
}

export default AddBox ;