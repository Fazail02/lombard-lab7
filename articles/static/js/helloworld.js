var groupmates = [
    {
        "name": "Александр",
        "surname": "Иванов",
        "group": "ВСТ1102",
        "marks": [4, 3, 5]
    },
    {
        "name": "Иван",
        "surname": "Петров",
        "group": "ВСТ1102",
        "marks": [4, 4, 4]
    },
    {
        "name": "Кирилл",
        "surname": "Смирнов",
        "group": "БАП1801",
        "marks": [5, 5, 5]
    },
    {
        "name": "Анна",
        "surname": "Соколова",
        "group": "ВСТ1102",
        "marks": [3, 4, 3]
    },
    {
        "name": "Максим",
        "surname": "Орлов",
        "group": "БАП1801",
        "marks": [5, 4, 5]
    }
];

console.log(groupmates);

var rpad = function(str, length) {
    str = str.toString();

    while (str.length < length) {
        str = str + " ";
    }

    return str;
};

var printStudents = function(students) {
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 10),
        rpad("Оценки", 20)
    );

    for (var i = 0; i < students.length; i++) {
        console.log(
            rpad(students[i]["name"], 15),
            rpad(students[i]["surname"], 15),
            rpad(students[i]["group"], 10),
            rpad(students[i]["marks"], 20)
        );
    }

    console.log("\n");
};

printStudents(groupmates);

var filterByGroup = function(students, groupName) {
    var result = [];

    for (var i = 0; i < students.length; i++) {
        if (students[i]["group"] === groupName) {
            result.push(students[i]);
        }
    }

    return result;
};

var filterByAverageMark = function(students, minAverage) {
    var result = [];

    for (var i = 0; i < students.length; i++) {
        var marks = students[i]["marks"];
        var sum = 0;

        for (var j = 0; j < marks.length; j++) {
            sum += marks[j];
        }

        var average = sum / marks.length;

        if (average > minAverage) {
            result.push(students[i]);
        }
    }

    return result;
};

var groupName = prompt("Введите название группы:");
console.log("Студенты группы " + groupName);
printStudents(filterByGroup(groupmates, groupName));

var minAverage = parseFloat(prompt("Введите минимальный средний балл:"));
console.log("Студенты со средним баллом выше " + minAverage);
printStudents(filterByAverageMark(groupmates, minAverage));