const college = {
    name : 'vnc',
    class : ['11','12'],
    events: ['science fair','bijoy dibos'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }
    }
}

console.log(college.unique)
console.log(college.unique.color)
college.unique.result.merit = 'second top'
console.log(college.unique.result.merit)

college.events[1] = '16 dec'
console.log(college.events[1])
delete college.class;
console.log(college);
