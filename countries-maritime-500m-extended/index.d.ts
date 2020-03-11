interface FeatureProperties {
		A2: string;
		A3: string;
}

interface Geometry {
		coordinates: [number, number][];
		type: string;
}

interface Feature {
		geometry: Geometry;
		type: string;
		properties: FeatureProperties;
}

export interface GeoMap {
		type: string;
		features: Feature[];
}

declare module 'countries-maritime-500m-extended' {
		export default function(): GeoMap;
}
