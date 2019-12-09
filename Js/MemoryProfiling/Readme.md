# Memory Profiling and Respective Results

> Run `npm install` && `npm run COMPARISON`


> memoryprofiling@1.0.0 COMPARISON /Users/a212603671/Development/Code-Kata/Js/MemoryProfiling
> npm run compare0 && npm run compare1 && npm run compare2


> memoryprofiling@1.0.0 compare0 /Users/a212603671/Development/Code-Kata/Js/MemoryProfiling
> node Memory.Consumption.When.Data.is.Partially.Stringyfied.js 

## Partially Stringified - _Memory - ORIGIN - 4.7 MB_

- Memory - After creating container array and the constant - 4.99 MB
- Memory - After creating ObjectFactory - 5 MB
- Memory - After creating 20k Objects - with 15 properties Each - 74.54 MB
- ***Partially Stringified - Effective Memory Utilized - After creating 20k Objects - with 15 properties Each - 69.87 MB***

> memoryprofiling@1.0.0 compare1 /Users/a212603671/Development/Code-Kata/Js/MemoryProfiling
> node Memory.Consumption.When.Data.is.Strigified.js

## All Stringified - _Memory - ORIGIN - 4.7 MB_ 

- Memory - After creating container array and the constant - 4.99 MB
- Memory - After creating ObjectFactory - 5 MB
- Memory - After creating 20k Objects - with 15 properties Each - 75.63 MB
- ***All Stringified-Effective Memory Utilized - After creating 20k Objects - with 15 properties Each -  70.96 MB***

> memoryprofiling@1.0.0 compare2 /Users/a212603671/Development/Code-Kata/Js/MemoryProfiling
> node Memory.Consumption.When.POJOs.are.used.js 

## POJO - _Memory - ORIGIN - 4.7 MB_
- Memory - After creating container array and the constant - 4.99 MB
- Memory - After creating ObjectFactory - 5 MB
- Memory - After creating 20k Objects - with 15 properties Each - 26.16 MB
- ***POJO - Effective Memory Utilized - After creating 20k Objects - with 15 properties Each - 17.94 MB***
