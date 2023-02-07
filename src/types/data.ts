export interface Data {
  id: number;
  product_type_id: number;
  name_uz: string;
  cost: number;
  address: string;
  created_date: number;
}

export interface Prod {
  name: string;
  cost: number;
  address: string;
  date: string;
}

export interface GetProuctTypes {
  id: number;
  name_uz: string;
  name_ru: string;
  name_uk: string;
  description: string | null;
}
