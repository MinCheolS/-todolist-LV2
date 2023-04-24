import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { deleteTodo, editTodo} from '../redux/modules/todos'
import { Link } from 'react-router-dom'

const Stlistcontainer = styled.div` 
    padding: 0 24px;
`
  
const Stlistgroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`

const Sttodocontainer = styled.div`
    width: 270px;
    border: 4px solid rgb(156, 183, 255);
    border-radius: 12px;
    padding: 12px 24px 24px 24px;
`
  
const Stbuttons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
`
  
const Sttododeletebutton = styled.button`
    border: 2px solid red;
    background-color: #fff;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
`
  
const Sttodoeditbutton = styled.button`
    border: 2px solid rgb(93, 82, 255);
    background-color: #fff;
    width: 50%;
    height: 40px;
    border-radius: 8px;
    cursor: pointer;
`

function List() {
    const dispatch = useDispatch()

    const todos = useSelector((state) =>
        state.todos.todos
    )
   
    const onDeleteHanlder = (id) => {
        dispatch(deleteTodo(id))
    }

    const onEditHandler = (id) => {
        dispatch(editTodo(id))
    }

  return (
  <Stlistcontainer>
    <h2>Working..🔥</h2>
    <Stlistgroup>
        {todos.map((todo) => {
            if (!todo.isDone) {
                return (
                <Sttodocontainer key={todo.id}>
                    <Link to={`/${todo.id}`} key={todo.id}>
                        <div>상세보기</div>
                    </Link>
                    <div>
                        <h2>{todo.title}</h2>
                        <div>{todo.body}</div>
                    </div>
                <Stbuttons>
                    <Sttododeletebutton onClick={() => 
                    onDeleteHanlder(todo.id)
                }>
                        삭제하기
                    </Sttododeletebutton>
                    <Sttodoeditbutton onClick={() => 
                    onEditHandler(todo.id)
                }>
                    {todo.isDone ? '취소' : '완료'}
                    </Sttodoeditbutton>
                </Stbuttons>
                </Sttodocontainer>
                )
            }
            else {
                return null
            }
            })}
    </Stlistgroup>
    <h2>Done..!🎉</h2>
    <Stlistgroup>
        {todos.map((todo) => {
            if(todo.isDone) {
                return (
                <Sttodocontainer key={todo.id}>
                    <Link to={`/${todo.id}`} key={todo.id}>
                        <div>상세보기</div>
                    </Link>
                    <div>
                        <h2>{todo.title}</h2>
                        <div>{todo.body}</div>
                    </div>
                <Stbuttons>
                    <Sttododeletebutton onClick={() => 
                    onDeleteHanlder(todo.id)
                }>
                        삭제하기
                    </Sttododeletebutton>
                    <Sttodoeditbutton onClick={() => 
                    onEditHandler(todo.id)
                }>
                    {todo.isDone ? '취소' : '완료'}
                    </Sttodoeditbutton>
                </Stbuttons>
                </Sttodocontainer>
                )
            }
            else {
                return null
            }
            })}
    </Stlistgroup>
  </Stlistcontainer>
  )
}

export default List
