from fastapi import FastAPI, Depends, Request
from fastapi.responses import HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from sqlalchemy.orm import Session
import crud
import models
import schemas
from config import SessionLocal, engine

# Bind with database engine
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Reto Construccion de Software TC2005B",
    description="API para Heaven't",
    version="0..1",
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

origins = ["*"] # Middleware Wildcard

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"], # Allow all methods
    allow_headers=["*"], # Allow all headers
)

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")

"""
Default request
"""
@app.get("/", response_class=HTMLResponse)
async def main(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

"""
User requests
"""
@app.get("/users")
def get_users(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    users = crud.get_users(db, skip=skip, limit=limit)
    return users

@app.get("/users/{user_id}")
def get_user(user_id: int, db: Session = Depends(get_db)):
    return crud.get_user(db, user_id=user_id)

@app.post("/users")
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db=db, user=user)

"""
Level requests
"""
@app.get("/levels")
def get_levels(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_levels(db, skip=skip, limit=limit)

@app.post("/levels")
def create_level(level: schemas.LevelCreate, db: Session = Depends(get_db)):
    return crud.create_level(db=db, level=level)

"""
Level stats requests
"""
@app.get("/level_stats/{user_id}/{level_id}")
def get_all_user_level_stats(user_id: int, level_id: int, db: Session = Depends(get_db)):
    return crud.get_all_user_level_stats(db=db, user_id=user_id, level_id=level_id)

@app.post("/level_stats")
def create_level_stats(level_stats: schemas.LevelStatsCreate, db: Session = Depends(get_db)):
    return crud.create_level_stats(db=db, level_stats=level_stats)

"""
User stats requests
"""
@app.get("/user_stats")
def get_all_users_stats(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_all_users_stats(db, skip=skip, limit=limit)

@app.get("/user_stats/{user_id}")
def get_user_stats(user_id: int, db: Session = Depends(get_db)):
    return crud.get_user_stats(db=db, user_id=user_id)

@app.post("/user_stats")
def create_user_stats(user_stats: schemas.UserStatsCreate, db: Session = Depends(get_db)):
    return crud.create_user_stats(db=db, user_stats=user_stats)

@app.put("/user_stats/{user_id}")
def update_user_stats(user_id: int, user_stats: schemas.UserStatsUpdate, db: Session = Depends(get_db)):
    return crud.update_user_stats(db=db, user_id=user_id, user_stats=user_stats)





