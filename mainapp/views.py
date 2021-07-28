from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from commentsapp.forms import CommentForm
from django.http import JsonResponse
from commentsapp.models import Comment
from datetime import date, datetime
import requests
import json
import ast
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
    day_object = datetime.fromisoformat(day)
    new_day_object = day_object.strftime("%d %b %Y")
    time = our_json_data['response'][0]['time']
    datetime_object = datetime.fromisoformat(time)
    new_datetime_object = datetime_object.strftime("%d-%b-%Y (%H:%M:%S.%f)")

    aDict = {
        "country":country, "population":population,
        "new_cases":new_cases, "active_cases":active_cases,
        "critical":critical, "recovered":recovered,
        "new_deaths":new_deaths, "total_deaths":total_deaths,
        "tests":tests, "new_day_object":new_day_object, "time":time,
        "new_datetime_object":new_datetime_object
        }
    ourjson = json.dumps(aDict)
    ourjsonfile = open("ourdata.json", "w")
    ourjsonfile.write(ourjson)
    ourjsonfile.close()


    form = CommentForm(request.POST or None)
    if request.method == 'POST':
        
        if form.is_valid():
            data = form.cleaned_data
            comment_created = Comment.objects.create(**data, user=request.user)
            return redirect('mainapp:homepage')
    else:
        form = CommentForm()
    
    

    
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
        "day":new_day_object,
        "time":new_datetime_object,
        "form":form,
        "aDict":aDict
    }
    return render(request, 'mainapp/index.html', context)



def seven_days(request):
    


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
    return render(request, 'mainapp/seven.html')


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

def history_view(request):
    our_list = []
    converted_list = []
    our_file = '../ourdata.json'
    with open(our_file) as obj:
        for line in obj:
            newline = json.loads(line)
            our_list.append(json.loads(line))
        for ol in our_list:
            if ol["new_cases"] != None:
                newentry = {
                    "new_cases": ol["new_cases"][1:],
                    "active_cases": ol["active_cases"],
                    "critical_cases": ol["critical_cases"],
                    "recovered": ol["recovered"],
                    "total_cases": ol["total_cases"],
                    "new_deaths": ol["new_deaths"],
                    "total_deaths": ol["total_deaths"],
                    "day": ol["day"]
                }

                converted_list.append(newentry)
    # for k,v in our_list[0].items():
    #     print(k,v)
    print(converted_list[1]["new_cases"])
    return JsonResponse(our_list, safe=False)