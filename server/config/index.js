require("dotenv").config()

const config = {
  expireTime: process.env.JWTEXPIRE,
  secrets: {
    JWT_SECRET: process.env.JWTSECRET
  },
  keys: {
    s3: {
      accessKeyId: process.env.S3ACCESSKEYID,
      secretAccessKey: process.env.S3SECRETKEY,
      bucketName: process.env.S3BUCKET
    },
    ses: {
      sesRegion: process.env.SESREGION,
      accessKeyId: process.env.SESACCESSKEYID,
      secretAccessKey: process.env.SESSECRETKEY
    }
  },
  port: process.env.PORT
}

export default config
