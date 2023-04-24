import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components'
import { getId } from '../redux/modules/todos'

const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StDialog = styled.div`
  width: 550px;
  height: 350px;
  border: 2px solid #6858fe;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StDialogHeader = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  padding: 0 25px;
  align-items: center;
`;

const StTitle = styled.h1`
  padding: 0 25px;
`;

const StBody = styled.main`
  padding: 0 25px;
`;

const StButton = styled.button`
  border: 1px solid white;
  height: 40px;
  width: 120px;
  background-color: rgb(106, 104, 245);
  color: #ffff;
  border-radius: 12px;
  cursor: pointer;
`;

function Detail() {
  const dispatch = useDispatch()
  const todo = useSelector((state) => state.todos.todo)
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getId(id))
  }, [dispatch, id])

  return (
    <StContainer>
      <StDialog>
        <div>
          <StDialogHeader>
            <div>ID :{todo.id}</div>
            <StButton
              onClick={() => {
                navigate("/");
              }}
            >
              이전으로
            </StButton>
          </StDialogHeader>
          <StTitle>{todo.title}</StTitle>
          <StBody>{todo.body}</StBody>
        </div>
      </StDialog>
    </StContainer>
  )
}

export default Detail
