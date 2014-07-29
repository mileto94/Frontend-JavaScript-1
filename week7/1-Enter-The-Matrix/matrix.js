define(function(){
    function Matrix(n, m) {
        "use strict";
        var data = [];
        for(var i = 0; i < n; i++){
            for(var j = 0; j < m; j++){
                data[i][j] = 0;
            }
        }

        this.getN = function() {
            return n;
        };

        this.getM = function() {
            return m;
        };

        this.getRow = function(index) {
            return data[index];
        };

        this.getCol = function(index) {
            var result = [];
            for (var i = 0; i < n; i++) {
                result.push(data[i][index]);
            }
            return result;
        };

        this.setRow = function(index, row) {
            data[index] = row;
        };

        this.setCol = function(index, col) {
            for (var j = 0; i < n; i++) {
                data[j][index] = col[j];
            }
        };

        this.getAt = function(i, j) {
            return data[i][j];
        };

        this.setAt = function(i, j, value) {
            data[i][j] = value;
        };

        this.getData = function() {
            return data.slice(0);
        };

        this.toString = function() {
            return data.join(",\n");
        };
    }
    return Matrix;
});
