// LICENSE : MIT
"use strict";
var Zuul = require("zuul");
var files = ['tests/example-1.js', 'tests/example-2.js'];
var zuul = new Zuul({
    files: files,
    ui: "jasmine2",
    phantom: true
});
zuul.run(function (passed) {
    passed ? process.exit(0) : process.exit(1);
});