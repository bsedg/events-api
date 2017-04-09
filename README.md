# events-api

Swagger api [location](./config/swagger.yaml)

## Build & Run

```bash
# build docker image
docker build -t events-api:0.0.1 .

# run docker
docker run -it -p 8080:8000 -d events-api:0.0.1
```

Then do a simple GET HTTP request on `/v1/events`.

```bash
curl localhost:8000/v1/events
```

Sample response:

```json
[  
   {  
      "id":"d3c1a2c7-8b53-4673-a4f9-50196b9f01c2",
      "description":"Simple test event",
      "type":"test-event",
      "created_date":"2017-04-09T20:22:37Z",
      "last_updated":"2017-04-09T20:22:37Z"
   }
]
```
