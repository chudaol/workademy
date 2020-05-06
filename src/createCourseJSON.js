export default function createCourseJSON(course) {
  const questionsById = course.questions.reduce((acc, question) => {
    return { ...acc, [question.id]: question };
  }, {});
  const contentsByQuestionId = course.contents.reduce((acc, content) => {
    return {
      ...acc,
      [content.questionId]: [...(acc[content.questionId] || []), content],
    };
  }, {});

  return {
    name: course.courseName,
    description: course.courseDescription,
    goals: [course.goals.map((goal) => goal.verb + " " + goal.name)],
    modules: course.goals.map((goal) => ({
      name: goal.verb + " " + goal.name,
      lectures: course.lectures
        .filter((lecture) => lecture.goalId === goal.id)
        .map((lecture) => ({
          //   questionAnswerSize:

          questionAnswers: lecture.questions
            .map((questionId) => questionsById[questionId])
            .map((question) => ({
              "@type": question.type,
              question: question.name,
              answer:
                question.answers &&
                question.answers.filter((answer) => answer !== ""),
              correctAnswer: question.correct,
            })),
          // sections:
          sections: lecture.questions
            .flatMap((qId) => contentsByQuestionId[qId] || [])
            .map((content) => ({
              "@type": "HTML",
              html:
                content.type === "HTML"
                  ? content.value
                  : `<a href=\"${content.value}\">${content.type}</a>`,
            })),
        })),
    })),
  };
}
