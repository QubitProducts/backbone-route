# backbone-route

A base route for [cherrytree](https://github.com/QubitProducts/cherrytree) that has convenienent default behaviour of rendering backbone views. Using this as a base route means you typically only need to specify the `model` and `createView` hooks and the rest is rendered out for you as you navigate around your `cherrytree` app.

E.g.

```
var Route = require("backbone-route");
var SomeView = require("./some_view");

module.exports = Route.extend({
  createView: function () {
    return new SomeView({
      model: this.get("post")
    })
  }
});
```