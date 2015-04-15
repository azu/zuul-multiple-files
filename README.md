# zuul-multiple-files

zuul + jasmine2 issue POC.

## Installation

    npm install

## Tests

```
$ npm test

> zuul-multiple-files@1.0.0 test /azu/zuul-multiple-files
> DEBUG=zuul:phantombrowser node test.js

  zuul:phantombrowser url http://localhost:59886/__zuul +0ms
  zuul:phantombrowser msg: {"name":"Example1 :: should return true","type":"test"} +2s
starting Example1 :: should return true
  zuul:phantombrowser msg: {"name":"Example1 :: should return true","passed":true,"type":"test_end"} +2ms
passed: Example1 :: should return true
  zuul:phantombrowser msg: {"passed":true,"stats":{"failed":0,"passed":2,"pending":0},"type":"done"} +0ms
  zuul:phantombrowser msg: {"name":"Example2 :: should return false","type":"test"} +0ms
  zuul:phantombrowser msg: {"name":"Example2 :: should return false","passed":true,
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT