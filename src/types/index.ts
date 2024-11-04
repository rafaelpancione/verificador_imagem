export interface ImageDimensions {
  width: number;
  height: number;
}

export interface ImageResult {
  name: string;
  path: string;
  dimensions: ImageDimensions;
}