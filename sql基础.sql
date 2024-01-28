-- 通过 * 把 users 表中所有的数据查询出来
-- select * from my_db_01.users

-- 从 users 表中把 username 和 password 对应的数据查询出来
-- select username, password from my_db_01.users

-- 向 users 表中插入数据，username 的值为 tony stark，password 的值为 098123
-- insert into my_db_01.users (username, password) values ('tony stark', '098123')
-- selct * from my_db_01.users

-- 将 id 为 4 的用户密码，更新为 888888
-- update my_db_01.users set password = '888888' where id = 4
-- select * from my_db_01.users;

-- 更新 id 为2 的用户，将密码更新为 admin123， 同时把用户状态改为 1
-- update my_db_01.users set password = 'admin123', status = '1' where id = 2
-- select * from my_db_01.users

-- 删除 users 表中，id 为 4 的用户
-- delete from my_db_01.users where id = 4
-- select * from my_db_01.users

-- 演示 where 子句的使用
-- select * from my_db_01.users where status = 1
-- select * from my_db_01.users where id > 2
-- select * from my_db_01.users where username <> 'ls'
-- select * from my_db_01.users where username != 'ls '

-- 使用 and 来显示所有状态为 0 且 id 小于 3 的用户
-- select * from my_db_01.users where status = 0 and id < 3

-- 使用 or 来显示所有状态为 1 或 username 为 zs 的用户
-- select * from my_db_01.users where status = 1 or username = 'zs'

-- 对 users 表中的数据，按照 status 字段进行升序排序
-- select * from my_db_01.users order by status 

-- 按照 id 对结果进行降序排序 desc 降序，asc升序（默认为升序）
-- select * from my_db_01.users order by id desc 

-- 对 users 表中的数据，先按照 status 进行降序排序，再按照 username 字母的顺序，进行升序排序
-- select * from my_db_01.users order by status desc, username

-- 使用 count(*) 来统计 users表中，状态为 0 用户的总数
-- select count(*) from my_db_01.users where status = 0

-- 使用 as 关键字 给列起别名
-- select count(*) as total from my_db_01.users where status = 0
-- select username as uname, password as upwd from my_db_01.users


