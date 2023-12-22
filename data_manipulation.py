# Task 1: Data Preparation
persons = [
    {"name": "Alice", "age": 30, "city": "New York"},
    {"name": "Bob", "age": 22, "city": "Los Angeles"},
    {"name": "Charlie", "age": 28, "city": "Chicago"}
]

# Task 2: Filtering
filtered_persons = [person for person in persons if person["age"] >= 25]

# Task 3: Sorting
sorted_persons = sorted(filtered_persons, key=lambda x: x["city"])

# Task 4: Output
for person in sorted_persons:
    print(f"Name: {person['name']}, Age: {person['age']}, City: {person['city']}")
