const { createState } = require("./index");
const test = require("ava");

test("state of string", (t) => {
    const nameState = createState("Aditya");
    t.true(nameState.getState() === "Aditya");
    nameState.setState("Ellie");
    t.true(nameState.getState() === "Ellie");
});

test("creating a state of array of objects", (t) => {
    const posts = createState([]);
    t.true(posts.getState().length === 0);
    posts.setState((prev) => [...prev, { id: 0 }]);
    t.true(posts.getState().length === 1);
    t.true(posts.getState()[0].id === 0);
    posts.setState((prev) => [...prev, { id: 1 }]);
    t.true(posts.getState()[1].id === 1);
});
