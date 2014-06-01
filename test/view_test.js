var BackboneRoute = require("../route");

var Route, route;
describe("backbone-route", function () {
  beforeEach(function () {
    Route = BackboneRoute.extend();
    route = new Route({});
  });
  describe("#deactivate", function () {
    describe("if route has a view", function () {
      it("calls beforeDeactivate and removes the view", function () {
        var view = {
          remove: sinon.spy()
        };
        route.view = view;
        sinon.spy(route, "beforeDeactivate");
        route.deactivate();
        expect(view.remove).to.have.been.called;
        expect(route.view).to.be.undefined;
        expect(route.beforeDeactivate).to.have.been.called;
      });
    });
    describe("if route has no view", function () {
      it("only calls beforeDeactivate", function () {
        sinon.spy(route, "beforeDeactivate");
        route.deactivate();
        expect(route.beforeDeactivate).to.have.been.called;
      });
    });
  });
});