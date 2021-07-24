'use strict'

const Date = use('App/Models/Date')
const User = use('App/Models/User')
const Database = use('Database')

class DateController {

  async registerDate ({ request , auth}) {
    const data = request.only(["day", "slot"])
    const day_check = await Database.table('dates').where('day', data.day).where('slot', data.slot).count()
    console.log('check', day_check[0]['count(*)'])
    if (day_check[0]['count(*)'] > 0) {
      return "1"
    } else {
      const result = await Date.create({user_id: auth.user.id, day: data.day, slot: data.slot, apartment: auth.user.apartment})
      return "0"
    }
  }

  async getDay ({ request }) {
    const data = request.only(['day'])
    console.log(data)
    const result = await Database.table('dates').where('day', data.day)
    console.log(result)
    return result
  }
}

module.exports = DateController
