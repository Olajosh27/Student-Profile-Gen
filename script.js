const students = [
    {
        firstName:"Tolu",
        lastName:"Johnson",
        age:"25",
        score:"45",
        courses:["Physics","Mathematics"],
    },
    {
        firstName:"Simon",
        lastName:"Wills",
        age:"23",
        score:"60",
        courses:["Physics","Mathematics"],
    },
    {
        firstName:"Olanrewaju",
        lastName:"Olaniyi",
        age:"24",
        score:"71",
        courses:["Physics","Mathematics"],
    },
    {
        firstName:"Dennis",
        lastName:"Faniyi",
        age:"24",
        score:"57",
        courses:["Physics","Mathematics"],
    },
    {
        firstName:"Mary",
        lastName:"Oyelami",
        age:"22",
        score:"48",
        courses:["Physics","Mathematics"],
    },
]

const[Tolu,Simon,Olanrewaju,Dennis,Mary] = students;
const studentDescriptions = students.map(({firstName, lastName, age, score, courses}) => {
    return `${firstName} ${lastName} is ${age} years old and scored ${score}. He is taking: ${courses.join(", ")}`;
});

studentDescriptions.forEach(description => {
    console.log(description);
});