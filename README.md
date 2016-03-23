# random-encoder

> Lightweight way to generate multiple, random, reversible "hashes" or encoding

`random-encoder` can reversibly convert an integer into many pseudo-random hashes/shortcodes/encodings.

## Install

```sh
npm install --save random-encoder
```

## Usage

```js
import randomEncoder from "random-encoder";

randomEncoder.generate(100); // -> "txwkbqm"
randomEncoder.generate(100); // -> "nbmkbai"
randomEncoder.generate(100); // -> "rxuclio"
randomEncoder.generate(100); // -> "trsudww"
randomEncoder.generate(100); // -> "dzkcrsk"

randomEncoder.solve("txwkbqm"); // -> 100
randomEncoder.solve("nbmkbai"); // -> 100
randomEncoder.solve("rxuclio"); // -> 100
randomEncoder.solve("trsudww"); // -> 100
randomEncoder.solve("dzkcrsk"); // -> 100
```

This can come useful when you want to have multiple apparently-random URLs point to the same object.

More info here: http://programmers.stackexchange.com/questions/313553/how-do-i-generate-multiple-hashes-that-can-be-resolved-to-a-single-value
