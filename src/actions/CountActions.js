var alt = require('../alt')

class CountActions {
    constructor() {
        this.generateActions('addIncrement', 'bulkCount', 'clearAllCounts', 'deleteIncrement');

  }
}

module.exports = alt.createActions(CountActions)
