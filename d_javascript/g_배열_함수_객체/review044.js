class Student {
  constructor(id, name, scores) {
    this.id = id;
    this.name = name;
    this.scores = [0, 0, 0];
  }

  getAverageScore(){
    let total = this.scores.reduce((sum, score) => {
      return sum + (scores[0] + scores[1] + scores[2])
    }, 0);

    console.log(`평균 점수는 ${total}점 입니다.`);
  }
}

class GradeManagement {
  constructor() {
    this.students = [];
    this.nextStudentId = 1;
  }

  addStudent(name, scores) {
    const newStudent = new Student(this.nextStudentId, name, scores);
    this.students.push(newStudent);

    console.log(`${name}학생이 추가되었습니다.`);
    this.nextStudentId++;
  }

  getAverageScore() {
    this.students.filter(student => student.getAverageScore());
  }
}