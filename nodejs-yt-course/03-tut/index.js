const { format } = require('date-fns');
const { v4: uuid } = require('uuid'); // equivalent to import { v4 as uuid } from 'uuid'

console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'));

console.log(uuid())