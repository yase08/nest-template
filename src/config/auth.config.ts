export default (): Record<string, string> => ({
  jwtSecretKey: process.env.JWT_SECRET_KEY || "thisisreallysecret",
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "3600s",
})
