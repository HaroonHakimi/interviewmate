/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:1VmwDaPbfy2G@ep-winter-lab-a57wgpr8.us-east-2.aws.neon.tech/neondb?sslmode=require',
    }
  };