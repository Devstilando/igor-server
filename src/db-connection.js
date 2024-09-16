import mongoose from 'mongoose';

const dbConnection = async ( fastify) => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}${process.env.MONGODB_OPTIONS && `?${process.env.MONGODB_OPTIONS}`}`);
    fastify.log.info('Connected to database');
    return true
  }
  catch (error) {
    fastify.log.error('Error connecting to database');
    return false
  }
}

export {
  dbConnection
}