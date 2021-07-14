# import requests
from django.shortcuts import render

# url = "https://covid-193.p.rapidapi.com/countries"
# querystring = {"search": "kenya"}
# headers = {
#     'x-rapidapi-key': "",
#     'x-rapidapi-host': "covid-193.p.rapidapi.com"
# }
# response = requests.request("GET", url, headers=headers, params=querystring)
# print(response.text)
def home_view(request):
    return render(request, 'mainapp/index.html')