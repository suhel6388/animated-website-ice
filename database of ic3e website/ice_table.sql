create database ice_student_db;

use ice_student_db;
create table student_innquiry(
Sr_no int primary key auto_increment,
name varchar(50),
email varchar(20),
msg varchar(100)


);
ALTER TABLE student_innquiry
ADD DATE TIMESTAMP DEFAULT CURRENT_TIMESTAMP;

select * from  student_innquiry;







