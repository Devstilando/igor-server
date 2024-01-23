import { AutoCrud } from "../utils/auto-crud.js"
import { AccountModel } from "./models/accounts.js"
import { PermissionModel } from "./models/permissions.js"
import { PolicyModel } from "./models/policies.js"
import { ProductCategoryModel } from "./models/productCategories.js"
import { ProductSubCategoryModel } from "./models/productSubCategores.js"
import { ProductTagModel } from "./models/productTags.js"
import { ProductModel } from "./models/products.js"
import { ProfileModel } from "./models/profile.js"
import { RestaurantModel } from "./models/restaurants.js"
import { RoleModel } from "./models/roles.js"
import { UserModel } from "./models/users.js"


const routes = ( fastify, opts, done ) => {
  fastify.register(AutoCrud, {
    prefix: '/api/users',
    Model: UserModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/accounts',
    Model: AccountModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/permissions',
    Model: PermissionModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/policies',
    Model: PolicyModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/product-categories',
    Model: ProductCategoryModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/products',
    Model: ProductModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/product-sub-categories',
    Model: ProductSubCategoryModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/product-tags',
    Model: ProductTagModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/profile',
    Model: ProfileModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/roles',
    Model: RoleModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/restaurants',
    Model: RestaurantModel
  })
  
  done()
}

export {
  routes
}