import { t as Adder } from "./d3-array.mjs";
//#region node_modules/d3-geo/src/math.js
var epsilon = 1e-6;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;
180 / pi;
var radians = pi / 180;
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var sin = Math.sin;
var sign = Math.sign || function(x) {
	return x > 0 ? 1 : x < 0 ? -1 : 0;
};
var sqrt = Math.sqrt;
function asin(x) {
	return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}
//#endregion
//#region node_modules/d3-geo/src/noop.js
function noop() {}
//#endregion
//#region node_modules/d3-geo/src/stream.js
function streamGeometry(geometry, stream) {
	if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) streamGeometryType[geometry.type](geometry, stream);
}
var streamObjectType = {
	Feature: function(object, stream) {
		streamGeometry(object.geometry, stream);
	},
	FeatureCollection: function(object, stream) {
		var features = object.features, i = -1, n = features.length;
		while (++i < n) streamGeometry(features[i].geometry, stream);
	}
};
var streamGeometryType = {
	Sphere: function(object, stream) {
		stream.sphere();
	},
	Point: function(object, stream) {
		object = object.coordinates;
		stream.point(object[0], object[1], object[2]);
	},
	MultiPoint: function(object, stream) {
		var coordinates = object.coordinates, i = -1, n = coordinates.length;
		while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
	},
	LineString: function(object, stream) {
		streamLine(object.coordinates, stream, 0);
	},
	MultiLineString: function(object, stream) {
		var coordinates = object.coordinates, i = -1, n = coordinates.length;
		while (++i < n) streamLine(coordinates[i], stream, 0);
	},
	Polygon: function(object, stream) {
		streamPolygon(object.coordinates, stream);
	},
	MultiPolygon: function(object, stream) {
		var coordinates = object.coordinates, i = -1, n = coordinates.length;
		while (++i < n) streamPolygon(coordinates[i], stream);
	},
	GeometryCollection: function(object, stream) {
		var geometries = object.geometries, i = -1, n = geometries.length;
		while (++i < n) streamGeometry(geometries[i], stream);
	}
};
function streamLine(coordinates, stream, closed) {
	var i = -1, n = coordinates.length - closed, coordinate;
	stream.lineStart();
	while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
	stream.lineEnd();
}
function streamPolygon(coordinates, stream) {
	var i = -1, n = coordinates.length;
	stream.polygonStart();
	while (++i < n) streamLine(coordinates[i], stream, 1);
	stream.polygonEnd();
}
function stream_default(object, stream) {
	if (object && streamObjectType.hasOwnProperty(object.type)) streamObjectType[object.type](object, stream);
	else streamGeometry(object, stream);
}
//#endregion
//#region node_modules/d3-geo/src/cartesian.js
function cartesian(spherical) {
	var lambda = spherical[0], phi = spherical[1], cosPhi = cos(phi);
	return [
		cosPhi * cos(lambda),
		cosPhi * sin(lambda),
		sin(phi)
	];
}
function cartesianCross(a, b) {
	return [
		a[1] * b[2] - a[2] * b[1],
		a[2] * b[0] - a[0] * b[2],
		a[0] * b[1] - a[1] * b[0]
	];
}
function cartesianNormalizeInPlace(d) {
	var l = sqrt(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
	d[0] /= l, d[1] /= l, d[2] /= l;
}
//#endregion
//#region node_modules/d3-geo/src/polygonContains.js
function longitude(point) {
	return abs(point[0]) <= pi ? point[0] : sign(point[0]) * ((abs(point[0]) + pi) % tau - pi);
}
function polygonContains_default(polygon, point) {
	var lambda = longitude(point), phi = point[1], sinPhi = sin(phi), normal = [
		sin(lambda),
		-cos(lambda),
		0
	], angle = 0, winding = 0;
	var sum = new Adder();
	if (sinPhi === 1) phi = halfPi + epsilon;
	else if (sinPhi === -1) phi = -halfPi - epsilon;
	for (var i = 0, n = polygon.length; i < n; ++i) {
		if (!(m = (ring = polygon[i]).length)) continue;
		var ring, m, point0 = ring[m - 1], lambda0 = longitude(point0), phi0 = point0[1] / 2 + quarterPi, sinPhi0 = sin(phi0), cosPhi0 = cos(phi0);
		for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
			var point1 = ring[j], lambda1 = longitude(point1), phi1 = point1[1] / 2 + quarterPi, sinPhi1 = sin(phi1), cosPhi1 = cos(phi1), delta = lambda1 - lambda0, sign = delta >= 0 ? 1 : -1, absDelta = sign * delta, antimeridian = absDelta > pi, k = sinPhi0 * sinPhi1;
			sum.add(atan2(k * sign * sin(absDelta), cosPhi0 * cosPhi1 + k * cos(absDelta)));
			angle += antimeridian ? delta + sign * tau : delta;
			if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
				var arc = cartesianCross(cartesian(point0), cartesian(point1));
				cartesianNormalizeInPlace(arc);
				var intersection = cartesianCross(normal, arc);
				cartesianNormalizeInPlace(intersection);
				var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * asin(intersection[2]);
				if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) winding += antimeridian ^ delta >= 0 ? 1 : -1;
			}
		}
	}
	return (angle < -1e-6 || angle < 1e-6 && sum < -1e-12) ^ winding & 1;
}
//#endregion
//#region node_modules/d3-geo/src/length.js
var lengthSum;
var lambda0;
var sinPhi0;
var cosPhi0;
var lengthStream = {
	sphere: noop,
	point: noop,
	lineStart: lengthLineStart,
	lineEnd: noop,
	polygonStart: noop,
	polygonEnd: noop
};
function lengthLineStart() {
	lengthStream.point = lengthPointFirst;
	lengthStream.lineEnd = lengthLineEnd;
}
function lengthLineEnd() {
	lengthStream.point = lengthStream.lineEnd = noop;
}
function lengthPointFirst(lambda, phi) {
	lambda *= radians, phi *= radians;
	lambda0 = lambda, sinPhi0 = sin(phi), cosPhi0 = cos(phi);
	lengthStream.point = lengthPoint;
}
function lengthPoint(lambda, phi) {
	lambda *= radians, phi *= radians;
	var sinPhi = sin(phi), cosPhi = cos(phi), delta = abs(lambda - lambda0), cosDelta = cos(delta), x = cosPhi * sin(delta), y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta, z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
	lengthSum.add(atan2(sqrt(x * x + y * y), z));
	lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}
