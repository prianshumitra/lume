from app.calculations import add

# function naming convention : test_function_name

def test_add():
    print("testing add function")
    assert add(5, 3) == 8
    # assert -> used to check if the condition is true or false

