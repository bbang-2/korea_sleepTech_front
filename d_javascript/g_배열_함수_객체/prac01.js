// 데이터 정의
todos = [];
let nextId = 1;
// 할 일 추가
function addTodo(content) {
  const newTodo = {
    id: nextId,
    content: content,
    completed: false
  }
  nextId++;

  todos.push(newTodo);

  displayTodos();
}
// 할 일 수정
function toggleTodo (id) {
  todos = todos.map(todo =>{
    if(todo.id === id) {
      return {...todo, completed: !todo.completed};
    }
    return todo;
  });
  displayTodos();
}
// 할 일 삭제
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  displayTodos();
}
// 할 일 목록 출력
function displayTodos() {
  console.log('할일 목록');
  todos.forEach(todo => {
    console.log(`${todo.id}: ${todo.content} - ${todo.complete ?'완료 됨' : '미완료'}`);
  })
}