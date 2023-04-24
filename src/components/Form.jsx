import React, { useState } from 'react'
import styled from 'styled-components';
import { addTodo } from '../redux/modules/todos';
import { useDispatch } from 'react-redux';
import nextId from 'react-id-generator';

const Staddform = styled.form`
    background-color: #c5dbff;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
`

const Stinputgroup = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
  
const Stformlabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`
  
const Staddinput = styled.input` 
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0 12px;
`

const Staddbutton = styled.button`
    border: none;
    height: 40px;
    border-radius: 10px;
    background-color: rgb(106, 104, 245);
    width: 140px;
    color: #fff;
    font-weight: 700;
`
function Form() {
    const id = nextId()
    const [todo, setTodo] = useState({
        id: 0,
        title: "",
        body: "",
        isDone: false,
    })
    
    const dispatch = useDispatch()

    const onChangeHandler = (event) => {
        const {name, value} = event.target
        setTodo({...todo, [name]:value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        if(todo.title.trim() === "" || todo.body.trim() === "") return;
        dispatch(addTodo({...todo, id}))
        setTodo({
            id: 0,
            title: "",
            body: "",
            isDone: false,
        })
    }

  return (
    <Staddform onSubmit={onSubmitHandler}>
        <Stinputgroup>
            <Stformlabel>제목</Stformlabel>
            <Staddinput
            type='text'
            name='title'
            value={todo.title}
            onChange={onChangeHandler}
            />
            <Stformlabel>내용</Stformlabel>
            <Staddinput
            type='text'
            name='body'
            value={todo.body}
            onChange={onChangeHandler}
            />
        </Stinputgroup>
        <Staddbutton>추가하기</Staddbutton>
    </Staddform>
  )
}   

export default Form