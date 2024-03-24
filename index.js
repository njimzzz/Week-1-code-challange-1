function studentGrades(marks){
    if (marks > 79){
        // Evaluates the marks input and assigns a grade to the marks
        return "A"
    } else if (marks >= 60, marks <= 79){
        return "B"
    } else if (marks >= 49 , marks <= 59) {
        return "C"
    } else if (marks >= 40 , marks < 49) {
        return "D"
    } else if (marks < 40 ) {
        return "E"
    }
}
//input the marks obtained for the student to get the grade 
console.log(studentGrades(50))

