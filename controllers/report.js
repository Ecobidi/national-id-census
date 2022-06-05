const states = require('../config/states')
const PersonModel = require('../models/person')
const PersonService = require('../services/person')

class ReportController {
  static async getStatesReport(req, res) {
    let persons = await PersonModel.find()
    let stats = new Array(states.length).fill(0)

    // for (let i = 0; i < stats.length; i++) {
    //   stats[i] = Math.floor(Math.random() * 20);
    // }

    for (let i = 0; i < persons.length; i++) {
      let p = persons[i]
      let index = states.indexOf(p.origin_state)
      stats[index] += 1
    }

    console.log(stats)

    res.json({labels: states, stats})
  }

  static async getRegionalReport(req, res) {
    let labels = ['NORTH EAST', 'NORTH CENTRAL', 'NORTH WEST', 'SOUTH EAST', 'SOUTH WEST', 'SOUTH SOUTH']
    let persons = await PersonModel.find()
    let stats = new Array(labels.length).fill(1)

    // for (let i = 0; i < stats.length; i++) {
    //   stats[i] = Math.floor(Math.random() * 20);
    // }

    for (let i = 0; i < persons.length; i++) {
      let p = persons[i]
      let index = labels.indexOf(p.region)
      stats[index] += 1
    }

    res.json({labels, stats})
  }
}

// ReportController.getStatesReport()

module.exports = ReportController