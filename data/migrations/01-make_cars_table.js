exports.up = function(knex) {
    return knex.schema.createTable('cars', table => {
      // primary key of auto-inc integers
      table.increments('id') // 'car_id' column which is a primary
  

      table.text('vin', 17).unique().notNullable() // VARCHAR 17
      table.text('make', 128).notNullable() 
      table.text('model', 128).notNullable()
      table.decimal('mileage').notNullable()
      table.text('title', 128) 
      table.text('transmission', 128)
    })
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars')
  }