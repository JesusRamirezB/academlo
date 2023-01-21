function gradingStudents(grades) {
    // Write your code here
    grades.forEach(grade => {
        let rounded = Math.round(grade / 5) * 5
        let diff = grade - rounded
        if (grade <= 38) {
            console.log(grade)
        } else {
            if ( diff >= 3) {
                console.log(rounded)
            } else {
                console.log(grade)
            }
        }
    })
}

gradingStudents([73,67,38,33])