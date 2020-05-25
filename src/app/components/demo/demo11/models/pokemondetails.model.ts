export interface Pokemon {
    name: string;
    url: string;
}

export interface Sprites {
    back_default: string;
    back_shiny: string;
    front_default: string;
    front_shiny: string;
}

export interface VersionGroup {
    name: string;
    url: string;
}

export interface PokemonDetails {
    form_name: string;
    form_names: any[];
    form_order: number;
    id: number;
    is_battle_only: boolean;
    is_default: boolean;
    is_mega: boolean;
    name: string;
    names: any[];
    order: number;
    pokemon: Pokemon;
    sprites: Sprites;
    version_group: VersionGroup;
}