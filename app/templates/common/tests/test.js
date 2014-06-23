var planCollection = new PlanCollection();

var orders = [{
    name: "asc",
    test: function(a, b) {
        return a <= b
    }
}, {
    name: "desc",
    test: function(a, b) {
        return a >= b
    }
}];

module("GoHealth Web Dev Test", {
    setup: function() {
        planCollection.fetch().then(function() {
            start();
        });
        stop();
    }
});

test('sort', function() {
    var fields = planCollection.getFields();

    orders.forEach(function(order) {
        fields.forEach(function(field) {
            planCollection.sort(field, order.name);
            var plans = planCollection.getPlans();
            for (var planIndex = 0; planIndex < (plans.length - 1); planIndex++) {
                var currentPlan = plans[planIndex];
                var nextPlan = plans[planIndex + 1];
                var test = order.test(currentPlan[field], nextPlan[field]);
                var message = currentPlan[field] + (order.name === "asc" ? "<=" : ">=") + nextPlan[field];
                equal(test, true, message);
            }
        });
    });
});

test('sortBy', function() {
    var fields = planCollection.getFields();

    fields.forEach(function(field) {
        planCollection.sortBy(field);

        var order;
        switch (field) {
            case "annualLimit":
                order = orders[1];
                break;
            case "premium":
            case "copay":
            default:
                order = orders[0];
                break;
        }

        var plans = planCollection.getPlans();
        for (var planIndex = 0; planIndex < (plans.length - 1); planIndex++) {
            var currentPlan = plans[planIndex];
            var nextPlan = plans[planIndex + 1];
            var test = order.test(currentPlan[field], nextPlan[field]);
            var message = currentPlan[field] + (order.name === "asc" ? "<=" : ">=") + nextPlan[field];
            equal(test, true, message);
        }
    });

});