import 'dotenv/config';
import Fastify from 'fastify'
import { dbConnection } from './db-connection.js';
import { routes } from './routes.js';
import * as Swagger  from '@fastify/swagger'
import * as SwaggerUI from '@fastify/swagger-ui'

const fastify = Fastify({
  logger: true
})

fastify.register(await dbConnection)
process.env.NODE_ENV == 'development' && fastify.register(Swagger) && await fastify.register(SwaggerUI, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list',
    deepLinking: true
  },
  uiHooks: {
    onRequest: function (request, reply, next) { next() },
    preHandler: function (request, reply, next) { next() }
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
  transformSpecificationClone: true
})

fastify.register(routes)

fastify.listen({ port: process.env.PORT || 3000, host: process.env.HOST || 'localhost' }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})


