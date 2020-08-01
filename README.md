# NodeJS JWT Authentication 

This is a NodeJS API that supports username and password authentication with JWTs and has protected api,which is accessed only by authourized user.

## Available APIs

### User APIs

#### POST `/api/signup`

You can do a POST to `/api/signup` to create a new user.

The body must have:

* `name`: The name
* `lastname`: The lastnname
* `email`: The email
* `password`: The password


It returns the following:

```json
{
    "name": "...",
    "email": "...",
    "id": "..."
}
```


#### POST `/api/login`

You can do a POST to `/api/login` to log a user in.

The body must have:

* `email`: The email
* `password`: The password

It returns the following:

```json
{
    "message": "Authenticated successfully",
    "token": "..."
}
```

### TEST(PROTECTED) API

#### GET `/api/test`

It returns a protected message. It require authentication.


The JWT - `access_token` must be sent on the `Authorization` header as follows: `Authorization: Bearer {jwt}`
![example](https://res.cloudinary.com/angelchristian/image/upload/v1595512188/Capture_silkmy.png)

### linkedin API

#### GET `/api/linkedin`

it redirects to protected test route for success or login route for failure

## Running it

Just clone the repository, run `npm install` and then `node index.js`. That's it :).

If you want to run it on another port, just run `PORT=3000 node index.js` to run it on port 3000 or https://auth-webb.herokuapp.com


## Author

[Angel Christian](https://github.com/AngelChristian)

## License

This project is licensed under the MIT license. See the [LICENSE](https://github.com/AngelChristian/auth/blob/master/LICENSE) file for more info.

## Use Postman

Postman provides a powerful GUI platform to make your API development faster & easier, from building API requests through testing, documentation and sharing

Here is a [small collection](https://documenter.getpostman.com/view/3232248/auth0-nodejs-jwt-auth/7LnAi4o) to highlight the features of this sample API.

[![Run NodeJS JWT Authentication in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/c57ddc507592c436662c)
