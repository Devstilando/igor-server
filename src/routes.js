import { AutoCrud } from "../utils/auto-crud.js"
import { AccountModel } from "./models/accounts.js"
import { ClientModel } from "./models/clients.js"
import { FactoryZoneModel } from "./models/factoryZones.js"
import { MenuModel } from "./models/menu.js"
import { OrderModel } from "./models/orders.js"
import { PermissionModel } from "./models/permissions.js"
import { PolicyModel } from "./models/policies.js"
import { ProductCategoryModel } from "./models/productCategories.js"
import { ProductSubCategoryModel } from "./models/productSubCategores.js"
import { ProductTagModel } from "./models/productTags.js"
import { ProductModel } from "./models/products.js"
import { ProfileModel } from "./models/profile.js"
import { RestaurantZoneModel } from "./models/restaurantZones.js"
import { RestaurantModel } from "./models/restaurants.js"
import { RoleModel } from "./models/roles.js"
import { SaleModel } from "./models/sales.js"
import { TableModel } from "./models/tables.js"
import { UserModel } from "./models/users.js"
import { WaiterModel } from "./models/waiters.js"

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
  fastify.register(AutoCrud, {
    prefix: '/api/factory-zones',
    Model: FactoryZoneModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/tables',
    Model: TableModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/menus',
    Model: MenuModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/waiters',
    Model: WaiterModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/restaurant-zones',
    Model: RestaurantZoneModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/sales',
    Model: SaleModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/orders',
    Model: OrderModel
  })
  fastify.register(AutoCrud, {
    prefix: '/api/clients',
    Model: ClientModel
  })
  done()
}

export {
  routes
}