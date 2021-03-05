export interface Offer {
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
    restaurant:    Restaurant | null;
    bar:           Bar | null;
    discotheque:   Discotheque | null;
}

export interface Restaurant {
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

export interface Bar {
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

export interface Discotheque {
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