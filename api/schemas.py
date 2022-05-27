import json
import jsonschema
from pydantic import BaseModel
from typing import Optional

"""
Schemas for users
"""


class UserCreate(BaseModel):
    id: Optional[int]
    username: str
    password: str


"""
Schemas for levels
"""
class LevelCreate(BaseModel):
    id: Optional[int]
    userId = int
    name: str
    levelData: dict

"""
Schemas for level stats
"""
class LevelStatsCreate(BaseModel):
    id: Optional[int]
    userId = int
    levelId = int
    deaths: int
    time: int
