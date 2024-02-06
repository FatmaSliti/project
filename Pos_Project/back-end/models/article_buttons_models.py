from pydantic import BaseModel

class Button(BaseModel):
    img: str
    title: str
    action: dict
