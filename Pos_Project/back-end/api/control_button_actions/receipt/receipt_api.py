# from fastapi import FastAPI, APIRouter
# from pydantic import BaseModel

# receipt_router = APIRouter()

# class PrintRequest(BaseModel):
#     # Define any request body fields here
#     pass

# @receipt_router.post("/print-receipt")
# async def print_receipt(request_data: PrintRequest):
#     # Send back a response indicating the receipt has been printed
#     return {"message": "Receipt printed successfully"}


from fastapi import FastAPI, APIRouter
from pydantic import BaseModel
import asyncio

receipt_router = APIRouter()

class PrintRequest(BaseModel):
    # Define any request body fields here
    pass

@receipt_router.post("/print-receipt")
async def print_receipt(request_data: PrintRequest):
    # Introduce a delay of 5 seconds (for example)
    await asyncio.sleep(1)
    # Send back a response indicating the receipt has been printed
    return {"message": "Receipt printed successfully"}
