require("dotenv").config()

const config = {
  expireTime: process.env.JWTEXPIRE,
  secrets: {
    JWT_SECRET: process.env.JWTSECRET
  },
  port: process.env.PORT
}

export default config
