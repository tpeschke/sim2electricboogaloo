-- Sim 3 68d & 107d & 107c
select * from students
join studentclass on studentclass.studentid = students.ID
where classid = (
    select id 
    from classlist
    where id = $1
);