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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# powm1

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate `bˣ - 1`.

<section class="intro">

<!-- <equation class="equation" label="eq:exponential_function_minus_one" align="center" raw="y = b^x - 1" alt="Exponential function minus one"> -->

```math
y = b^x - 1
```

<!-- <div class="equation" align="center" data-raw-text="y = b^x - 1" data-equation="eq:exponential_function_minus_one">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@bb29798906e119fcb2af99e94b60407a270c9b32/lib/node_modules/@stdlib/math/base/special/powm1/docs/img/equation_exponential_function_minus_one.svg" alt="Exponential function minus one">
    <br>
</div> -->

<!-- </equation> -->

When `b` is close to `1` and/or `x` is small, this implementation is more accurate than naively computing `bˣ` minus `1`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import powm1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-powm1@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-base-special-powm1/tags). For example,

```javascript
import powm1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-powm1@v0.2.1-esm/index.mjs';
```

#### powm1( b, x )

Evaluates `bˣ - 1`.

```javascript
var y = powm1( 2.0, 3.0 );
// returns 7.0

y = powm1( 4.0, 0.5 );
// returns 1.0

y = powm1( 0.0, 100.0 );
// returns -1.0

y = powm1( 100.0, 0.0 );
// returns 0.0

y = powm1( 0.0, 0.0 );
// returns 0.0

y = powm1( 3.141592653589793, 5.0 );
// returns ~305.0197

y = powm1( NaN, 3.0 );
// returns NaN

y = powm1( 5.0, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import powm1 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-powm1@esm/index.mjs';

var b;
var x;
var y;
var i;

for ( i = 0; i < 100; i++ ) {
    b = round( randu()*10.0 );
    x = round( randu()*10.0 ) - 5.0;
    y = powm1( b, x );
    console.log( '%d^%d - 1 = %d', b, x, y );
}

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

-   <span class="package-name">[`@stdlib/math-base/special/pow`][@stdlib/math/base/special/pow]</span><span class="delimiter">: </span><span class="description">exponential function.</span>

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

## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-powm1.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-powm1

[test-image]: https://github.com/stdlib-js/math-base-special-powm1/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/math-base-special-powm1/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-powm1/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-powm1?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-powm1.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-powm1/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-powm1/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-base-special-powm1/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-base-special-powm1/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-base-special-powm1/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-base-special-powm1/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-base-special-powm1/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-base-special-powm1/blob/main/branches.md

<!-- <related-links> -->

[@stdlib/math/base/special/pow]: https://github.com/stdlib-js/math-base-special-pow/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
