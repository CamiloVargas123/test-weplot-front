
export function formatData(data, dataQuestion) {
  const question = [{
    question: dataQuestion.question1,
    answer: data.question1
  }, {
    question: dataQuestion.question2,
    answer: data.question2
  }, {
    question: dataQuestion.question3,
    answer: data.question3
  }, {
    question: dataQuestion.question4,
    answer: data.question4
  }]
  delete data.question1
  delete data.question2
  delete data.question3
  delete data.question4
  data.question = question
  return data
}