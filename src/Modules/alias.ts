module Shapes {
  export module Polygons {
    export class Triangle { }
    export class Square { }
  }
}

import polygons = Shapes.Polygons;
var sq = new polygons.Square(); // Same as 'new Shapes.Polygons.Square()'
