---
# Basic Metadata
description: "Working with custom/user-defined blocks of code. Functions allow making the code easier to read, less verbose and concise"
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
  - Core-Concepts
content-sort-order: 7
---
# Methods and Functions in Python

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

::: info Parameters v Arguments 
From a function's perspective:
- A **parameter** is the variable listed inside the parentheses in the function definition.
- An **argument** is the value that is sent to the function when it is called.
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