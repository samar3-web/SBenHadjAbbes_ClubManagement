const Adherent = require("./index");
const assert = require('assert').strict;

describe("integration test", function() {
    it("should be able to list of adherents", function() {
        let adherant = new Adherent();
        assert.notStrictEqual(adherant.list().length, 1);
    });
});