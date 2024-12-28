from rest_framework.views import exception_handler


def custom_exception_handler(exec, context):
    """Custom exception handler for all routes"""
    response = exception_handler(exec, context)

    if response is not None:
        response['status-code'] = response.status_code

    return response
