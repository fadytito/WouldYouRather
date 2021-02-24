import { GET_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };
      case SAVE_USER_ANSWER:
        return {
          ...state,
          [action.authedUser]: {
            ...state[action.authedUser],
            answers: {
              ...state[action.authedUser].answers,
              [action.qid]: action.answer
            }
          }
        }
        case SAVE_USER_QUESTION:
          return {
            ...state,
            [action.author]: {
              ...state[action.author],
              questions: [...state[action.author].questions].concat([action.qid])
            }
          }
    default:
      return state;
  }
}
