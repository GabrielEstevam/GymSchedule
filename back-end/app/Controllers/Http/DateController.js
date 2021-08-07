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
    const result = await Database.select('slot', 'apartment').table('dates').where('day', data.day)
    let array_result = []
    for (let i = 0; i < 15; i++) {
      array_result.push({slot: String(i+1), apartment: ''})
    }
    for (let i = 0; i < result.length; i++) {
      array_result[parseInt(result[i].slot) - 1].apartment = result[i].apartment
    }
    return array_result
  }

  async getUserReserves ({ request, auth }) {
    const reserves = await Database.select('id', 'day', 'slot').table('dates').where('user_id', auth.user.id)
    return reserves
  }

  async cancelReserve ({request, auth}) {
    const reserve_id = request.only(['id'])
    const reserve = await Date.findOrFail(reserve_id.id)
    await reserve.delete()
    return '0'
  }
}

module.exports = DateController
