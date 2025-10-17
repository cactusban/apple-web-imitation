import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'

const app = express()
const PORT = 3001
const SECRET_KEY = 'my-secret-key'

// 读取用户数据
const dbPath = path.resolve('mock-server/db.json')
const users = JSON.parse(fs.readFileSync(dbPath, 'utf-8')).users

app.use(cors())
app.use(bodyParser.json())

// 登录接口
app.post('/login', (req, res) => {
  const { email, password } = req.body
  const user = users.find((u) => u.email === email && u.password === password)
  if (!user) {
    return res.status(401).json({ message: '邮箱或密码错误' })
  }

  // 生成 token
  const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: '1h',
  })
  res.json({
    accessToken: token,
    user: { id: user.id, email: user.email, name: user.name },
  })
})

// 受保护示例接口
app.get('/profile', (req, res) => {
  const authHeader = req.headers.authorization
  if (!authHeader) return res.status(401).json({ message: '未授权' })

  const token = authHeader.split(' ')[1]
  try {
    const payload = jwt.verify(token, SECRET_KEY)
    res.json({ message: '访问成功', user: payload })
  } catch (err) {
    res.status(401).json({ message: 'Token 无效或过期' })
  }
})

app.listen(PORT, () => {
  console.log(`✅ Mock Server running on http://localhost:${PORT}`)
})
