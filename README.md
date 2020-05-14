# World Journey

An easy, enjoyable journey around the world.

## @ToDo

Unit testing...work in progress.

- Library - created test file for pipe (2 tests).
- Library - created test file for component (5 tests).

## Video walk-around

[Workflow, design & missing features - VIDEO](https://youtu.be/YvPZfkTcZnE)

## Installation

```
  npm install
  npm run start
```

## Testing the library

Test coverage 100%.

```
  npm run test-lib
```

## Testing the app

Test coverage 5%.

```
  npm run test-app
```

Once the server started go to [http://localhost:4200](http://localhost:4200).

## Workflow, design & missing features

1. When selecting a _region_ the `regionSelected` action gets dispatched by the component to update the corresponding value inside the store.
1. If a valid _region_ was selected two things will happen:
     - The component property will be updated by the subscription to store selector which in change 
     will trigger an update inside the template.
     - If the store is empty, a get request gets dispatched.
     - If the selected _region_ is null or other, the local properties get deleted.
1. If a _country_ is selected, a store selector will query the content.
1. `subSink` is used to manage subscriptions.
1. One pipe and two components have been created. The pipe and the reusable _select_ component will be managed 
   as part of an angular library.
1. The workflow is quite standard and mostly depends on the _NGRX_ design pattern.

Giving the time constraints, no tests have been written. This is unfortunate as it might compromise the entire 
effort and enthusiasm invested in getting this test done.
What else misses is `router-store` and `entity` integration.

What really bothers me is the lack of testing. This forces me to stay oblivious to the changes in design patterns 
I could make so that I can overall improve the quality of the code.
There is no visual queues to the user when requests to the _api_ are made. I would've done that as well.

Because it was possible, I've solved the same problem in two or more ways. I will normally use a consistent pattern 
to make the code easy to anticipate.



## Style guides & CSS standards

The test app uses [Bootstrap](https://getbootstrap.com/).
