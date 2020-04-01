const moment = require('moment')
exports.getFullDate = () => moment().format('D MMMM YYYY');
exports.getHour = () => moment().format("h:mm:ss");