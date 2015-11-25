System.registerDynamic("app/submain.js", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    console.log('submain.js');
  })();
  return _retrieveGlobal();
});

System.registerDynamic("app/main.js", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    console.log('Hello!');
  })();
  return _retrieveGlobal();
});
