<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# isNativeFunction

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a native function.

<section class="intro">

Native functions execute native code that is typically not written in JavaScript, but a lower-level language like C++. This includes the JavaScript [built-in functions][mdn-builtins], functions implemented using [Node.js C/C++ addons][node-js-add-ons], and code compiled via [WebAssembly][webassembly].

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import isNativeFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-native-function@esm/index.mjs';
```

#### isNativeFunction( value )

Tests if a `value` is a native `function`.

```javascript
var bool = isNativeFunction( Date );
// returns true

function beep() {
    console.log( 'beep' );
}

bool = isNativeFunction( beep );
// returns false
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function, no-restricted-syntax, stdlib/no-builtin-math -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import isNativeFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-native-function@esm/index.mjs';

var bool = isNativeFunction( Math.sqrt );
// returns true

bool = isNativeFunction( Date );
// returns true

bool = isNativeFunction( RegExp );
// returns true

bool = isNativeFunction( function foo() {} );
// returns false

bool = isNativeFunction( 'beep' );
// returns false

bool = isNativeFunction( 5 );
// returns false

bool = isNativeFunction( true );
// returns false

bool = isNativeFunction( null );
// returns false

bool = isNativeFunction( [] );
// returns false

bool = isNativeFunction( {} );
// returns false

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-function`][@stdlib/assert/is-function]</span><span class="delimiter">: </span><span class="description">test if a value is a function.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-native-function.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-native-function

[test-image]: https://github.com/stdlib-js/assert-is-native-function/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-native-function/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-native-function/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-native-function?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-native-function.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-native-function/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-native-function/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-native-function/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-native-function/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-native-function/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-native-function/main/LICENSE

[mdn-builtins]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

[node-js-add-ons]: https://nodejs.org/api/addons.html

[webassembly]: https://webassembly.org/

<!-- <related-links> -->

[@stdlib/assert/is-function]: https://github.com/stdlib-js/assert-is-function/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
