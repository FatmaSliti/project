from pydantic import BaseModel

class Shift_Body_Model(BaseModel):
    transaction: list
    events: list

class shift_report_row_response_model(BaseModel):
    user: int
    shift: int
    transactions: str
    lpn: str = "NOLPN"
    # carteType: Literal['cardtype1', 'cardtype2']
    cardtype: str = 'None'

class Shift_report_add(BaseModel):
    ArticleID: int
    lpn: str
    price: float
    carteType: str
    duration: str

class shift_report_body_request_model(BaseModel):
    userid: int
    shiftid: int
    transaction: str
    lpn: str = "NOLPN"
    # carteType: Literal['cardtype1', 'cardtype2']
    carteType: str = 'None'
