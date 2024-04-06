from rest_framework import serializers
from core.models import *

class FileUploadSerializer(serializers.ModelSerializer):

    class Meta:
        model = FileUpload
        fields = "__all__"