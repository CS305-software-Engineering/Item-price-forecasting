from rest_framework import serializers
from . models import product


class ProductSerializer(serializers.ModelSerializer):
    username = serializers.CharField(max_length = 50)
    productName = serializers.CharField(max_length = 500)
    domain = serializers.CharField(max_length = 50)
    pid = serializers.CharField(max_length = 500)
    

    class Meta:
        model = product
        fields = ['username', 'productName', 'domain', 'pid']

    #def validate(self, attrs):
    #    if product.objects.filter(username=attrs['username']).exists():
    #        raise serializers.ValidationError({'username' : ('email in use')})
    #    return super().validate(attrs)

    #def create(self, data):
    #    return product.objects.create_user(**data)
