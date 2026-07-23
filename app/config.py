from pydantic.v1 import BaseSettings


# * the settings class is used to store the environment variables
class Settings(BaseSettings):
    #PYDANTIC IS CASE INSENSITIVE. IT CONVERTS THE KEY TO UPPER CASE
    database_hostname: str
    database_port: str
    database_name: str
    database_username: str
    database_password: str
    secret_key: str
    algorithm: str
    access_token_expire_minutes: int

    class Config:
        env_file = ".env"

settings = Settings()