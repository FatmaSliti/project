from fastapi import HTTPException, APIRouter
from config.log_config import logger
from models.shift_report_table_model import Shift_Body_Model
from api.shift_report_table.shift_report_table_model  import Shift_Mongo_Document

shift_router = APIRouter(tags=["SHIFT_API"])

@shift_router.get("/shift/", response_model=list[Shift_Body_Model])
def get_all_shifts():
    try:
        documents = Shift_Mongo_Document.objects()
        print(documents.count())
        shift_list = [Shift_Body_Model(**document.to_mongo()) for document in documents]
    except Exception as Ex:
        raise HTTPException(status=500, details=f' error {Ex} ')
        
    
    return shift_list
