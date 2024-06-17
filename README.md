# Learning-ExpressJS
HTTP methods provide a way to specify the desired action to be performed on the given resource. The result depends upon the implementation of the server and it can be pre-existing data or data that is dynamically generated.

The HTTP methods that are most commonly used are GET, POST, PUT, PATCH, and DELETE which correspond to CRUD (create, read, update, delete) operations.

Request methods:

1. GET: The GET method is used to retrieve information identified by Request-URL. It is the primary mode of information retrieval. It doesn’t change the state of the requested resource and is said to be a safe method. If the Request URL refers to a data-producing process, the produced data will be returned in response instead of the source text, unless the text is the output of a process.
 
2. POST: The POST method is used to send data to the server as a request body. This method indicates that the data in the body of the request is intended to be accepted and most likely to be stored in the server. The Content-Type header indicates the type of the body of the request. It is mostly used while uploading a file or while submitting a complete web form. Responses to the method will not be cacheable until the response contains appropriate Cache-Control or Expires header fields.
 
3. PUT: The PUT method is used to replace the already existing state of the resource or create the resource if the resource doesn’t exist (decided by the origin server) with the request payload.
 
4. PATCH: The PATCH method is used to make a partial update to a resource. It can be considered as an instruction set that describes the modification of data already present on the server to produce a new version of the data and it is not considered as the complete resource.
 
5. DELETE: The DELETE method is used to delete a specified resource on the origin server. The client cannot be assured that the operation was performed, even though the status code which is returned from the server indicates it.

    ![Http Verbs](https://github.com/immanuala07/Learning-ExpressJS/blob/master/images/http_verbs.webp)

## Learn Express.js - Step by Step

Navigate to below branches to understand about Express.js:
- [1-Introduction-And-Setup](https://github.com/immanuala07/Learning-ExpressJS/commits/1-Introduction-And-Setup/)
- [2-GET-requests](https://github.com/immanuala07/Learning-ExpressJS/commits/2-GET-requests)
- [3-Route-Parameters](https://github.com/immanuala07/Learning-ExpressJS/commits/3-Route-Parameters)
- [4-Query-Parameters](https://github.com/immanuala07/Learning-ExpressJS/commits/4-Query-Parameters)
- [5-POST-request](https://github.com/immanuala07/Learning-ExpressJS/commits/5-POST-request)
- [6-PUT-request](https://github.com/immanuala07/Learning-ExpressJS/commits/6-PUT-request)
- [](https://github.com/immanuala07/Learning-ExpressJS/commits/)
