"""Permission file
"""
from rest_framework import permissions


class IsOwnerOrReadOnly(permissions.BasePermission):
    """Allows uses to view content they own
    """

    def has_object_permission(self, request, view, obj):
        """Checks if a user a permission
        """

        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user and request.user.is_authenticated and obj.id == request.user
