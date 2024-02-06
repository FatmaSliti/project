from mongoengine import  DynamicDocument, StringField, EmailField, ListField, ReferenceField, IntField, FloatField, Document

class Shift_Mongo_Document(DynamicDocument):
    staff = ReferenceField('Staff_Mongo_Document', required=True)  
    transaction= ListField()
    events=ListField()

