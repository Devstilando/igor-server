function AutoCrud (fastify, opts, next) {
  fastify.get('/', opts, async (req, reply) => {
    try {
      opts = { ...opts,
        schema: {
          querystring: {
            type: 'object',
            properties: {
              filters: {
                type: 'string'
              },
              pagination: {
                type: 'string'
              }
            }
          }
        }
      }
      const filterObject = JSON.parse(req.query.filters ||= '{}')
      for (const key in filterObject) {
        if (typeof filterObject[key] === 'string') {
          if (filterObject[key].startsWith('/') && filterObject[key].endsWith('/')) {
            filterObject[key] = new RegExp(filterObject[key].slice(1, -1), 'i')
          }
        }
      }
      const paginateOptions = JSON.parse(req.query.pagination ||= '{"pagination": false}')
      reply.type('application/json').code(200).send(await opts.Model.paginate(filterObject, paginateOptions))
    } catch (err) {
      throw new Error(err)
    }
  })

  fastify.get('/:id', opts, async (req, reply) => {
    try {
      const response = await opts.Model.findById(req.params.id)
      if (!response) {
        reply.type('application/json').code(404).send({
          statusCode: 404,
          message: `ID: ${ req.params.id } not found`
        })
      } else {
        reply.type('application/json').code(200).send(response)
      }
    } catch (err) {
      throw new Error(err)
    }
  })

  fastify.post('/', opts, async (req, reply) => {
    try {
      await opts.Model.validate(req.body)
    } catch (err) {
      reply.type('application/json').code(400).send(err)
    }
    try {
      reply.type('application/json').code(201).send(await new opts.Model(req.body).save())
    } catch (err) {
      throw new Error(err)
    }
  })

  fastify.put('/:id', opts, async (req, reply) => {
    try {
      const response = await opts.Model.findOneAndUpdate({ _id: req.params.id }, req.body, { 
        new: true,
        runValidators: true
      })
      if (!response) {
        reply.type('application/json').code(404).send({
          statusCode: 404,
          message: `ID: ${ req.params.id } not found`
        })
      } else {
        reply.type('application/json').code(200).send(response)
      }
    } catch (err) {
      throw new Error(err)
    }
  })

  fastify.delete('/:id', opts, async (req, reply) => {
    try {
      const response = await opts.Model.findOneAndDelete({ _id: req.params.id })
      if (!response) {
        reply.type('application/json').code(404).send({
          statusCode: 404,
          message: `ID: ${ req.params.id } not found`
        })
      } else {
        reply.type('application/json').code(200).send(response)
      }
    } catch (err) {
      throw new Error(err)
    }
  })

  opts.additionalRoute?.map(route => {
    fastify.route(route)
  })

  next()
}

export {
  AutoCrud
}
