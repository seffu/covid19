# import requests
from django.shortcuts import render

# url = "https://covid-193.p.rapidapi.com/countries"
# querystring = {"search": "kenya"}
# headers = {
#     'x-rapidapi-key': "6672acff71msha2668ee10af537bp1245a2jsn31635e6b6758",
#     'x-rapidapi-host': "covid-193.p.rapidapi.com"
# }
# response = requests.request("GET", url, headers=headers, params=querystring)
# print(response.text)
def home_view(request):
    return render(request, 'mainapp/index.html')