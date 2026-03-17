from models import Dog, Cat
dog = Dog("Bobik", 3, "brown", "Husky")
cat = Cat("Murka", 2, "white", True)

animals = [dog, cat]
for animal in animals:
    print(animal.speak())
    print(animal.eat())
print(dog.fetch())
print(cat.climb())
print(dog)
print(cat)