from fastapi import HTTPException, Request, status, APIRouter
from config.log_config import logger
from models.report_base_model import shift_report_row_response_model, shift_report_body_request_model
from models.shift_base_model import Shift_report_add
from api.report.report_mongo_model import Report_document, Order, Item
from api.report.report_mongo_model import ShiftReport
from typing import List

report_router = APIRouter(prefix='/report')


############################################


@report_router.get('/shift_report', response_model=List[Shift_report_add])
def get_table_data():
    try:
        # Fetch data from MongoDB collection using MongoEngine
        documents = ShiftReport.objects()
        # Construct a list of dictionaries from MongoDB documents
        data = [
            {
                "ArticleID": document.ArticleID,
                "lpn": document.lpn,
                "price": document.price,
                "carteType": document.carteType,
                "duration": document.duration
            }
            for document in documents
        ]
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error: {e}")


#############################################


@report_router.get("/version",tags=["TEST_API"])
def xx():
    # I1 = Item(name="zvo", price=5000)
    # I1.save()
    # I1_id = I1.id
    # print(I1_id)
    # Order.objects(id='657c956409930d9b2d541ac4').update_one(push__items=I1)
    # o1 = Order(order_number='abcd')
    # o1.save()
    print(Order.objects.get(id='657c956409930d9b2d541ac4').to_mongo().to_dict())
    return 'mydict'


@report_router.get("/shift_reportt", response_model=list[shift_report_row_response_model],tags=["TEST_API"])
def shift_report(userid: int):
    try:
        documents = Report_document.objects(user=str(userid))
        logger.info(f'is={userid} found :{documents.count()} document')
        logger.debug(f'is={userid} found :{documents}')
        retlist = [shift_report_row_response_model(
            **document.to_mongo()) for document in documents]
    except Exception as Ex:
        raise HTTPException(status=500, details=f' error {Ex} ')
        # print('An exception occurred')
    logger.debug(f'is={userid} found :{documents.count()}')
    return retlist


@report_router.post("/shift_report",tags=["TEST_API"])
def apcds(RequestBody: shift_report_body_request_model, request: Request):
    R1 = Report_document(user=str(RequestBody.userid),
                        shift=RequestBody.shiftid,
                        clientip=request.client.host
                        )
    R1.save()
    return 'saved successfully'
