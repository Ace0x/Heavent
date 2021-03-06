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
    version="0.0.1",
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

@app.get("/users/{username}/{password}")
def get_user_with_username_and_password(username: str, password: str, db: Session = Depends(get_db)):
    return crud.get_user_with_username_and_password(db, username=username, password=password)

@app.post("/users")
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    return crud.create_user(db=db, user=user)

@app.put("/users/{user_id}")
def update_user(user_id: int, user: schemas.UserUpdate, db: Session = Depends(get_db)):
    return crud.update_user(db=db, user_id=user_id, user=user)

@app.delete("/users/{user_id}")
def delete_user(user_id: int, db: Session = Depends(get_db)):
    return crud.delete_user(db=db, user_id=user_id)

"""
Level requests
"""
@app.get("/levels")
def get_levels(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return crud.get_levels(db, skip=skip, limit=limit)

@app.get("/levels/{level_id}")
def get_level(level_id: int, db: Session = Depends(get_db)):
    return crud.get_level(db, level_id=level_id)

@app.get("/levels/users/{user_id}")
def get_user_levels(user_id: int, db: Session = Depends(get_db)):
    return crud.get_user_levels(db, user_id=user_id)

@app.post("/levels")
def create_level(level: schemas.LevelCreate, db: Session = Depends(get_db)):
    return crud.create_level(db=db, level=level)

@app.put("/levels/{level_id}")
def update_level(level_id: int, level: schemas.LevelUpdate, db: Session = Depends(get_db)):
    return crud.update_level(db=db, level_id=level_id, level=level)

@app.delete("/levels/{level_id}")
def delete_level(level_id: int, db: Session = Depends(get_db)):
    return crud.delete_level(db=db, level_id=level_id)

"""
Level stats requests
"""
@app.get("/level_stats/{user_id}/{level_id}")
def get_user_level_stats(user_id: int, level_id: int, db: Session = Depends(get_db)):
    return crud.get_user_level_stats(db=db, user_id=user_id, level_id=level_id)

@app.post("/level_stats")
def create_level_stats(level_stats: schemas.LevelStatsCreate, db: Session = Depends(get_db)):
    return crud.create_level_stats(db=db, level_stats=level_stats)

@app.put("/level_stats/{user_id}/{level_id}")
def update_level_stats_with_user_level(user_id: int, level_id: int, level_stats: schemas.LevelStatsUpdate, db: Session = Depends(get_db)):
    return crud.update_level_stats_with_user_level(db=db, user_id=user_id, level_id=level_id, level_stats=level_stats)

@app.put("/level_stats/deaths/{user_id}/{level_id}")
def update_death_level_stats(user_id: int, level_id: int, level_stats: schemas.LevelStatsDeathUpdate, db: Session = Depends(get_db)):
    return crud.update_deaths_with_user_level(db=db, user_id=user_id, level_id=level_id, level_stats=level_stats)

@app.put("/level_stats/wins/{user_id}/{level_id}")
def update_win_level_stats(user_id: int, level_id: int, level_stats: schemas.LevelStatsTimeVictoryUpdate, db: Session = Depends(get_db)):
    return crud.update_victories_and_time_with_user_level(db=db, user_id=user_id, level_id=level_id, level_stats=level_stats)

"""
Get data from views
"""
@app.get("/users/mostplayed/")
def get_most_playing_users(db: Session = Depends(get_db)):
    return crud.get_most_playing_users(db)

@app.get("/users/mostvictories/")
def get_most_winning_users(db: Session = Depends(get_db)):
    return crud.get_most_winning_users(db)

@app.get("/levels/mostliked/")
def get_most_liked_levels(db: Session = Depends(get_db)):
    return crud.get_most_liked_levels(db)

"""
Requests to stored procedures
"""
@app.get("/users/compare/{user1}/{user2}/")
def compare_users(user1: int, user2: int, db: Session = Depends(get_db)):
    return crud.compare_users(db, userId_1=user1, userId_2=user2)

@app.get("/levels/compare/{level1}/{level2}/")
def compare_levels(level1: int, level2: int, db: Session = Depends(get_db)):
    return crud.compare_levels(db, levelId_1=level1, levelId_2=level2)

@app.get("/levelstats/compare/{user1}/{user2}/{levelId}/")
def compare_levelstats(user1: int, user2: int, levelId: int, db: Session = Depends(get_db)):
    return crud.compare_levelstats(db, userId_1=user1, userId_2=user2, levelId=levelId)