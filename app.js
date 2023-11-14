'use strict';
// IIFE - Immediately invoked Function Expression
// это JS функция, которая выполняется сразщу же после того, как она была определена

function init () {
   console.log('Start');
};
init();
init();

(function() {
   console.log('Start IIFE');
})();