function length_default(object) {
	lengthSum = new Adder();
	stream_default(object, lengthStream);
	return +lengthSum;
}
//#endregion
//#region node_modules/d3-geo/src/distance.js
var coordinates = [null, null];
var object = {
	type: "LineString",
	coordinates
};
function distance_default(a, b) {
	coordinates[0] = a;
	coordinates[1] = b;
	return length_default(object);
}
//#endregion
//#region node_modules/d3-geo/src/contains.js
var containsObjectType = {
	Feature: function(object, point) {
		return containsGeometry(object.geometry, point);
	},
	FeatureCollection: function(object, point) {
		var features = object.features, i = -1, n = features.length;
		while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
		return false;
	}
};
var containsGeometryType = {
	Sphere: function() {
		return true;
	},
	Point: function(object, point) {
		return containsPoint(object.coordinates, point);
	},
	MultiPoint: function(object, point) {
		var coordinates = object.coordinates, i = -1, n = coordinates.length;
		while (++i < n) if (containsPoint(coordinates[i], point)) return true;
		return false;
	},
	LineString: function(object, point) {
		return containsLine(object.coordinates, point);
	},
	MultiLineString: function(object, point) {
		var coordinates = object.coordinates, i = -1, n = coordinates.length;
		while (++i < n) if (containsLine(coordinates[i], point)) return true;
		return false;
	},
	Polygon: function(object, point) {
		return containsPolygon(object.coordinates, point);
	},
	MultiPolygon: function(object, point) {
		var coordinates = object.coordinates, i = -1, n = coordinates.length;
		while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
		return false;
	},
	GeometryCollection: function(object, point) {
		var geometries = object.geometries, i = -1, n = geometries.length;
		while (++i < n) if (containsGeometry(geometries[i], point)) return true;
		return false;
	}
};
function containsGeometry(geometry, point) {
	return geometry && containsGeometryType.hasOwnProperty(geometry.type) ? containsGeometryType[geometry.type](geometry, point) : false;
}
function containsPoint(coordinates, point) {
	return distance_default(coordinates, point) === 0;
}
function containsLine(coordinates, point) {
	var ao, bo, ab;
	for (var i = 0, n = coordinates.length; i < n; i++) {
		bo = distance_default(coordinates[i], point);
		if (bo === 0) return true;
		if (i > 0) {
			ab = distance_default(coordinates[i], coordinates[i - 1]);
			if (ab > 0 && ao <= ab && bo <= ab && (ao + bo - ab) * (1 - Math.pow((ao - bo) / ab, 2)) < 1e-12 * ab) return true;
		}
		ao = bo;
	}
	return false;
}
function containsPolygon(coordinates, point) {
	return !!polygonContains_default(coordinates.map(ringRadians), pointRadians(point));
}
function ringRadians(ring) {
	return ring = ring.map(pointRadians), ring.pop(), ring;
}
function pointRadians(point) {
	return [point[0] * radians, point[1] * radians];
}
function contains_default(object, point) {
	return (object && containsObjectType.hasOwnProperty(object.type) ? containsObjectType[object.type] : containsGeometry)(object, point);
}
//#endregion
export { contains_default as t };
