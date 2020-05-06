const maxQuestionsPerLecture = 3;

export default function (state = {}, action) {
  switch (action.type) {
    case "CREATE_DESCRIPTION":
      return {
        ...state,
        courseName: action.courseName,
        courseDescription: action.courseDescription,
      };
    case "CREATE_GOAL": {
      // create id so we can have unique ids for everything
      let lastId = (state.lastId || 0) + 1;
      let addedGoal = { verb: action.verb, name: action.name, id: lastId };
      return {
        ...state,
        lastId,
        goals: [...(state.goals || []), addedGoal],
        selectedGoal: addedGoal,
      };
    }
    case "UPDATE_GOAL": {
      let updatedGoal = { verb: action.verb, name: action.name, id: action.id };
      return {
        ...state,
        goals: state.goals.map((goal) =>
          goal.id === updatedGoal.id ? updatedGoal : goal
        ),
        selectedGoal: updatedGoal,
      };
    }
    case "SELECT_GOAL":
      return {
        ...state,
        selectedGoal: action.goal,
      };
    case "DELETE_GOAL": {
      const goalQuestionIds = state.questions
        .filter((question) => question.goalId === action.id)
        .map((question) => question.id);
      return {
        ...state,
        goals: state.goals.filter((goal) => goal.id !== action.id),
        selectedGoal:
          state.selectedGoal && state.selectedGoal.id === action.id
            ? null
            : state.selectedGoal,
        questions: state.questions.filter(
          (question) => question.goalId !== action.id
        ),
        lectures: state.lectures.filter(
          (lecture) => lecture.goalId !== action.id
        ),
        contents: state.contents.filter(
          (content) => !goalQuestionIds.includes(content.questionId)
        ),
      };
    }
    case "CREATE_QUESTION": {
      let lastId = (state.lastId || 0) + 1;
      const question = {
        id: lastId,
        goalId: action.goalId,
        name: action.name,
        type: action.questionType,
        answers: action.answers,
        correct: action.correct,
      };
      let lectures;
      //lectures = [{},{},{}]
      let goalLectures = (state.lectures || []).filter(
        (lecture) => lecture.goalId === action.goalId
      );

      const isGoalLecturesEmpty = !goalLectures.length;
      const isLastLectureFull =
        goalLectures.length &&
        goalLectures[goalLectures.length - 1].questions.length >=
          maxQuestionsPerLecture;
      if (isGoalLecturesEmpty || isLastLectureFull) {
        lastId += 1;
        lectures = [
          ...(state.lectures || []),
          { id: lastId, goalId: action.goalId, questions: [question.id] },
        ];
      } else {
        const lastLecture = goalLectures[goalLectures.length - 1];
        lectures = state.lectures.map((lecture) =>
          lecture.id === lastLecture.id
            ? {
                ...lastLecture,
                questions: [...lastLecture.questions, question.id],
              }
            : lecture
        );
      }

      return {
        ...state,
        lastId,
        questions: [...(state.questions || []), question],
        lectures,
      };
    }
    case "DELETE_QUESTION":
      return {
        ...state,
        questions: state.questions.filter(
          (question) => question.id !== action.id
        ),
        lectures: state.lectures.map((lecture) =>
          lecture.questions.includes(action.id)
            ? {
                ...lecture,
                questions: lecture.questions.filter((id) => id !== action.id),
              }
            : lecture
        ),
        contents: (state.contents || []).filter(
          (content) => content.questionId !== action.id
        ),
      };
    case "MOVE_QUESTION": {
      const { questionId, sourceLectureId, destinationLectureId } = action;
      return {
        ...state,
        lectures: state.lectures.map((lecture) => {
          switch (lecture.id) {
            case sourceLectureId:
              return {
                ...lecture,
                questions: lecture.questions.filter(
                  (question) => question !== questionId
                ),
              };
            case destinationLectureId:
              return {
                ...lecture,
                questions: [...lecture.questions, questionId],
              };
            default:
              return lecture;
          }
        }),
      };
    }
    case "CREATE_CONTENT": {
      let lastId = (state.lastId || 0) + 1;
      return {
        ...state,
        lastId,
        contents: [
          ...(state.contents || []),
          {
            id: lastId,
            questionId: action.questionId,
            type: action.contentType,
            value: action.contentValue,
          },
        ],
      };
    }

    case "DELETE_CONTENT":
      return {
        ...state,
        contents: state.contents.filter((content) => content.id !== action.id),
      };
    default:
      return state;
  }
}
