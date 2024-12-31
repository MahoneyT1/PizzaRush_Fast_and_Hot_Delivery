"""Custom persmission Module"""
from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """checks if the modifier is the actual instance that wants to be modified
    """

    def has_object_permission(self, request, view, obj):
        if request.method in permissions.SAFE_METHODS:
            return True
        
        return request.user and request.user.is_authenticated and obj.user == request.user