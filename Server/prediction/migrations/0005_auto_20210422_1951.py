# Generated by Django 3.1.7 on 2021-04-22 14:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prediction', '0004_auto_20210421_1329'),
    ]

    operations = [
        migrations.RenameField(
            model_name='price',
            old_name='cost',
            new_name='price',
        ),
        migrations.AlterField(
            model_name='price',
            name='pid',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='product',
            name='pid',
            field=models.CharField(max_length=500),
        ),
        migrations.AlterField(
            model_name='product',
            name='productName',
            field=models.CharField(max_length=500),
        ),
    ]
