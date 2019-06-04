'use strict'

const Database = use('Database')

class NameController {
  async show() {
    try {
        const users = await Database.table('names')
        return users
    }
    catch(err) {
        return err
    }
  }
}

module.exports = NameController
