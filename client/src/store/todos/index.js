import axios from 'axios'
/** */
export const GET_TODOS = "GET_TODOS";
export const LOAD_TODOS = 'LOAD_TODOS';
/** */

export const addTodo = (data) => async dispatch => {
    dispatch({
        type: LOAD_TODOS
    });
   await axios.post("http://localhost:5000/add-item", { title: data.title, completed: data.completed });

  const response = await axios("http://localhost:5000/");
  dispatch({
    type: GET_TODOS,
    payload: response.data
  });

}

export const getTodos = () => async dispatch => {
  dispatch({
      type: LOAD_TODOS
  });

  const response = await axios("http://localhost:5000/");
    dispatch({
    type: GET_TODOS,
    payload: response.data
  });
};

/** */

const initialState = {
  data: []
}

function todosState(state = initialState, action) {
  console.log(action.type)
  if(action.type === LOAD_TODOS) {
    return {
      ...state,
      loading: true
    }
  }
  if (action.type === GET_TODOS) {
    return {
      data: action.payload,
      loading: false
    };
  }
  return state;
}

export default todosState;


const facebookMessengerState = {
  chats: [], //50 people that we are talking to
  unseenChats: [], // 3 message from 3 people,
  notificationNumber: 0
}