from fastapi import HTTPException, APIRouter
from mongoengine import Document, StringField, DictField
from pydantic import BaseModel
from models.article_buttons_models import Button

article_btns_router = APIRouter()

class ButtonModel(Document):
    img = StringField()
    title = StringField()
    action = DictField()


@article_btns_router.get("/get_buttons_data")
def get_buttons_data(limit: int = 10):
    try:
        # Fetch limited buttons data from MongoDB
        buttons_data = ButtonModel.objects().limit(limit)
        
        # Convert QuerySet to a list of dictionaries
        buttons_data_list = [
            {"_id": str(item.id), "img": item.img, "title": item.title, "action": item.action}
            for item in buttons_data
        ]
        
        return {"buttons": buttons_data_list}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


@article_btns_router.post("/add_button")
def add_button(button: Button):
    try:
        # Create a ButtonModel instance from the Pydantic model
        button_model = ButtonModel(**button.dict())

        # Save the new button document to the MongoDB collection
        button_model.save()

        return {"message": "Button added successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal Server Error: {str(e)}")


@article_btns_router.post('/button-click')
def button_click(data: dict):
    try:
        button_id = data.get('id')
        
        if button_id is None:
            raise ValueError('Button ID is missing in the request body')

        # Perform actions with button_id
        return {"status": "success", "button_id": button_id}
    except Exception as e:
        return {"status": "error", "error_message": str(e)}
