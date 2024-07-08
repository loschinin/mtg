export interface Review {
  name: string;
  review: string;
  date: string;
}

export interface Reviews {
  ru: { [key: string]: Review };
  en: { [key: string]: Review };
}
