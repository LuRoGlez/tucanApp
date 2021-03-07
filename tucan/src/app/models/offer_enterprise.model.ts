export interface OfferEnterprise {
    id:         number;
    offer_id:   number;
    user_id:    number;
    value:      null;
    created_at: string;
    updated_at: string;
    oferta:     Oferta;
}

export interface Oferta {
    id:            number;
    name:          string;
    description:   string;
    start_date:    string;
    start_time:    string;
    finish_time:   string;
    assessment:    number;
    enterprise_id: number;
    music_direct:  number;
    sport_direct:  number;
    created_at:    string;
    updated_at:    string;
    enterprise:    Enterprise;
}

export interface Enterprise {
    id:         number;
    name:       string;
    address:    string;
    type:       string;
    logo:       string;
    state:      string;
    city:       string;
    subtype:    string;
    own:        number;
    latitud:    number;
    longitud:   number;
    created_at: string;
    updated_at: string;
}
