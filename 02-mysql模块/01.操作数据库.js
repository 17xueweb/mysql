// 1. 导入 mysql 模块
const mysql = require('mysql')

// 2. 建立与 mysql 数据库的连接关系
const db = mysql.createPool({
    host: "127.0.0.1", // 数据库的 ip 地址
    user: "root", // 登录数据库的账号
    password: "admin123", // 登录数据库的密码
    database: "my_db_01" // 指定要操作哪个数据库
})

// 测试 mysql 模块能否正常工作
// db.query('SELECT 1', (err, result) => {
//     // mysql 模块工作期间报错了
//     if (err) return console.log(err.message);
//     // 能够成功执行 sql 语句
//     console.log(result);
// })

// 查询 user 表中所有数据
// const sqlStr = 'select * from users'
// db.query(sqlStr, (err, result) => {
//     // 查询数据失败
//     if (err) return console.log(err.message);
//     // 查询数据成功
//     // 注意：如果执行的是 select 查询语句，则执行的结果是数组
//     console.log(result);
// })

// 向 users 表中，新增一条数据，其中 username 的值为 Spider-Man password的值为 pcc23
// 
// const user = { username: 'Spider-Man', password: 'pcc23'}
// // 定义待执行的 SQL 语句
// const sqlStr = 'insert into users (username, password) values (?, ?)'
// // 执行 SQL 语句
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//     // 执行 SQL 语句失败了
//     if (err) return console.log(err.message);
//     // 成功了
//     // 注意：如果执行的是 insert into 插入语句，则 results 是一个对象
//     // 可以通过 affectedRows 判断是否插入成功
//     if (results.affectedRows  === 1) {
//         console.log('数据插入成功！');
//     }
// })

// 演示 插入数据的便捷方式
// const user = { username: 'Spider-Man1', password: 'pcc4321'}
// // 定义待执行的 SQL 语句
// const sqlStr = 'insert into users set ?'
// // 执行 SQL 语句
// db.query(sqlStr, user, (err, results) => {
//     if (err) return console.log(err.message);
//     if (results.affectedRows === 1) {
//         console.log('插入数据成功！');
//     }
// })

// 演示如何更新用户信息
// const user = { id: 8, username: 'aaa', password: '000'}
// // 定义 SQL 语句
// const sqlStr = 'update users set username = ?, password = ? where id = ?'
// // 执行 SQL 语句
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message);
//     // 注意：执行了 update 语句之后，执行的结果，也是一个对象，可以通过 affectedRows 判断是否更新成功
//     if (results.affectedRows === 1) {
//         console.log('更新成功！');
//     }
// })

// 演示更新数据便捷写法
const user = { id: 8, username: 'aaaa', password: '0000'}
// 定义 SQL 语句
const sqlStr = 'update users set ? where id = ?'
// 执行 SQL 语句
db.query(sqlStr, [user, user.id], (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('更新成功！');
    }
})