export interface ErrorsData {
  meta: Meta;
  data: Data[];
}

interface Data {
  id?: number;
  logWasCreated?: Date;
  logWasUploadedToApi?: Date;
  sendFromSource?: string;
  sendFromSystem?: string;
  sendFromCustomer?: string;
  sendFromUser?: string;
  shortDescription?: string;
  longDescription?: string;
  errorCode?: string;
  errorDescription?: string;
  comment?: string;
}

interface Meta {
  rows?: number;
  rowslimit?: number;
  page?: number;
}
