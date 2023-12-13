export default (): Record<string, any> => ({
  databaseConnection: process.env.DATABASE_CONNECTION || 'postgres',
  databaseHost: process.env.DATABASE_HOST || 'localhost',
  databasePort: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  databaseUsername: process.env.DATABASE_USERNAME || 'root',
  databasePassword: process.env.DATABASE_PASSWORD || '',
  databaseName: process.env.DATABASE_NAME || 'nestjs-template',
});
