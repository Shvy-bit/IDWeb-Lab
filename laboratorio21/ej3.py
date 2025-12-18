import requests
response = requests.get("https://httpbin.org/get")
data = response.json()
ip = data.get("origin")
headers = data.get("headers")
args = data.get("args")
print("IP:", ip)
print("Headers:", headers)
print("Args:", args)
