var employees = [];

function addEmployee() {
    var name = document.getElementById("empName").value.trim();
    var id = document.getElementById("empId").value.trim();
    var salary = parseFloat(document.getElementById("empSalary").value);
    var dept = document.getElementById("empDept").value.trim();

    if (!name || !id || isNaN(salary) || !dept) {
        alert("Please fill in all fields correctly.");
        return;
    }

    var employee = { name: name, id: id, salary: salary, department: dept };
    employees.push(employee);

    alert("Employee Added Successfully!");

    document.getElementById("empName").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("empSalary").value = "";
    document.getElementById("empDept").value = "";

    document.getElementById("output").innerHTML = "";
}

function displayAll() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "<p>No employees added yet.</p>";
        return;
    }
    var html = "<h3>All Employees</h3>";
    employees.forEach(function(emp) {
        html += "<p>Name: " + emp.name + " | ID: " + emp.id + " | Salary: &#8377;" + emp.salary + " | Dept: " + emp.department + "</p>";
    });
    document.getElementById("output").innerHTML = html;
}

function filterSalary() {
    var filtered = employees.filter(function(emp) { return emp.salary > 50000; });
    var html = "<h3>Employees with Salary &gt; &#8377;50,000</h3>";
    if (filtered.length === 0) {
        html += "<p>No employees found with salary greater than &#8377;50,000.</p>";
    } else {
        filtered.forEach(function(emp) {
            html += "<p>Name: " + emp.name + " | ID: " + emp.id + " | Salary: &#8377;" + emp.salary + " | Dept: " + emp.department + "</p>";
        });
    }
    document.getElementById("output").innerHTML = html;
}

function totalSalary() {
    var total = employees.reduce(function(sum, emp) { return sum + emp.salary; }, 0);
    document.getElementById("output").innerHTML = "<p class='stat-result'>Total Salary Payout: &#8377;" + total + "</p>";
}

function averageSalary() {
    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "<p>No employees added yet.</p>";
        return;
    }
    var total = employees.reduce(function(sum, emp) { return sum + emp.salary; }, 0);
    var avg = total / employees.length;
    document.getElementById("output").innerHTML = "<p class='stat-result'>Average Salary: &#8377;" + avg.toFixed(2) + "</p>";
}

function countByDept() {
    var dept = prompt("Enter Department Name:");
    if (!dept) return;
    var count = employees.filter(function(emp) {
        return emp.department.toLowerCase() === dept.toLowerCase();
    }).length;
    document.getElementById("output").innerHTML = "<p class='stat-result'>Employees in " + dept + ": " + count + "</p>";
}
