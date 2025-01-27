"""Views for pizza model"""

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser

from .serializers import PizzaSerializer
from .models import Pizza


class PizzaListView(APIView):
    """Pizza view representation"""
    # permission_classes = [IsAuthenticated]
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request):
        """Sends a get request to Pizza table and extract all data on
        Pizza table
        """

        # pylint: disable=unused-argument
        pizzas = Pizza.objects.all() # pylint: disable=no-member

        if pizzas:
            serializer = PizzaSerializer(pizzas, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def post(self, request):
        """Sends a Post request to the server, deserialized and
        persisted in the database
        """

        serializer = PizzaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PizzaDetailView(APIView): # pylint: disable=no-member
    """Gets a Order by id
    Updates an order by Id
    Deletes an order Order by Id
    """
    parser_classes = [MultiPartParser, FormParser]

    # def get_object(self, pk):
    #     """Gets Pizza object by id"""

    #     obj = Pizza.objects.get(pk=pk) # pylint: disable=no-member
    #     if obj:
    #         return obj
    #     return None

    # def get(self, request, pk):
    #     """Gets an Pizza by Id"""

    #     # pylint: disable=unused-argument
    #     pizza = self.get_object(pk=pk)

    #     if pizza:
    #         serializer = PizzaSerializer(Pizza)
    #         return Response(serializer.data, status=status.HTTP_200_OK)

    #     return Response(status=status.HTTP_404_NOT_FOUND)


    def get_object(self, pk):
        """Gets Pizza object by id"""
        try:
            return Pizza.objects.get(pk=pk)  # pylint: disable=no-member
        except Pizza.DoesNotExist:
            return None

    def get(self, request, pk):
        """Gets a Pizza by Id"""
        pizza = self.get_object(pk=pk)
        if pizza:
            serializer = PizzaSerializer(pizza)  # Corrected object reference
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({"detail": "Pizza not found"}, status=status.HTTP_404_NOT_FOUND)


    def put(self, request, pk):
        """Updates an Order instance"""

        pizza = self.get_object(pk=pk)
        serializer = PizzaSerializer(pizza, daata=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        """Deletes an order by id"""

        # pylint: disable=unused-argument
        pizza_to_delete = self.get_object(pk=pk)
        if pizza_to_delete:
            pizza_to_delete.delete()
            return Response(status=status.HTTP_200_OK)
        return Response(status=status.HTTP_404_NOT_FOUND)
