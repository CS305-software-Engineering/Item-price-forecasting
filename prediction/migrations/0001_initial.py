# Generated by Django 3.1.7 on 2021-04-19 10:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='products',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=50)),
                ('productname', models.CharField(max_length=50)),
                ('domain', models.CharField(max_length=50)),
                ('pid', models.CharField(max_length=50)),
            ],
            options={
                'db_table': 'products',
            },
        ),
    ]
