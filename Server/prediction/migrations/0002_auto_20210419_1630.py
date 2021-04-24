# Generated by Django 3.1.7 on 2021-04-19 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prediction', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='price',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('domain', models.CharField(max_length=50)),
                ('pid', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'price',
            },
        ),
        migrations.RenameModel(
            old_name='products',
            new_name='product',
        ),
        migrations.AlterModelTable(
            name='product',
            table='product',
        ),
    ]
