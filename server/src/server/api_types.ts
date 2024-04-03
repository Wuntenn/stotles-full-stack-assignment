export type RecordSearchRequest = {
  textSearch?: string;
  buyerFilter?: string;
  offset: number;
  limit: number;
};

export type BuyerDto = {
  id: string;
  name: string;
};

export type ProcurementRecordDto = {
  id: string;
  title: string;
  description: string;
  buyer: BuyerDto;
  publishDate: string;
  stage: string;
  value?: number;
  closeDate?: string;
  awardDate?: string;
  currency?: string;  
};

export type RecordSearchResponse = {
  records: ProcurementRecordDto[];
  endOfResults: boolean; // this is true when there are no more results to search
};
