from jose import JWTError, jwt
from datetime import datetime, timedelta    #timedelta is used to calculate time difference

#     +============================================+
#     | 3 PIECES OF INFORMATION NEEDED FOR A TOKEN |
#     +--------------------------------------------+
#     | secret key                                 |
#     | algorithm                                  |
#     | expiration time                            |
#     +============================================+

# secret key
SECRET_KEY = "9f7b4d2c8a6e1f3d5b9c7a2e4f6d8c1b3a5e7f9d2c4b6a8e1f3d5c7b9a2e4f6"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# function to create access token
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.utcnow()+timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt