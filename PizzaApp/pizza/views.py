from rest_framework.views import APIView
from .serializers import PizzaSerializer
from .models import Pizza
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404


class PizzaListView(APIView):

    def get(self, request, format=None):
        """Sends a get request to Pizza table and extract all data on
        Pizza table
        """
        pizzas = Pizza.objects.all()

        if pizzas:
            serializer = PizzaSerializer(pizzas, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    def post(self, request, format=None):
        """Sends a Post request to the server, deserialized and
        persisted in the database
        """

        serializer = PizzaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class PizzaDetailView(APIView):
    """Gets a Order by id
    Updates an order by Id
    Deletes an order Order by Id
    """

    def get_object(self, pk):
        try:
            obj = Pizza.objects.get(pk=pk)
            return obj
        except Pizza.DoesNotExist:
            return Http404        

    def get(self, request, pk, format=None):
        """Gets an Pizza by Id"""

        pizza = self.get_object(pk=pk)

        if pizza:
            serializer = PizzaSerializer(Pizza)
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(status=status.HTTP_404_NOT_FOUND)

    def update_pizza(self, request, pk, format=None):
        """Updates an Order instance"""

        pizza = self.get_object(pk=pk)
        serializer = PizzaSerializer(pizza, daata=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete_pizza(self, request, pk, format=None):
        """Deletes an order by id"""

        pizza_to_delete = self.get_object(pk=pk)
        if pizza_to_delete:
            pizza_to_delete.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
