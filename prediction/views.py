from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from core.tracker import parseProductPage
import jwt
import datetime
from . models import product, price
from . serializers import PriceSerializer, ProductSerializer
from django.core import serializers
from . prediction import predictionFunc
import pandas as pd


# Create your views here.
class ProductView(APIView):
    queryset = product.objects.all()

    serializer_class = ProductSerializer

    def get(self, request):
        mydetail = [{"username": detail.username, "productName": detail.productName, "domain": detail.domain, "pid": detail.pid, "url": detail.url}
                    for detail in product.objects.filter(username=(request.data)['username'])]
        return Response(mydetail)

    def post(self, request):
        reqdata = request.data
        url = str(reqdata['url'])
        username = reqdata['username']
        trackerObj = parseProductPage(url)
        print(trackerObj)
        data = {
            "username": username,
            "productName": trackerObj['productName'].replace("\n", "").replace("\t", ""),
            "domain": trackerObj['domain'],
            "pid": trackerObj['pid'],
            "url": url
        }
        serializer = ProductSerializer(data=data)
        print(data)
        if serializer.is_valid():
            print("test for save")
            serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def makeDateArray():
    import datetime

    today = datetime.datetime.now()
    today += datetime.timedelta(1)
    d2 = today.strftime("%B %d")
    print("d2 =", d2)


class TrackedPriceView(APIView):
    queryset = price.objects.all()

    serializer_class = PriceSerializer

    def get(self, request):
        mydetail = [{"date": detail.date, "price": detail.price}
                    for detail in price.objects.filter(pid=(request.GET.get('pid')))]
        return Response(mydetail)


class PredictedPriceView(APIView):
    queryset = price.objects.all()

    serializer_class = PriceSerializer

    def get(self, request):
        mydetail = [{"date": detail.date, "price": detail.price}
                    for detail in price.objects.filter(pid=(request.GET.get('pid')))]
        collectedPrices = []
        for priceObj in mydetail:
            collectedPrices.append(priceObj["price"])
        predictedPrices = predictionFunc(mydetail)
        # predObj = [ {"price": detail.price}
        # for detail in predictedPrices]
        return Response(predictedPrices)
