select * from students
join chorelist on chorelist.studentid = students.id
where name like $1