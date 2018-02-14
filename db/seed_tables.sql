create table students (
    id serial primary key,
    name VARCHAR(40)
)

create table classList (
    id serial primary key,
    className VARCHAR(40)
)

create table choreList (
    id serial primary key,
    choreList VARCHAR(40),
        FOREIGN KEY (studentId) REFERENCES students(id)
)

create table studentClass (
    id serial primary key,
    studentId int,
    classId int,
        FOREIGN KEY (studentId) REFERENCES students(id),
        FOREIGN KEY (classId) REFERENCES classList(id)
)