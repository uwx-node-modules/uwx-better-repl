'use strict';

const repl = require('repl');

const r = repl.start({
  prompt: "> ",
  useGlobal: true,
});

r.context.c = function() {
  for (var i = 0; i < arguments.length; i++) {
    console.log("_" + i + " = " + arguments[i]);
    global["_" + i] = arguments[i];
  }
};

module.exports = r;
