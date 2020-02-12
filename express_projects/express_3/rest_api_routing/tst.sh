curl "http://localhost:3000/profile"
curl -H "Content-Type: application/json" -X POST -d '{"first_name":"Amin","last_name":"Mhanna"}' "http://localhost:3000/profile"
sleep 1
curl -H "Content-Type: application/json" -X PUT -d '{"first_name":"Yamen","last_name":"Mhanna"}' "http://localhost:3000/profile"
sleep 1
curl "http://localhost:3000/profile"
sleep 1
curl -X DELETE "http://localhost:3000/profile"