from django.shortcuts import render
from rest_framework.views import APIView 
from rest_framework.response import Response
from rest_framework import status
from core.tracker import parseProductPage
import jwt, datetime
from . models import *
from . serializers import *
from django.core import serializers

# Create your views here.
class ProductView(APIView):
    queryset=product.objects.all()
    
    serializer_class = ProductSerializer
    def get(self, request):
        #e=Sheet.objects.get(title='t3')
        #(make_json(e.sheet))[1]
        mydetail = [ {"username": detail.username,"productname": detail.productname, "domain": detail.domain, "pid": detail.pid}
        for detail in product.objects.all()] 
        return Response(mydetail) 
    def post(self, request):
        reqdata=request.data
        #print(reqdata)
        url = str(reqdata['url'])
        username = reqdata['username']
        #print(url)
        trackerObj = parseProductPage(url)
        
        data = {
            "username": username,
            "productName": trackerObj['productName'],
            "domain": trackerObj['domain'],
            "pid": trackerObj['pid']
        }
        serializer = ProductSerializer(data=data)
        print(data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        #return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)