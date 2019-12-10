# Average Time Consumption - Search and Filter


## **Worsr Case Scenarios - Testing Regex vs Str.Match vs Manual Match**


### _Str.Match on a Big-String_

- Testing Str.Match on a Big-String 10K Average is `4.6503 milliseconds`


### _Str.Match on an Array of Strings_

- Testing Str.Match on a Array of Strings 10K Average is `2.9332 milliseconds`


### _Regex.test on an Array of Strings_

- Testing Regex.test on Array of Strings 10K Average is `2.0311 milliseconds`


### _Regex.test on an Array of Objects(uniform shape)_

- Testing Regex.test on Array of Objects(uniform shape) 10K Average is `2.2159 milliseconds`


### _Regex.test on an Array of Objects(shape variation)_

- Testing Regex.test on Array of Objects(shape variation) 10K Average is `1.8141 milliseconds`


### _Regex.test on an Array of Objects(shape variation and constructor)_

- Testing Regex.test on Array of Objects(shape variation and constructor) 10K Average is `5.2285 milliseconds`


### _Regex.test on an Array of Objects(Uniform shape and random string value)_

- Testing Regex.test on Array of Objects(Uniform shape and random string value) 10K Average is `2.2815 milliseconds`
