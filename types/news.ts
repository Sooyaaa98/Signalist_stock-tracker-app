export interface UserForNewsEmail {
    id: string;
    email: string;
    name: string;
    country?: string | null;
}

export interface RawNewsArticle {
    id?: string | number | null;
    headline?: string | null;
    summary?: string | null;
    url?: string | null;
    datetime?: number | null; // unix seconds (or ms) depending on source
    image?: string | null;
    source?: string | null;
    category?: string | null;
    related?: string | null;
}

export interface MarketNewsArticle {
    id: string | number;
    headline: string;
    summary: string;
    source: string;
    url: string;
    datetime: number;
    image?: string;
    category?: string;
    related?: string;
}
