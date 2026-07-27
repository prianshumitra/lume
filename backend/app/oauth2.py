from fastapi import Depends,status,HTTPException
from jose import JWTError,jwt
from datetime import datetime,timedelta, timezone    #timedelta is used to calculate time difference
from . import schemas,database,models
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from .config import settings

# Defines the OAuth2 Bearer authentication scheme using /login to obtain JWT access tokens.
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

#     +============================================+
#     | 3 PIECES OF INFORMATION NEEDED FOR A TOKEN |
#     +--------------------------------------------+
#     | secret key                                 |
#     | algorithm                                  |
#     | expiration time                            |
#     +============================================+

# secret key
SECRET_KEY = settings.secret_key
ALGORITHM = settings.algorithm
ACCESS_TOKEN_EXPIRE_MINUTES = settings.access_token_expire_minutes

# function to create access token
def create_access_token(data: dict):
    to_encode = data.copy()
    expire = datetime.now(timezone.utc)+timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

# function to verify access token
def verify_access_token(token: str, credentials_exception):

    try:

        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        id = payload.get("user_id")

        if id is None:
            raise credentials_exception
        token_data = schemas.TokenData(id=str(id))

    except JWTError:
        raise credentials_exception


    return token_data

# function to get current user and verify access token by using verify_access_token function
def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(database.get_db)):
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                                          detail="Could not validate credentials",
                                          headers={"WWW-Authenticate": "Bearer"})
    token = verify_access_token(token, credentials_exception)

    # get user by id
    user = db.query(models.User).filter(models.User.id == int(token.id)).first()

    return user