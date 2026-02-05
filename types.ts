
export interface VoteCenter {
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  details?: string;
  mapUrl?: string;
}

export interface SearchResult {
  text: string;
  centers: VoteCenter[];
  sources: Array<{ title: string; uri: string }>;
}

export enum BangladeshDivision {
  DHAKA = 'Dhaka',
  CHATTOGRAM = 'Chattogram',
  RAJSHAHI = 'Rajshahi',
  KHULNA = 'Khulna',
  BARISHAL = 'Barishal',
  SYLHET = 'Sylhet',
  RANGPUR = 'RANGPUR',
  MYMENSINGH = 'Mymensingh'
}
