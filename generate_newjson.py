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