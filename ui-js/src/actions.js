// Actions Type for Covid19test_alt.js and  Start_alt.js
export const CONDUCT_CLICKED = 'conduct_clicked';
// Actions for Start_alt.js
export const conductclick = (payload) => ({
   type: CONDUCT_CLICKED,
    payload
 });

// Actions Type for Covid19test.js and  Start.js
export const CONDUCT_TEST = 'conduct_test';
// Actions for Covid19test.js and  Start.js
const conductTest = (payload) => ({
    type: CONDUCT_TEST,
    payload: 1,
});

