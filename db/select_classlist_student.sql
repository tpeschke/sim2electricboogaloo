-- Sim 3 68d
select classname from studentclass
join classlist on studentclass.classid = classlist.id
where studentid = $1