function calculateResult() {
    var numSubjects = parseInt(document.getElementById("numSubjects").value);

    if (isNaN(numSubjects) || numSubjects < 1) {
        alert("Please enter a valid number of subjects.");
        return;
    }

    var totalMarks = 0;
    for (var i = 1; i <= numSubjects; i++) {
        var marks = parseFloat(prompt("Enter marks for Subject " + i + ":"));
        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Invalid marks for Subject " + i + ". Please enter a value between 0 and 100.");
            return;
        }
        totalMarks += marks;
    }

    var average = totalMarks / numSubjects;

    var grade;
    if (average >= 90) {
        grade = "O";
    } else if (average >= 80) {
        grade = "A+";
    } else if (average >= 70) {
        grade = "A";
    } else if (average >= 60) {
        grade = "B+";
    } else if (average >= 50) {
        grade = "B";
    } else if (average >= 40) {
        grade = "C";
    } else {
        grade = "F";
    }

    var result = average >= 40 ? "PASS" : "FAIL";

    document.getElementById("totalMarks").textContent = "Total Marks: " + totalMarks;
    document.getElementById("averageMarks").textContent = "Average Marks: " + average.toFixed(2);
    document.getElementById("grade").textContent = "Grade: " + grade;
    document.getElementById("resultStatus").textContent = "Result: " + result;
    document.getElementById("result").style.display = "block";
}
