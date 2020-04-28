"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated from DA/Date/Types.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
var jtv = require("@mojotech/json-type-validation");
exports.DayOfWeek = {
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday',
    Sunday: 'Sunday',
    keys: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',],
    decoder: function () { return jtv.oneOf(jtv.constant(exports.DayOfWeek.Monday), jtv.constant(exports.DayOfWeek.Tuesday), jtv.constant(exports.DayOfWeek.Wednesday), jtv.constant(exports.DayOfWeek.Thursday), jtv.constant(exports.DayOfWeek.Friday), jtv.constant(exports.DayOfWeek.Saturday), jtv.constant(exports.DayOfWeek.Sunday)); },
};
exports.Month = {
    Jan: 'Jan',
    Feb: 'Feb',
    Mar: 'Mar',
    Apr: 'Apr',
    May: 'May',
    Jun: 'Jun',
    Jul: 'Jul',
    Aug: 'Aug',
    Sep: 'Sep',
    Oct: 'Oct',
    Nov: 'Nov',
    Dec: 'Dec',
    keys: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
    decoder: function () { return jtv.oneOf(jtv.constant(exports.Month.Jan), jtv.constant(exports.Month.Feb), jtv.constant(exports.Month.Mar), jtv.constant(exports.Month.Apr), jtv.constant(exports.Month.May), jtv.constant(exports.Month.Jun), jtv.constant(exports.Month.Jul), jtv.constant(exports.Month.Aug), jtv.constant(exports.Month.Sep), jtv.constant(exports.Month.Oct), jtv.constant(exports.Month.Nov), jtv.constant(exports.Month.Dec)); },
};
//# sourceMappingURL=module.js.map