from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# URL to connect to the database
# change to where db is hosted
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:heavent1234@64.227.102.146:3306/heaventdb"

# Create the engine
engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)

# Create instance of the database using a session
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Inheritable base class for all models
Base = declarative_base()
