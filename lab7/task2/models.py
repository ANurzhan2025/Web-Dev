class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color
    def speak(self):
        return f"{self.name} makes sound"
    def eat(self):
        return f"{self.name} eats"
    def __str__(self):
        return f"{self.name}, {self.age} years, {self.color}"
class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed
    def speak(self):
        return f"{self.name} says WOOF!"
    def fetch(self):
        return f"{self.name} fetches ball"
class Cat(Animal):
    def __init__(self, name, age, color, lazy):
        super().__init__(name, age, color)
        self.lazy = lazy
    def speak(self):
        return f"{self.name} says MEOW!"
    def climb(self):
        return f"{self.name} climbs tree"
    
