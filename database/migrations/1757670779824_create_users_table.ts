import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('firstname', 256).notNullable()
      table.string('lastname', 256).notNullable()
      table.string('nickname', 512).notNullable().index()
      table.string('email', 256).notNullable().index()
      table.string('phone', 64).notNullable().index()
      table.datetime('createdAt', { precision: 0 }).defaultTo(this.now(0))
      table.datetime('updatedAt', { precision: 0 }).defaultTo(this.now(0))
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
