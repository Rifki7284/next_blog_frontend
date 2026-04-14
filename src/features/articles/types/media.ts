export interface Media {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
      width: number;
      height: number;
    };
  };
}
