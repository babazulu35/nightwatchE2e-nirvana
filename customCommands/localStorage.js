module.exports.command = function(callback) {
    var self = this;

    this.execute(function() {
        return window.localStorage
    }, [], function(result) {
        console.log("Ls Result", result);
        callback(self, result.value);
    });

    return this;
};