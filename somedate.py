from datetime import date, datetime, timedelta
import requests
import calendar
import json

from datetime import date, timedelta

sdate = date(2021, 7, 21)   # start date
edate = date.today() - timedelta(1) # end date
delta = edate - sdate       # as timedelta

daylist = []
for i in range(delta.days + 1):
    day = sdate + timedelta(days=i)
    daylist.append(str(day))
    # print(day)

our_data_list = []
for oneday in daylist:
    url = f"https://covid-193.p.rapidapi.com/history?country=kenya&day={oneday}"
    headers = {
    'x-rapidapi-key': "6672acff71msha2668ee10af537bp1245a2jsn31635e6b6758",
    'x-rapidapi-host': "covid-193.p.rapidapi.com"
    }
    querystring = {"country": "kenya"}
    response = requests.request("GET", url, headers=headers, params=querystring).text
    our_json_data = json.loads(response)
    new_json_data = our_json_data['response'][0]

    our_data_list = {
            "new_cases":new_json_data['cases']['new'], 
            "active_cases":new_json_data['cases']['active'],
            "critical_cases":new_json_data['cases']['critical'],
            "recovered":new_json_data['cases']['recovered'],
            "total_cases":new_json_data['cases']['total'],
            "new_deaths":new_json_data['deaths']['new'],
            "total_deaths":new_json_data['deaths']['total'],
            "day":new_json_data['day']
        }

    ourjson = json.dumps(our_data_list)
    ourjsonfile = open("ourdata.json", "a")
    ourjsonfile.write(f"{ourjson}\n" )
ourjsonfile.close()

































# from django.shortcuts import render
# from django.contrib.auth.decorators import login_required

# @login_required
# def home_view(request):
#     url = "https://covid-193.p.rapidapi.com/statistics?country=kenya"
#     headers = {
#     'x-rapidapi-key': "6672acff71msha2668ee10af537bp1245a2jsn31635e6b6758",
#     'x-rapidapi-host': "covid-193.p.rapidapi.com"
#     }
#     mylist = []
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
#     return render(request, 'mainapp/index.html', context)





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
# and date_ > datetime.date(2021, 3, 21) and date_ < datetime.today()

# cal = calendar.Calendar()
# print(cal)
# week_days = []
# the_days = []
# now = datetime.today()
# for month in range(1, 13):
#     for date_ in cal.itermonthdates(2021, month):
#         print(date_)
#         if date_ not in the_days:
#             the_days.append(date_)
# set(the_days)
# for day in the_days:
#     print(day)
# print(now)
# print(now)


# Commented

