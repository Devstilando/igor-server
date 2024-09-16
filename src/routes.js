import { Crudify } from "@aaroncadillac/crudify-mongo"
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

const API_PREFIX = '/api'

const routes = ( fastify, opts, done ) => {
  fastify.register(Crudify, {
    url: `${API_PREFIX}/users`,
    Model: UserModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/accounts`,
    Model: AccountModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/permissions`,
    Model: PermissionModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/policies`,
    Model: PolicyModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/product-categories`,
    Model: ProductCategoryModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/products`,
    Model: ProductModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/product-sub-categories`,
    Model: ProductSubCategoryModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/product-tags`,
    Model: ProductTagModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/profile`,
    Model: ProfileModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/roles`,
    Model: RoleModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/restaurants`,
    Model: RestaurantModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/factory-zones`,
    Model: FactoryZoneModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/tables`,
    Model: TableModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/menus`,
    Model: MenuModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/waiters`,
    Model: WaiterModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/restaurant-zones`,
    Model: RestaurantZoneModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/sales`,
    Model: SaleModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/orders`,
    Model: OrderModel
  })
  fastify.register(Crudify, {
    url: `${API_PREFIX}/clients`,
    Model: ClientModel
  })
  done()
}

export {
  routes
}