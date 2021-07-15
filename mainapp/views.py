from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from datetime import date, datetime
import requests
import calendar
import json

from datetime import date, timedelta

# sdate = date(2020, 3, 22)   # start date
# edate = date.today() - timedelta(1) # end date
# delta = edate - sdate       # as timedelta

# for i in range(delta.days + 1):
#     day = sdate + timedelta(days=i)
#     print(day)


@login_required
def home_view(request):
    url = "https://covid-193.p.rapidapi.com/statistics?country=kenya"
    headers = {
    'x-rapidapi-key': "6672acff71msha2668ee10af537bp1245a2jsn31635e6b6758",
    'x-rapidapi-host': "covid-193.p.rapidapi.com"
    }
    mylist = []
    querystring = {"country": "kenya"}
    response = requests.request("GET", url, headers=headers, params=querystring).text
    our_json_data = json.loads(response)
    
    
    country = our_json_data['response'][0]['country']
    population = our_json_data['response'][0]['population']
    new_cases = our_json_data['response'][0]['cases']['new']
    active_cases = our_json_data['response'][0]['cases']['active']
    critical = our_json_data['response'][0]['cases']['critical']
    recovered = our_json_data['response'][0]['cases']['recovered']
    new_deaths = our_json_data['response'][0]['deaths']['new']
    total_deaths = our_json_data['response'][0]['deaths']['total']
    tests = our_json_data['response'][0]['tests']['total']
    day = our_json_data['response'][0]['day']
    time = our_json_data['response'][0]['time']
    datetime_object = datetime.fromisoformat(time)
    new_datetime_object = datetime_object.strftime("%d-%b-%Y (%H:%M:%S.%f)")
    print(new_datetime_object)
    context = {
        "country":country,
        "population":population,
        "new_cases":new_cases,
        "active_cases":active_cases,
        "critical":critical,
        "recovered":recovered,
        "new_deaths":new_deaths,
        "total_deaths":total_deaths,
        "tests":tests,
        "day":day,
        "time":new_datetime_object
    }
    return render(request, 'mainapp/index.html', context)





# def seven_days(request):
#     url = "https://covid-193.p.rapidapi.com/history?country=kenya&amp;day=2020-03-21"
#     headers = {
#     'x-rapidapi-key': "6672acff71msha2668ee10af537bp1245a2jsn31635e6b6758",
#     'x-rapidapi-host': "covid-193.p.rapidapi.com"
#     }
#     querystring = {"country": "kenya"}
#     response = requests.request("GET", url, headers=headers, params=querystring).text
#     our_json_data = json.loads(response)
    
#     country = our_json_data['response'][0]['country']
#     population = our_json_data['response'][0]['population']
#     new_cases = our_json_data['response'][0]['cases']['new']
#     active_cases = our_json_data['response'][0]['cases']['active']
#     critical = our_json_data['response'][0]['cases']['critical']
#     recovered = our_json_data['response'][0]['cases']['recovered']
#     new_deaths = our_json_data['response'][0]['deaths']['new']
#     total_deaths = our_json_data['response'][0]['deaths']['total']
#     tests = our_json_data['response'][0]['tests']['total']
#     day = our_json_data['response'][0]['day']
#     time = our_json_data['response'][0]['time']

#     print(total_deaths)
#     context = {
#         "country":country,
#         "population":population,
#         "new_cases":new_cases,
#         "active_cases":active_cases,
#         "critical":critical,
#         "recovered":recovered,
#         "new_deaths":new_deaths,
#         "total_deaths":total_deaths,
#         "tests":tests,
#         "day":day,
#         "time":time
#     }
#     return render(request, 'mainapp/seven.html')


# url = "https://covid-193.p.rapidapi.com/history?country=kenya&day=2020-03-22"
# headers = {
# 'x-rapidapi-key': "6672acff71msha2668ee10af537bp1245a2jsn31635e6b6758",
# 'x-rapidapi-host': "covid-193.p.rapidapi.com"
# }
# querystring = {"country": "kenya"}
# response = requests.request("GET", url, headers=headers, params=querystring).text
# our_json_data = json.loads(response)

# country = our_json_data['response'][0]['country']
# population = our_json_data['response'][0]['population']
# new_cases = our_json_data['response'][0]['cases']['new']
# active_cases = our_json_data['response'][0]['cases']['active']
# critical = our_json_data['response'][0]['cases']['critical']
# recovered = our_json_data['response'][0]['cases']['recovered']
# new_deaths = our_json_data['response'][0]['deaths']['new']
# total_deaths = our_json_data['response'][0]['deaths']['total']
# tests = our_json_data['response'][0]['tests']['total']
# day = our_json_data['response'][0]['day']
# time = our_json_data['response'][0]['time']

# print(our_json_data)