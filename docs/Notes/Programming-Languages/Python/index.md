---
# Basic Metadata
description: 
tags: 
alias:
# Publisher Metadata
share: true
# Site configs
aside: true
prev: false
next: false
# Dataview Query Fields
content-type: 
content-tags:
  - Computer-Language
  - Object-Oriented
  - Interpreted
---
# Python
Python is a versatile, high-level programming language known for its readability and clean syntax. **Guido van Rossum** created Python and released its first version in 1991. Python's development began in the late 1980s when Guido van Rossum, a Dutch programmer, started working on it during his Christmas holidays in December 1989. He aimed to create a language that emphasized code readability and ease of use, allowing developers to express concepts in fewer lines of code than languages like C++ or Java. The first official version, *Python 0.9.0*, was released in *February 1991*. Python's design philosophy, often summarized as "The Zen of Python," emphasizes *simplicity*, *readability*, and a focus on *practicality*. *Python 2.0*, released in *2000*, introduced list comprehensions and garbage collection. *Python 3.0*, released in *2008*, marked a significant shift with various changes to improve consistency and eliminate redundancies in the language.

Some of the key features that python emphasizes are as follows
- **Readability** - Python's syntax is designed to be easily readable and intuitive, which reduces the cost of program maintenance and enhances collaboration.
- **High-level Language** - Python abstracts complex low-level details, making it accessible for beginners and efficient for experienced developers.
- **Dynamic Typing** - Variables are dynamically typed, allowing them to change type during runtime.
- **Extensive Standard Library** - Python includes a wide range of modules and libraries for various tasks, from web development to data analysis.
- **Interpreted** - Python is interpreted, which means code can be executed directly without the need for compilation.
- **Cross-Platform** - Python is available on various platforms, including Windows, macOS, and Linux.

Today, Python has grown to become one of the most popular programming languages due to its versatility, ease of learning, and widespread use across diverse domains, including web development, data science, artificial intelligence, automation, and more.

## Getting Started
Python can be run in 3 different ways and their features and who might consider using them are tabulated below. 

| Environment                              | Description                                                                                                                                                                                                      | Examples                                                                                     | Use Cases                                                                                                            |
| ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Text Editors                             | Platforms to write any form of textual data (of many file types) that can be customized with plugins to add functionality.                                                                                       | [Sublime Text](http://www.sublimetext.com/), [Atom](https://atom-editor.cc/)                 | Useful for lightweight python programming or scripting without the need to install any heavy software.               |
| Integrated Development Environment (IDE) | Development environment designed specifically to run python code. These are mostly larger programs with additional functionality geared towards python development. They are often offered as a Freemium option. | [PyCharm IDE](https://www.jetbrains.com/pycharm/), [Spyder IDE](https://www.spyder-ide.org/) | Useful for hardcore python development and when additional features are required to ease the process of development. |
| Notebook Environment                     | Platforms that are well suited for learning python that support in-line markdown notes. These are not regular `.py` files. But they support input and output one after the other.                                | [Jupyter](https://jupyter.org/)                                                              | Useful in visualizing and learning python in the same environment. It supports sharing of these notebooks with ease. |

Once python is installed, check if python is properly configured by checking the python version with the following command.
:::code-group
```python [Python Version]
python -V
```

```txt [Output]
Python 3.11.3
```
:::
Now, Python is up and running and ready to change the world. But before changing the world, here's a customary `Hello World` example in python.

::: code-group
```python [Hello World Example]
print("Hello World")
```

```txt [Output]
Hello World
```
:::

---
## Core Concepts

### Input and Output
Two of the most frequent activities any programming language performs is displaying information to a user and getting input from the users.

Printing to the console can be performed in python using the `print` statement. To print in multiple lines, `\n` can be used to indicate line breaks, where `\` functions as the escape character. To concatenate multiple strings, the `+` operator can be used. However, to concatenate a number data type to a string, the number must be converted to a textual representation before it can be concatenated.

In order to avoid multiple concatenations, the concept of `fstrings` can be used. It is accomplished by adding an `f` before the first quote within the print function, followed by mentioning the variable name within curly brackets `{}`.

```python
# Printing to the console
print("Hello World")

# Printing in multiple lines 
print("Hello World! \nPython is a beginner friendly programming language.")

# Concatenation when printing 
age = 10
name = "David"
print("Hello there " + name + ", your age is " + str(age) + ".")

# Using f-strings to avoid concatenations 
age = 10
name = "David"
print(f"Hello there {name}, your age is {age}.")
```

The `input` statement can be used to accept values from the user. The input statement waits for user input before continuation of code execution. Values accepted by the input statement are stored as text by default. If these values need to be used downstream, explicit type conversions must be made along with getting these values from the users.

```python
# Getting input from the users
name = input("What is your name? ")
age = int(input("What is your age? "))
```

### Commenting
Commenting and Indentation are some of the most commonly used tools when writing code. Both of these help in making the code easier to read, understand and debug. The concept of [Self-Documenting Code](Self-Documenting%20Code.md#) is emphasized here. It means that any code written must be structured in a way that it is evident of what action it performs.

Comments are a way to document code as it is written. While code must preferably be self-documenting, comments play a major part in making sure that the code is easier to understand and troubleshoot. In python, single line commenting is made by using the `#` symbol.

Python does not have a specific syntax for multi-line comments, thus a multi-line comment is a sequence of single-line comments each preceded with a `#` sign. 

However, as python ignores string literals that are not assigned to a variable, a multi-line string can be used similar to a multi-line comment. By this way, python will read the string, but as the string is not assigned to a variable, it is ignored. Multi-line strings are made using triple quotes (`"""`) and placing the comment within the pair of these triple quotes.

```python
# this is a single-line comment 

# this is a multi-line comment - line 1
# this is a multi-line comment - line 2
# this is a multi-line comment - line 3

"""
This is a multi-line string 
This is a string literal not assigned to a variable.
Thus, python ignores it
This makes this string act as a multi-line comment
"""
```

### Indentation
Indentation refers to the spaces at the beginning of a code line. In most languages, indentation just serves the purpose of making the code easy to read and follow along. But in python, *indentation is crucial*. Python relies on indentation to differentiate blocks of code, while other languages might use braces.

Typically 4 spaces are used as the indentation standard, however even 1 space would work. The same standard must be used in a given block of code, meaning if 4 spaces are used in a block of code, then all code within the same block must use the same 4 spaces as indentation. Most text-editors and IDEs use 1 TAB key as 4 SPACES, so that less key strokes are made.

Any code that is not indented properly will throw an error on execution.

```python
# Indentation in python - Correct practice
a = 10
b = 20
if  b > a:
	print("b is greater than a")

# Indentation in python - Wrong practice - Throws an error
a = 10
b = 20
if  b > a:
print("b is greater than a")

```

### Variables
Variables are *placeholders in memory to store some value*. In python, variables cannot be just defined whereas a variables is created upon declaring it.
To create a variable, it is declared with its appropriate data type syntax. Python can *auto-detect the data type* that is being assigned. Variables can also be *assigned explicitly* stating what data type must be stored in memory. Variables are *reusable or mutable*, meaning when a new value is assigned to a variable, the old value is overwritten and the new value propagates further.

```python
# Assigning values to variables
a = 10
b = "Hello World"
c = 233.42

# Single line multiple variable value assignment
d,e,f = 10,11,12

# Same value to muliple variables 
x = y = z = 100

```

#### Variable Naming Conventions
Variable naming conventions are a set of rules governing what is acceptable as variable names and what is not. the following are the variables naming conventions to be followed in python
1. Variable names can only *contain alphanumeric characters* (0-9, a-z) and underscore.
2. Variable names can *start with an alphabet* or an *underscore*.
3. Variable names *cannot start with a number*.
4. Variable names are *case-sensitive*.
5. Multi-word variable names can be named with one of the preferred standards of [programming case types](../../Software-Engineering/Concepts/index.md#programming-case-types)

```python
# Acceptable Naming Conventions 
variable = 10
Variable = 10
_variable = 10
variable_01 = 10
myVariable = 10
MyVariable = 10
My_Variable = 10
my_variable = 10

# Unacceptable Naming Conventions - Will throw error
01variable = 10
%variable = 10

```

#### Type Conversions
Type conversions (converting the value stored in a variable from one data type to another) in python can be done in two ways.
1. **Implicit Conversions** - Data types that are converted into another by the python interpreter during execution.
2. **Explicit Conversions** - Data type conversions that are explicitly mentioned by the program. Explicit conversions offer additional arguments in certain conversions.

In order to get the data type of a variable, the `type()` function can be used.  

```python
# Getting the data type of a variable 
a = 5
b = type(a)
print("The data type of a is " + b)

# Implicit type conversions 
a = 10
b = 2.5
a = a + b
print("a is of type: " + type(a))

# Explicit type conversions 
a = 10
a = float(a)
print("a is of type: " + type(a))
```

#### Variable Scoping
Scope in variables refers to the duration of execution until which the variable can be called for utilization. 
Some points to consider for variable scoping are as follows 
- Variables declared on the main function or the initial point of code execution are set to be global scoped. Meaning that they can be accessed along the entire runtime of the code/program.
- Variables declared within a block of code are referred to as local scoped and are available for utilization as long as the block of code gets executed.
- When the same name for the variables are used in both global and local scoped variables, then the local scoped variable takes precedence.
- To declare global scoped variables from within a function, use the `global` keyword.

```python
# Variable scoping 
a = 10 # a is global scoped declared globally
if a < 20:
	b = 5 # b is local scoped declared locally
	global c = a + b # c is global scoped declared locally
print(c)
```

### Data Types
Any data that can be stored in computer memory to be utilized when the program is executed belongs to a particular type. 
The default data types used in Python are given below classified into related types.

| Data Type Group | Data Type              | Notation  | Description                                                                                                                                                       |
| --------------- | ---------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Text Types      | String                 | str       | Strings are sequences of alphanumeric characters surrounded by single, double or triple (multi-line) quotations.                                                  |
| Numeric Types   | Integer                | int       | Int or integer is a whole number (without decimals) both positive or negative and of unlimited length.                                                            |
| Numeric Types   | Floating Point Numbers | float     | Float or floating point number is a positive or a negative number with one or more decimal digits. It can also be used to denote numbers in scientific notations. |
| Numeric Types   | Complex Numbers        | complex   | Complex numbers are numbers combinations of real and imaginary numbers. In python, imaginary part is represented using 'j'.                                       |
| Sequence Types  | List                   | list      | Lists are collections of values of same or different data types. Lists are ordered, changeable, allow duplicates and zero (0) indexed.                            |
| Sequence Types  | Tuples                 | tuple     | Tuples are collections of values of same or different data types. Tuples are ordered and unchangeable, allow duplicates and zero (0) indexed.                     |
| Sequence Types  | Range                  | range     |                                                                                                                                                                   |
| Mapping Types   | Dictionary             | dict      | Dictionaries are a collection of Key-Value pairs of data that are ordered, changeable and does not allow duplicate keys.                                          |
| Set Types       | Set                    | set       | Sets are collections of values of the same data type and are unordered, unchangeable, unindexed, mutable and does not allow duplicates.                           |
| Set Types       | Frozen Set             | frozenset | Frozensets are collections of values of the same data type and are unordered, unchangeable, unindexed, immutable and does not allow duplicates.                   |
| Boolean Types   | Boolean                | bool      | Booleans are used to represent the states of either True or False                                                                                                 |
| Binary Types    | Bytes                  | bytes     |                                                                                                                                                                   |
| Binary Types    | Byte Array             | bytearray |                                                                                                                                                                   |
| Binary Types    | Memory View            | memory    |                                                                                                                                                                   |
| Note Type       | None Type              | NoneType  | NoneType is not a value, but merely an absence of it. It is similar to null in some other programming languages.                                                  |

#### Text Types
Python has only one default data type for working with strings of any length.

1. **Strings** (`str`)
	- Strings are sequences of alphanumeric characters surrounded by single, double or triple (multi-line) quotations.
	- Strings support many default functions and methods which can be found [here](https://www.w3schools.com/python/python_strings_methods.asp)
	- These methods that act on the string do not change the existing string, but return a new one.

```python
# Variable assignment to strings
name = "Robert Jenkins" # Implicit
city = str("New York") # Explicit

# Accessing part of the string
message = "Hello World"
print(message[3]) # prints the 4th character --> l 
print(message[2:5]) # prints 3rd, 4th & 5th characters --> llo
print(message[2:]) # prints from the 3rg character till the end
print(message[-5:-2]) # prints 3 characters from 5th last position to 2 last --> Wor
```

#### Numeric Types
Python accepts 3 numeric data types such as `int`, `float` and `complex` 

1. **Integers** (`int`)
	- Int or integer is a whole number (without decimals) both positive or negative.
	- Integers can be of unlimited length.
2. **Floating Point Numbers** (`float`)
	- Float or floating point number is a positive or a negative number with one or more decimal digits.
	- It can also be used to denote numbers in scientific notations.
3. **Complex Numbers** (`complex`)
	- Complex numbers are numbers combinations of real and imaginary numbers.
	- In python, imaginary part is represented using 'j'.

```python
# Variable assignment to integers
x = 10 # Implicit
x = int(10) # Explicit

# Variable assignment to floats
x = 233.12 # Implicit
x = 6.023E23 # Implicit
x = float(233.12) # Explicit

# Variable assignment to complex numbers
x = 10j # Implicit
x = 5+2j # Implicit
x = int(10j) # Explicit
```

#### Sequence Types 
Sequence data types are collections of data referred

1. **Lists**
	- Lists are used to store multiple items in a single variable.
	- List can be collection of different data types in itself.
	- Lists are ordered, changeable, allow duplicates.
	- Lists are indexed and can be accessed with a positional parameter.
	- Square brackets (`[]`) are used to define lists.
2. **Tuples**
	- Tuples are collections of values of same or different data types.
	- Tuples are ordered and unchangeable, allow duplicates.
	- Tuples are indexed and can be accessed with a positional parameter.
	- Round brackets (`()`) are used to define tuples.
	- However, when accessing an element, the index is enclosed inside square brackets like `my_tuple[0]`.
3. **Range**
	- Range is a self iterating data collection.
	- It is most commonly used when iterating over the entries in a collection.
	- It evaluates to a sequence of numbers starting from zero (by default) and incrementing by 1 (by default).

```python
# Assigning values to a list 
mylist = ["apple", "banana", "cherry"]

# Accessing elements from a list 
print(mylist[0])

# Assigning values to a tuple 
mytuple = ("apple", "banana", "cherry")

# Accessing elements from a tuple 
print(mytuple[0])

# Using range to iterate over a collection 
for i in range(5):
	print(i) # prints from 0 to 4 -> iterates 5 times

```

#### Mapping Types 
Maps are a key-value combination of data. The value is uniquely identified by using the key.

1. **Dictionary**
	- Dictionaries are key-value pair data type implementation in python.
	- They are ordered, changeable and does not allow duplicate keys.

```python
# Assigning values to a dictionary 
thisdict = {  
  "brand": "Ford",  
  "model": "Mustang",  
  "year": 1964  
}

# Accessing elements of a dictionary (using key)
print(thisdict["brand"])
```

#### Set Types 
1. Set
	- Sets are collections of values of the same or different data type.
	- They are unordered, unchangeable, unindexed, mutable.
	- Sets do not allow duplicates.
2. Frozen Set
	- Frozensets are collections of values of the same data type and are unordered, unchangeable, unindexed, immutable and does not allow duplicates.

```python
# Assigning a set 
myset = {"apple", "banana", "cherry"}
```

#### Boolean Types 
Boolean data represents the state of ON/OFF, TRUE/FALSE or 1/0.

1. **Bool**
	- In python, the bool data type has the values `True` and `False`

```python
# Evaluating expressions to boolean outputs 
print(10 > 9)
print(10 < 9)
```

#### Binary Types 
1. Bytes
	- Bytes
2. Byte Array
	- Byte Array
3. Memory View
	- Memory View

#### None Type
None or Null are absence of values where an empty string (`""`) or a zero (`0`) as a value cannot be substituted.

1. **NoneType**
	- In python, the none type is represented by `None` keyword.

```python
x = None
```

> [!abstract] Collections of data in python
> In python, Lists Tuples, Sets and Dictionaries are the collection data types as they include a collection of similar of different data within them.

> [!question] Arrays in Python
> Python does not support arrays by default. However the NumPy library can be imported to add support to arrays and array methods. In place of arrays, lists are commonly used.

### Operators
Operators are entities that are used to perform operations on variables and values. Python provides the following operator types
1. Arithmetic Operators 
2. Assignment Operators 
3. Comparison Operators 
4. Logical Operators 
5. Identity Operators 
6. Membership Operators 
7. Bitwise Operators 

#### Arithmetic Operators 
These are used with numeric values to perform numeric calculations on them.

| Operator | Name           | Example |
| -------- | -------------- | ------- |
| +        | Addition       | x + y   |
| -        | Subtraction    | x - y   |
| *        | Multiplication | x * y   |
| /        | Division       | x / y   |
| %        | Modulus        | x % y   |
| **       | Exponentiation | x ** y  |
| //       | Floor Division | x // y        |

#### Assignment Operators
The assignment operators are used to assign values to variables. 

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| =        | x = 5     | x = 5        |
| +=       | x += 3    | x = x + 3    |
| -=       | x -= 3    | x = x - 3    |
| \*=      | x \*= 3   | x = x \* 3   |
| /=       | x /= 3    | x = x / 3    |
| %=       | x %= 3    | x = x % 3    |
| //=      | x //= 3   | x = x // 3   |
| \*\*=    | x \*\*= 3 | x = x \*\* 3 |
| &=       | x &= 3    | x = x & 3    |
| \|=      | x \|= 3   | x = x \| 3   |
| ^=       | x ^= 3    | x = x ^ 3    |
| >>=      | x >>= 3   | x = x >> 3   |
| <<=      | x <<= 3   | x = x <<= 3  |

#### Comparison Operators
They are used to compare two values.

| Operator | Name                     | Example |
| -------- | ------------------------ | ------- |
| ==       | Equal                    | x == y  |
| !=       | Not Equal                | x !=    |
| >        | Greater Than             | x > y   |
| <        | Lesser Than              | x < y   |
| >=       | Greater Than or Equal To | x >= y  |
| <=       | Lesser Than or Equal To  | x <= y  |

#### Logical Operators
Logical Operators are used to combine conditional statements.

| Operator | Description                                            | Example          |
| -------- | ------------------------------------------------------ | ---------------- |
| and      | Returns `true` if both statements are `true`           | x < 5 and x < 10 |
| or       | Returns `true` if any of the statements is `true`      | x < 5 or x < 4   |
| not      | Reverses the result - `true` is `false` and vice versa | not (x < 5)      |

#### Identity Operators
Identity operators are used to compare objects if they are the actual same objects. These do not check for the similarity of content within the variable, but the actual memory location.

| Operator | Description                                            | Example    |
| -------- | ------------------------------------------------------ | ---------- |
| is       | Returns `true` if both variables are the same object   | x is y     |
| is not   | Returns `true` is both variables are different objects | x is not y |

#### Membership Operators
Membership operators are used to test if a sequence is presented in an object of comparison.

| Operator | Description                                                                        | Example    |
| -------- | ---------------------------------------------------------------------------------- | ---------- |
| in       | Returns `true` if a sequence with the specified value is present in the object     | x in y     |
| not in   | Returns `true` if a sequence with the specified value is not present in the object | x not in y |

#### Bitwise Operators
Bitwise operators are used to compare binary numbers.

| Operator | Name                 | Description                                                                                             |
| -------- | -------------------- | ------------------------------------------------------------------------------------------------------- |
| &        | AND                  | Sets each bit to 1 if both bits are 1                                                                   |
| \|       | OR                   | Sets each bit to 1 if one of the two bits is 1                                                          |
| ^        | XOR                  | Sets each bit to 1 if only one of two bits is 1                                                         |
| ~        | NOT                  | Inverts the bits                                                                                        |
| <<       | Zero Fill Left Shift | Shift left by pushing zeros in from the right and let the leftmost bits fall off                        |
| >>       | Signed Right Shift   | Shift right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off |

### Flow Control and Loops
Flow controls and loops are crucial part of any programming language. They facilitate to logically process a piece of information and take actions based on the outcome.
**Flow statements** are used to control the flow of code execution based on a logical test. If the test case passes, a specific block of code is executed, and if it fails, another action can be triggered.
Loops are used to iterate over a condition multiple times, based on a condition. These form the foundation of repeatability and consistency when performing operations with code, as the same code is iterated over multiple times.

::: info
> [!abstract] Pass, Break and Continue 
> The `pass` statement can be used to skip a block from getting executed. This is done as conditional blocks cannot be empty (without any code).
> 
> The `break` keyword can be used to exit a block of code prematurely without evaluating it. It can be used to exit out of the loop.
> 
> The `continue` keyword can be used to skip to the next iteration of the loop while ending the current iteration.
:::

::: warning
> [!caution] Premature exits and else blocks
> When a loop is exited using a `break` statement, the else block will not be executed.
:::

#### If-elif-else Flow Control Statement
The is, else and elif statement is used to check for conditions and perform code executions. The order of execution is very important when dealing with the `if-elif-else` statements. The code is executed from top to bottom and the if condition checking process ends when the python finds the first `True` condition. The remaining conditions are not evaluated. It is also possible to chain multiple logical tests using the logical operators in python. The if conditions can also be nested, to check conditions within conditions. 

```python
# if-elif-else flow control statement
computer_value = 10
user_input = int(input("Enter a number from 1 to 10"))
if(computer_value = user_input ):
	print("the player guessed right")
elif(computer_value < user_input):
	print("User guessed a larger number")
else:
	print("User guessed a smaller number")

# Simple one-condition if statement 
a = 10
b = 20
if(a=b): print("a equals to b")

# Simple one-condition if-else condition
a = 10
b = 20
print("a equals to b") if(a=b) else print("a and b are not equal")

# Evaluating numtiple conditions 
a = 5
b = 10
c = 20
if (a < b) and (a < c):
	print("a is the smallest number")
elif (a == 0) or (b == 0) or (c == 0):
	print("One entry among a,b,c is a zero")
elif not (a == c ):
	print("a and c are non-identical")
else:
	print("All conditions have failed")

# Nested if-elif-else statements
a = 10
b = 20
c = 5	
if a > b:
	if c > a:
		print("c is the largest")
else:
	print("a is not greater")

# Skipping a block using the pass statement
a = 10
b = 20
if a > b:
	pass
``` 

#### While Loop
A while loop is used to iterate over a block of code as long as the condition evaluates to true.

The `else` statement can be used to evaluate a block of code when the condition for a while loop evaluates to a false.

```python
# Simple while loop to evaluate a conditions 
a = 10
while(a>0):
	print("The value of a is" + str(a))
	a = a - 1

# Using break to exit the loop
a = 10
while(a>0):
	if(a == 4): break
	print("The value of a is" + str(a))
	a = a - 1

# Using continue to skip current iteration
a = 10
while(a>0):
	if(a == 4): continue
	print("The value of a is" + str(a))
	a = a - 1

# Using else to run a block of code when the condition evaluates to false
a = 10
while(a>0):
	print("The value of a is" + str(a))
	a = a - 1
else:
	print("The Loop has ended")
```

#### For Loop
For loops are used to iterate over a block of code a set number of times. This loop is chosen when the number of times the looping has to be done is known.
Several ways can be used to supply the looping entity to the for loop. For loop is most often used over collection data types such as lists, sets, tuples and dictionaries.

```python
# Looping through a list 
my_list = ["apple", "oranges", "pineapples"]
for list_item in my_str:
	print(list_item )

# Looping through a string 
string = "Hello World"
for each_char in string:
	print(each_char)

# Looping through with range function
for i in range(5):
	print(i) # prints from 0 to 4 (5 times)

for i in range(2,5):
	print(i) # prints 2,3,4 (3 values: 5-2=3)

for i in range(2,11,2):
	print(i) # prints 2,4,6,8,10 (steps of 2)
```

The range function supplies values from the start till, but not including the end number, in whatever increment required. It can also take in negative numbers for the incrementing number argument.

### Methods
Methods are actions that can be performed to existing objects such as lists, strings, numbers and so on. Each object supports a variety of specific methods. 

#### String Methods 

| Method         | Description                                                                                   |
|----------------|-----------------------------------------------------------------------------------------------|
| `capitalize()`   | Converts the first character to upper case                                                    |
| `casefold()`     | Converts string into lower case                                                               |
| `center()`       | Returns a centered string                                                                     |
| `count()`        | Returns the number of times a specified value occurs in a string                              |
| `encode()`       | Returns an encoded version of the string                                                      |
| `endswith()`     | Returns true if the string ends with the specified value                                      |
| `expandtabs()`   | Sets the tab size of the string                                                               |
| `find()`         | Searches the string for a specified value and returns the position of where it was found      |
| `format()`       | Formats specified values in a string                                                          |
| `format_map()`   | Formats specified values in a string                                                          |
| `index()`        | Searches the string for a specified value and returns the position of where it was found      |
| `isalnum()`      | Returns True if all characters in the string are alphanumeric                                 |
| `isalpha()`      | Returns True if all characters in the string are in the alphabet                              |
| `isdecimal()`    | Returns True if all characters in the string are decimals                                     |
| `isdigit()`      | Returns True if all characters in the string are digits                                       |
| `isidentifier()` | Returns True if the string is an identifier                                                   |
| `islower()`      | Returns True if all characters in the string are lower case                                   |
| `isnumeric()`    | Returns True if all characters in the string are numeric                                      |
| `isprintable()`  | Returns True if all characters in the string are printable                                    |
| `isspace()`      | Returns True if all characters in the string are whitespaces                                  |
| `istitle()`      | Returns True if the string follows the rules of a title                                       |
| `isupper()`      | Returns True if all characters in the string are upper case                                   |
| `join()`         | Joins the elements of an iterable to the end of the string                                    |
| `ljust()`        | Returns a left justified version of the string                                                |
| `lower()`        | Converts a string into lower case                                                             |
| `lstrip()`       | Returns a left trim version of the string                                                     |
| `maketrans()`    | Returns a translation table to be used in translations                                        |
| `partition()`    | Returns a tuple where the string is parted into three parts                                   |
| `replace()`      | Returns a string where a specified value is replaced with a specified value                   |
| `rfind()`        | Searches the string for a specified value and returns the last position of where it was found |
| `rindex()`       | Searches the string for a specified value and returns the last position of where it was found |
| `rjust()`        | Returns a right justified version of the string                                               |
| `rpartition()`   | Returns a tuple where the string is parted into three parts                                   |
| `rsplit()`       | Splits the string at the specified separator, and returns a list                              |
| `rstrip()`       | Returns a right trim version of the string                                                    |
| `split()`        | Splits the string at the specified separator, and returns a list                              |
| `splitlines()`   | Splits the string at line breaks and returns a list                                           |
| `startswith()`   | Returns true if the string starts with the specified value                                    |
| `strip()`        | Returns a trimmed version of the string                                                       |
| `swapcase()`     | Swaps cases, lower case becomes upper case and vice versa                                     |
| `title()`        | Converts the first character of each word to upper case                                       |
| `translate()`    | Returns a translated string                                                                   |
| `upper()`        | Converts a string into upper case                                                             |
| `zfill()`        | Fills the string with a specified number of 0 values at the beginning                         |

#### List Methods 

| Method    | Description                                                                  |
|-----------|------------------------------------------------------------------------------|
| `append()`  | Adds an element at the end of the list                                       |
| `clear()`   | Removes all the elements from the list                                       |
| `copy()`    | Returns a copy of the list                                                   |
| `count()`   | Returns the number of elements with the specified value                      |
| `extend()`  | Add the elements of a list (or any iterable), to the end of the current list |
| `index()`   | Returns the index of the first element with the specified value              |
| `insert()`  | Adds an element at the specified position                                    |
| `pop()`     | Removes the element at the specified position                                |
| `remove()`  | Removes the item with the specified value                                    |
| `reverse()` | Reverses the order of the list                                               |
| `sort()`    | Sorts the list                                                               |

#### Tuple Methods

| Method  | Description                                                                             |
|---------|-----------------------------------------------------------------------------------------|
| `count()` | Returns the number of times a specified value occurs in a tuple                         |
| `index()` | Searches the tuple for a specified value and returns the position of where it was found |

#### Set Methods

| Method                        | Description                                                                    |
|-------------------------------|--------------------------------------------------------------------------------|
| `add()`                         | Adds an element to the set                                                     |
| `clear()`                       | Removes all the elements from the set                                          |
| `copy()`                        | Returns a copy of the set                                                      |
| `difference()`                  | Returns a set containing the difference between two or more sets               |
| `difference_update()`           | Removes the items in this set that are also included in another, specified set |
| `discard()`                     | Remove the specified item                                                      |
| `intersection()`                | Returns a set, that is the intersection of two other sets                      |
| `intersection_update()`         | Removes the items in this set that are not present in other, specified set(s)  |
| `isdisjoint()`                  | Returns whether two sets have a intersection or not                            |
| `issubset()`                    | Returns whether another set contains this set or not                           |
| `issuperset()`                  | Returns whether this set contains another set or not                           |
| `pop()`                         | Removes an element from the set                                                |
| `remove()`                      | Removes the specified element                                                  |
| `symmetric_difference()`        | Returns a set with the symmetric differences of two sets                       |
| `symmetric_difference_update()` | inserts the symmetric differences from this set and another                    |
| `union()`                       | Return a set containing the union of sets                                      |
| `update()`                      | Update the set with the union of this set and others                           |

#### Dictionary Methods

| Method       | Description                                                                                                 |
|--------------|-------------------------------------------------------------------------------------------------------------|
| `clear()`      | Removes all the elements from the dictionary                                                                |
| `copy()`       | Returns a copy of the dictionary                                                                            |
| `fromkeys()`   | Returns a dictionary with the specified keys and value                                                      |
| `get()`        | Returns the value of the specified key                                                                      |
| `items()`      | Returns a list containing a tuple for each key value pair                                                   |
| `keys()`       | Returns a list containing the dictionary's keys                                                             |
| `pop()`        | Removes the element with the specified key                                                                  |
| `popitem()`    | Removes the last inserted key-value pair                                                                    |
| `setdefault()` | Returns the value of the specified key. If the key does not exist: insert the key, with the specified value |
| `update()`     | Updates the dictionary with the specified key-value pairs                                                   |
| `values()`     | Returns a list of all the values in the dictionary                                                          |

### Functions
Functions are block of code that runs only when invoked (called upon). A function can accept input known as parameters and return an output as well. It is extensively used to simplify code by making a repetitive actions as a function that can be called upon when the action needs to be done.
In python a function is defined using the `def` keyword followed by a set of curved braces. Functions in python rely heavily on indentation and the function names by convention use `snake_casing`. 
After defining a function, it can be executed by calling the function and passing the necessary input parameters. Functions can accept parameters and can return values. In case if the function is called without parameters when the definition of the function does contain parameters, python throws an error.

::: info
> [!important] Parameters v Arguments 
> From a function's perspective:
> - A **parameter** is the variable listed inside the parentheses in the function definition.
> - An **argument** is the value that is sent to the function when it is called.
:::

Function parameters can also be assigned a default value to be used when the function is called without appropriate arguments.

```python
# Function with no arguments and no return value
def print_salutation():
	"""
	This function prints "Hello World!" on to the console.
	This is the example of a Docstring
	"""
	print("Hello World!")

print_salutation()

# Function with argument(s) and no retuen value
def greet_user(userName):
	"""
	Action: Greets user based on the user's name as input
	"""
	print(f"Hello {userName}!\nHow are you this fine day?")

greet_user("Noah")

# Function with argument(s) and return values
def sum_numbers(a,b):
	"""
	Action: Adds two numbers and returns the result
	"""
	c = a + b 
	return c

# Function with default arguments
def greet_user(userName = "Guest"):
	"""
	Action:
		Greets user based on the user's name as input.
		Also contains a default value for arguments
	"""
	print(f"Hello {userNAme}!\nHow are you this fine day?")

greet_user("Noah")
```

---

7. [Methods and Functions](../../../../Methods%20and%20Functions.md#)
8. [Object Oriented Programming](Object%20Oriented%20Programming.md#)
9. [Modules and Packages](Modules%20and%20Packages.md#)
10. [Errors and Exceptions Handling](Errors%20and%20Exceptions%20Handling.md#)
11. [Decorators](Decorators.md#)
12. [Generators](Generators.md#)

## Advanced Concepts
