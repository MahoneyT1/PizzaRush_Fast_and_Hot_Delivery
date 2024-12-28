from .models import Order
from rest_framework.views import APIView
from .serializers import OrderSerializer
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404

class OrderViewList(APIView):
    """view class for listing all orders in the database"""

    def get(self, request, format=None):
        orders = Order.objects.all()
        
        # seialize extrated data
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, format=None):
        data = request.data

        deserialized_object = OrderSerializer(data=data)

        if deserialized_object.is_valid():
            deserialized_object.save()
            return Response(deserialized_object.data, status=status.HTTP_201_CREATED)
        return Response(deserialized_object.errors, status=status.HTTP_400_BAD_REQUEST)

class OrderDetailView(APIView):
    """Gets a Order by id
    Updates an order by Id
    Deletes an order Order by Id
    """

    def get_object(self, pk):
        try:
            obj = Order.objects.get(pk=pk)
            return obj
        except Order.DoesNotExist:
            return Http404        

    def get(self, request, pk, format=None):
        """Gets an Order by Id"""

        order = self.get_object(pk=pk)

        if order:
            serializer = OrderSerializer(order)
            return Response(serializer.data, status=status.Http200)
        
        return Response(status=status.HTTP_404_NOT_FOUND)

    def update_order(self, request, pk, format=None):
        """Updates an Order instance"""

        order = self.get_object(pk=pk)
        serializer = OrderSerializer(data=order)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete_order(self, request, pk, format=None):
        """Deletes an order by id"""

        order_to_delete = self.get_object(pk=pk)
        if order_to_delete:
            order_to_delete.delete()
            return Response(status=status.HTTP_200_OK)
        
        return Response(status=status.HTTP_404_NOT_FOUND)
