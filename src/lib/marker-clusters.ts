export type ProjectedMarker = { id: string; x: number; y: number; protected?: boolean };

/** Complete-link grouping avoids a chain of nearby cities swallowing a continent. */
export function clusterProjectedMarkers(points: ProjectedMarker[], radius = 32): string[][] {
  const groups: ProjectedMarker[][] = [];
  for (const point of [...points].sort((a, b) => a.id.localeCompare(b.id))) {
    const group = point.protected
      ? undefined
      : groups.find((items) =>
          items.every(
            (other) =>
              !other.protected && Math.hypot(point.x - other.x, point.y - other.y) < radius,
          ),
        );
    if (group) group.push(point);
    else groups.push([point]);
  }
  return groups.map((group) => group.map((point) => point.id));
}
