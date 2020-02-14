#posts account data
curl -H "Content-Type: application/json" -X POST -d '{"balance": 100, "name":"checking"}'  "http://localhost:3000/accounts" 
sleep 1
#updates account data at a specified id
curl -H 'Content-Type: application/json' -X PUT -d '{"balance": 200, "name": "savings"}'  "http://localhost:3000/accounts/0"
sleep 1
#gets account data
curl "http://localhost:3000/accounts"
sleep 1
#deletes account data and a specified id
curl -X DELETE "http://localhost:3000/accounts/0"