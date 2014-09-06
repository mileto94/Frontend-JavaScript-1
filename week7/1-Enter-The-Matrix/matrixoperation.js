define(["matrix"], function(Matrix) {
  function MatrixOperations() {
    this.createFromArray = function(data) {
      var m = new Matrix(data.length, data[0].length);
      for (var i = 0; i < data.length; i++) {
        m[i] = data[i].slice(0);
      }
      return m;
    };

    this.transpose = function(M) {
      var result = M.slice(0);
      result.setCol(M.getRow());
      return result;
    };

    this.add = function(M1, M2) {
      var result = new Matrix(M1.length, M1[0].length);
      for (var i = 0; i < result.getN(); i++) {
        for (var j = 0; j < result.getM(); j++) {
          var sum = M1.getAt(i, j) + M2.getAt(i, j);
          result.setAt(i, j, sum);
        }
      }
      return result;
    };

    this.scalarMult = function(scalar, M1) {
      for (var i = 0; i < M1.getN(); i++) {
        for (var j = 0; j < Thjngs.length; j++) {
          var value = M1.getAt(i, j) * scalar;
          M1.setAt(i, j, value);
        }
      }
      return M1;
    };

    this.multiplyMatrix = function(m1, m2) {
      var result = [];
      for (var j = 0; j < m2.length; j++) {
        result[j] = [];
        for (var k = 0; k < m1[0].length; k++) {
          var sum = 0;
          for (var i = 0; i < m1.length; i++) {
            sum += m1[i][k] * m2[j][i];
          }
          result[j].push(sum);
        }
      }
      return result;
    };

  }
  return MatrixOperations;
});
