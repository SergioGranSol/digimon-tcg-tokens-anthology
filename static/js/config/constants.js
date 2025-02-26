const COLORS = {
    RED: "Red",
    BLUE: "Blue",
    YELLOW: "Yellow",
    GREEN: "Green",
    BLACK: "Black",
    PURPLE: "Purple",
    WHITE: "White",
}

const CARDS_TYPE = {
    NORMAL: "Normal",
    COLOR_FRAME: "Color Frame",
    FULL_ART: "Full Art",
    SPECIAL: "Special",
    VPET_FRAME: "V-Pet Frame"
}

const ARTISTS = {
    BAKAMAOKUN: { name: "bakamaokun", profile: { twitter: "https://x.com/bakamaokun" } },
    DEMONDRAMON: { name: "Demondramon", profile: { etsy: "https://www.etsy.com/mx/shop/IllustrationsBySam", instagram: "https://www.instagram.com/demondramon/" } },
    DIM_CARD: { name: "Vital Bracelet Digital Monster DIM Card", profile: { "digimon net": "https://digimon.net/" } },
    ENRIQUE: { name: "Enrique", profile: { twitter: "https://x.com/Enrique_Digica" } },
    HEKITO: { name: "Hekito", profile: { deviantart: "https://www.deviantart.com/hekitodigimon" } },
    INO_XLR: { name: "INO_XLR", profile: { twitter: "https://x.com/INO_XLR" } },
    IRASA: { name: "Irasa", profile: { twitter: "https://x.com/irasadesu" } },
    KOH_TSURANUKI: { name: "Koh_Tsuranuki", profile: { twitter: "https://x.com/Koh_Tsuranuki" } },
    LBRIGHTBLADEL: { name: "lBrightBladel", profile: { twitter: "https://x.com/lbrightbladel", bluesky: "https://bsky.app/profile/lbrightbladel.bsky.social" } },
    PROFILE: { name: "Research report storage by Agumon Expert Digimon profile", profile: { "digimon net": "https://digimon.net/" } },
    REFERENCE_BOOK: { name: "Digimon Reference Book", profile: { "digimon net": "https://digimon.net/" } },
    RERAID: { name: "_reRaid", profile: { twitter: "https://x.com/_reRaid", pixiv: "https://www.pixiv.net/en/users/4701422", bluesky: "https://bsky.app/profile/reraid.bsky.social", artstation: "https://www.artstation.com/donghyeok" } },
    SHARKMON: { name: "Sharkmon", profile: { deviantart: "https://www.deviantart.com/sharkmon", naver: "https://blog.naver.com/tmfrl3316" } },
    SINOBALI: { name: "Sinobali", profile: { web: "https://sinobali.com/", twitter: "https://x.com/sinobali", instagram: "https://www.instagram.com/sinobali_digimon", patreon: "https://www.patreon.com/sinobali" } },
    SPARERIBS: { name: "Spareribs", profile: { twitter: "https://x.com/Spareribs_777", pixiv: "https://www.pixiv.net/en/users/47170637" } },
    TAI: { name: "Tai", profile: { twitter: "https://x.com/cheungsk1213" } },
    TEASPOON: { name : "Teaspoon", profile: { twitter: "https://x.com/Teas_poon" } },
    TRINITY_BURST: { name: "Trinity Burst Option Card", profile: { "digimon net": "https://digimon.net/" } },
    VPET: { name: "Digimon V-Pet", profile: { "digimon net": "https://digimon.net/" } },
}

const TOKENS = {
    EMPTY: {
        name: "Empty Token",
        cards: [
            { img: "Empty_Red_1.png", type: CARDS_TYPE.NORMAL, color: COLORS.RED },
            { img: "Empty_Red_CF_1.png", type: CARDS_TYPE.COLOR_FRAME, color: COLORS.RED },
            { img: "Empty_Blue_1.png", type: CARDS_TYPE.NORMAL, color: COLORS.BLUE },
            { img: "Empty_Blue_CF_1.png", type: CARDS_TYPE.COLOR_FRAME, color: COLORS.BLUE },
            { img: "Empty_Yellow_1.png", type: CARDS_TYPE.NORMAL, color: COLORS.YELLOW },
            { img: "Empty_Yellow_CF_1.png", type: CARDS_TYPE.COLOR_FRAME, color: COLORS.YELLOW },
            { img: "Empty_Green_1.png", type: CARDS_TYPE.NORMAL, color: COLORS.GREEN },
            { img: "Empty_Green_CF_1.png", type: CARDS_TYPE.COLOR_FRAME, color: COLORS.GREEN },
            { img: "Empty_Black_1.png", type: CARDS_TYPE.NORMAL, color: COLORS.BLACK },
            { img: "Empty_Black_CF_1.png", type: CARDS_TYPE.COLOR_FRAME, color: COLORS.BLACK },
            { img: "Empty_Purple_1.png", type: CARDS_TYPE.NORMAL, color: COLORS.PURPLE },
            { img: "Empty_Purple_CF_1.png", type: CARDS_TYPE.COLOR_FRAME, color: COLORS.PURPLE },
            { img: "Empty_White_1.png", type: CARDS_TYPE.NORMAL, color: COLORS.WHITE },
            { img: "Empty_White_CF_1.png", type: CARDS_TYPE.COLOR_FRAME, color: COLORS.WHITE },
        ]
    },
    AMON_OF_CRIMSON_FLAME: {
        name: "Amon of Crimson Flame",
        color: COLORS.RED,
        cards: [
            { img: "Amon_of_Crimson_Flame_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Amon_of_Crimson_Flame_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Amon_of_Crimson_Flame_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Amon_of_Crimson_Flame_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Amon_of_Crimson_Flame_CF_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Amon_of_Crimson_Flame_FA_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Amon_of_Crimson_Flame_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Amon_of_Crimson_Flame_CF_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Amon_of_Crimson_Flame_FA_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Amon_of_Crimson_Flame_4.png", artist: ARTISTS.KOH_TSURANUKI.name, type: CARDS_TYPE.NORMAL },
            { img: "Amon_of_Crimson_Flame_CF_4.png", artist: ARTISTS.KOH_TSURANUKI.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Amon_of_Crimson_Flame_FA_4.png", artist: ARTISTS.KOH_TSURANUKI.name, type: CARDS_TYPE.FULL_ART },
            { img: "Amon_of_Crimson_Flame_5.png", artist: ARTISTS.TAI.name, type: CARDS_TYPE.NORMAL },
            { img: "Amon_of_Crimson_Flame_CF_5.png", artist: ARTISTS.TAI.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Amon_of_Crimson_Flame_FA_5.png", artist: ARTISTS.TAI.name, type: CARDS_TYPE.FULL_ART },
        ]
    },
    WARGROWLMON: {
        name: "WarGrowlmon",
        color: COLORS.RED,
        cards: [
            { img: "WarGrowlmon_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "WarGrowlmon_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "WarGrowlmon_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "WarGrowlmon_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "WarGrowlmon_CF_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "WarGrowlmon_FA_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "WarGrowlmon_3.png", artist: ARTISTS.TRINITY_BURST.name, type: CARDS_TYPE.NORMAL },
            { img: "WarGrowlmon_CF_3.png", artist: ARTISTS.TRINITY_BURST.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "WarGrowlmon_FA_3.png", artist: ARTISTS.TRINITY_BURST.name, type: CARDS_TYPE.FULL_ART },
            { img: "WarGrowlmon_4.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "WarGrowlmon_CF_4.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "WarGrowlmon_FA_4.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "WarGrowlmon_VP_1.png", artist: ARTISTS.VPET.name, type: CARDS_TYPE.VPET_FRAME },
            { img: "WarGrowlmon_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "WarGrowlmon_CF_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "WarGrowlmon_FA_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "WarGrowlmon_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "WarGrowlmon_CF_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "WarGrowlmon_FA_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "WarGrowlmon_VP_2.png", artist: ARTISTS.VPET.name, type: CARDS_TYPE.VPET_FRAME },
        ]
    },
    FAMILIAR: {
        name: "Familiar",
        color: COLORS.YELLOW,
        cards: [
            { img: "Familiar_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Familiar_2.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_2.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_2.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Familiar_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Familiar_4.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_4.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_4.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Familiar_SP_1.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.SPECIAL },
            { img: "Familiar_5.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_5.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_5.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Familiar_6.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_6.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_6.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Familiar_7.png", artist: ARTISTS.LBRIGHTBLADEL.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_7.png", artist: ARTISTS.LBRIGHTBLADEL.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_7.png", artist: ARTISTS.LBRIGHTBLADEL.name, type: CARDS_TYPE.FULL_ART },
            { img: "Familiar_8.png", artist: ARTISTS.LBRIGHTBLADEL.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_8.png", artist: ARTISTS.LBRIGHTBLADEL.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_8.png", artist: ARTISTS.LBRIGHTBLADEL.name, type: CARDS_TYPE.FULL_ART },
            { img: "Familiar_9.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_9.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_9.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.FULL_ART },
            { img: "Familiar_10.png", artist: ARTISTS.TEASPOON.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_10.png", artist: ARTISTS.TEASPOON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_10.png", artist: ARTISTS.TEASPOON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Familiar_11.png", artist: ARTISTS.INO_XLR.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_11.png", artist: ARTISTS.INO_XLR.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_11.png", artist: ARTISTS.INO_XLR.name, type: CARDS_TYPE.FULL_ART },
            { img: "Familiar_12.png", artist: ARTISTS.HEKITO.name, type: CARDS_TYPE.NORMAL },
            { img: "Familiar_CF_12.png", artist: ARTISTS.HEKITO.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Familiar_FA_12.png", artist: ARTISTS.HEKITO.name, type: CARDS_TYPE.FULL_ART },
        ]
    },
    PIPE_FOX: {
        name: "Pipe Fox",
        color: COLORS.YELLOW,
        cards: [
            { img: "Pipe_Fox_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_2.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_2.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_2.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_3.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_3.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_3.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_4.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_4.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_4.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_6.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_6.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_6.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_7.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_7.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_7.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_8.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_8.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_8.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_9.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_9.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_9.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_10.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_10.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_10.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_11.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_11.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_11.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_12.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_12.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_12.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_13.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_13.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_13.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_14.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_14.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_14.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_15.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_15.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_15.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_16.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_16.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_16.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_17.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_17.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_17.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_18.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_18.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_18.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Pipe_Fox_19.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Pipe_Fox_CF_19.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Pipe_Fox_FA_19.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
        ]
    },
    TAOMON: {
        name: "Taomon",
        color: COLORS.YELLOW,
        cards: [
            { img: "Taomon_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Taomon_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Taomon_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Taomon_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Taomon_CF_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Taomon_FA_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Taomon_3.png", artist: ARTISTS.TRINITY_BURST.name, type: CARDS_TYPE.NORMAL },
            { img: "Taomon_CF_3.png", artist: ARTISTS.TRINITY_BURST.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Taomon_FA_3.png", artist: ARTISTS.TRINITY_BURST.name, type: CARDS_TYPE.FULL_ART },
            { img: "Taomon_4.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Taomon_CF_4.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Taomon_FA_4.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Taomon_VP_1.png", artist: ARTISTS.VPET.name, type: CARDS_TYPE.VPET_FRAME },
            { img: "Taomon_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Taomon_CF_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Taomon_FA_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Taomon_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Taomon_CF_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Taomon_FA_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Taomon_VP_2.png", artist: ARTISTS.VPET.name, type: CARDS_TYPE.VPET_FRAME },
        ]
    },
    UKA_NO_MITAMA: {
        name: "Uka no Mitama",
        color: COLORS.YELLOW,
        cards: [
            { img: "Uka_no_Mitama_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Uka_no_Mitama_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Uka_no_Mitama_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Uka_no_Mitama_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Uka_no_Mitama_CF_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Uka_no_Mitama_FA_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Uka_no_Mitama_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Uka_no_Mitama_CF_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Uka_no_Mitama_FA_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Uka_no_Mitama_4.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Uka_no_Mitama_CF_4.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Uka_no_Mitama_FA_4.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
        ]
    },
    UMON_OF_BLUE_THUNDER: {
        name: "Umon of Blue Thunder",
        color: COLORS.YELLOW,
        cards: [
            { img: "Umon_of_Blue_Thunder_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Umon_of_Blue_Thunder_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Umon_of_Blue_Thunder_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Umon_of_Blue_Thunder_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Umon_of_Blue_Thunder_CF_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Umon_of_Blue_Thunder_FA_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Umon_of_Blue_Thunder_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Umon_of_Blue_Thunder_CF_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Umon_of_Blue_Thunder_FA_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Umon_of_Blue_Thunder_4.png", artist: ARTISTS.KOH_TSURANUKI.name, type: CARDS_TYPE.NORMAL },
            { img: "Umon_of_Blue_Thunder_CF_4.png", artist: ARTISTS.KOH_TSURANUKI.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Umon_of_Blue_Thunder_FA_4.png", artist: ARTISTS.KOH_TSURANUKI.name, type: CARDS_TYPE.FULL_ART },
            { img: "Umon_of_Blue_Thunder_5.png", artist: ARTISTS.TAI.name, type: CARDS_TYPE.NORMAL },
            { img: "Umon_of_Blue_Thunder_CF_5.png", artist: ARTISTS.TAI.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Umon_of_Blue_Thunder_FA_5.png", artist: ARTISTS.TAI.name, type: CARDS_TYPE.FULL_ART },
        ]
    },
    RAPIDMON: {
        name: "Rapidmon",
        color: COLORS.GREEN,
        cards: [
            { img: "Rapidmon_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Rapidmon_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Rapidmon_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Rapidmon_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Rapidmon_CF_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Rapidmon_FA_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Rapidmon_3.png", artist: ARTISTS.TRINITY_BURST.name, type: CARDS_TYPE.NORMAL },
            { img: "Rapidmon_CF_3.png", artist: ARTISTS.TRINITY_BURST.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Rapidmon_FA_3.png", artist: ARTISTS.TRINITY_BURST.name, type: CARDS_TYPE.FULL_ART },
            { img: "Rapidmon_4.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Rapidmon_CF_4.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Rapidmon_FA_4.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Rapidmon_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Rapidmon_CF_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Rapidmon_FA_5.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Rapidmon_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Rapidmon_CF_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Rapidmon_FA_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Rapidmon_VP_1.png", artist: ARTISTS.VPET.name, type: CARDS_TYPE.VPET_FRAME },
            { img: "Rapidmon_VP_2.png", artist: ARTISTS.VPET.name, type: CARDS_TYPE.VPET_FRAME },
        ]
    },
    KOHAGURUMON: {
        name: "KoHagurumon",
        color: COLORS.BLACK,
        cards: [
            { img: "KoHagurumon_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "KoHagurumon_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "KoHagurumon_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "KoHagurumon_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "KoHagurumon_CF_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "KoHagurumon_FA_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "KoHagurumon_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "KoHagurumon_CF_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "KoHagurumon_FA_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "KoHagurumon_4.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "KoHagurumon_CF_4.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "KoHagurumon_FA_4.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "KoHagurumon_5.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.NORMAL },
            { img: "KoHagurumon_CF_5.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "KoHagurumon_FA_5.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.FULL_ART },
            { img: "KoHagurumon_6.png", artist: ARTISTS.HEKITO.name, type: CARDS_TYPE.NORMAL },
            { img: "KoHagurumon_CF_6.png", artist: ARTISTS.HEKITO.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "KoHagurumon_FA_6.png", artist: ARTISTS.HEKITO.name, type: CARDS_TYPE.FULL_ART },
        ]
    },
    FUJITSUMON: {
        name: "Fujitsumon",
        color: COLORS.PURPLE,
        cards: [
            { img: "Fujitsumon_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Fujitsumon_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Fujitsumon_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Fujitsumon_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Fujitsumon_CF_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Fujitsumon_FA_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Fujitsumon_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Fujitsumon_CF_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Fujitsumon_FA_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Fujitsumon_4.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.NORMAL },
            { img: "Fujitsumon_CF_4.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Fujitsumon_FA_4.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.FULL_ART },
            { img: "Fujitsumon_5.png", artist: ARTISTS.HEKITO.name, type: CARDS_TYPE.NORMAL },
            { img: "Fujitsumon_CF_5.png", artist: ARTISTS.HEKITO.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Fujitsumon_FA_5.png", artist: ARTISTS.HEKITO.name, type: CARDS_TYPE.FULL_ART },
        ]
    },
    GYUUKIMON: {
        name: "Gyuukimon",
        color: COLORS.PURPLE,
        cards: [
            { img: "Gyuukimon_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Gyuukimon_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Gyuukimon_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Gyuukimon_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Gyuukimon_CF_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Gyuukimon_FA_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Gyuukimon_3.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Gyuukimon_CF_3.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Gyuukimon_FA_3.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
        ]
    },
    VOLEE_AND_ZERDRUCKEN: {
        name: "Volée & Zerdrücken",
        color: COLORS.PURPLE,
        cards: [
            { img: "Volée_&_Zerdrücken_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Volée_&_Zerdrücken_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Volée_&_Zerdrücken_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Volée_&_Zerdrücken_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Volée_&_Zerdrücken_CF_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Volée_&_Zerdrücken_FA_2.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Volée_&_Zerdrücken_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Volée_&_Zerdrücken_CF_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Volée_&_Zerdrücken_FA_3.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Volée_&_Zerdrücken_4.png", artist: ARTISTS.SHARKMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Volée_&_Zerdrücken_CF_4.png", artist: ARTISTS.SHARKMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Volée_&_Zerdrücken_FA_4.png", artist: ARTISTS.SHARKMON.name, type: CARDS_TYPE.FULL_ART },
        ]
    },
    ATHO_RENE_AND_POR: {
        name: "Atho, René & Por",
        color: COLORS.WHITE,
        cards: [
            { img: "Atho_René_&_Por_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Atho_René_&_Por_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Atho_René_&_Por_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Atho_René_&_Por_2.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Atho_René_&_Por_CF_2.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Atho_René_&_Por_FA_2.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Atho_René_&_Por_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Atho_René_&_Por_CF_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Atho_René_&_Por_FA_3.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Atho_René_&_Por_4.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Atho_René_&_Por_CF_4.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Atho_René_&_Por_FA_4.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Atho_René_&_Por_5.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Atho_René_&_Por_CF_5.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Atho_René_&_Por_FA_5.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Atho_René_&_Por_6.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.NORMAL },
            { img: "Atho_René_&_Por_CF_6.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Atho_René_&_Por_FA_6.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Atho_René_&_Por_7.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Atho_René_&_Por_CF_7.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Atho_René_&_Por_FA_7.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Atho_René_&_Por_8.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Atho_René_&_Por_CF_8.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Atho_René_&_Por_FA_8.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Atho_René_&_Por_9.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Atho_René_&_Por_CF_9.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Atho_René_&_Por_FA_9.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
        ]
    },
    DIABOROMON: {
        name: "Diaboromon",
        color: COLORS.WHITE,
        cards: [
            { img: "Diaboromon_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Diaboromon_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Diaboromon_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Diaboromon_SP_1.png", artist: ARTISTS.ENRIQUE.name, type: CARDS_TYPE.SPECIAL },
            { img: "Diaboromon_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.NORMAL },
            { img: "Diaboromon_CF_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Diaboromon_FA_2.png", artist: ARTISTS.DEMONDRAMON.name, type: CARDS_TYPE.FULL_ART },
            { img: "Diaboromon_3.png", artist: ARTISTS.SPARERIBS.name, type: CARDS_TYPE.NORMAL },
            { img: "Diaboromon_CF_3.png", artist: ARTISTS.SPARERIBS.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Diaboromon_FA_3.png", artist: ARTISTS.SPARERIBS.name, type: CARDS_TYPE.FULL_ART },
            { img: "Diaboromon_4.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.NORMAL },
            { img: "Diaboromon_CF_4.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Diaboromon_FA_4.png", artist: ARTISTS.SINOBALI.name, type: CARDS_TYPE.FULL_ART },
            { img: "Diaboromon_5.png", artist: ARTISTS.BAKAMAOKUN.name, type: CARDS_TYPE.NORMAL },
            { img: "Diaboromon_CF_5.png", artist: ARTISTS.BAKAMAOKUN.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Diaboromon_FA_5.png", artist: ARTISTS.BAKAMAOKUN.name, type: CARDS_TYPE.FULL_ART },
            { img: "Diaboromon_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Diaboromon_CF_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Diaboromon_FA_6.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Diaboromon_VP_1.png", artist: ARTISTS.VPET.name, type: CARDS_TYPE.VPET_FRAME },
        ]
    },
    SUKAMON: {
        name: "Sukamon",
        color: COLORS.WHITE,
        cards: [
            { img: "Sukamon_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Sukamon_CF_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Sukamon_FA_1.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Sukamon_2.png", artist: ARTISTS.IRASA.name, type: CARDS_TYPE.NORMAL },
            { img: "Sukamon_CF_2.png", artist: ARTISTS.IRASA.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Sukamon_FA_2.png", artist: ARTISTS.IRASA.name, type: CARDS_TYPE.FULL_ART },
            { img: "Sukamon_3.png", artist: ARTISTS.PROFILE.name, type: CARDS_TYPE.NORMAL },
            { img: "Sukamon_CF_3.png", artist: ARTISTS.PROFILE.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Sukamon_FA_3.png", artist: ARTISTS.PROFILE.name, type: CARDS_TYPE.FULL_ART },
            { img: "Sukamon_4.png", artist: ARTISTS.RERAID.name, type: CARDS_TYPE.NORMAL },
            { img: "Sukamon_CF_4.png", artist: ARTISTS.RERAID.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Sukamon_FA_4.png", artist: ARTISTS.RERAID.name, type: CARDS_TYPE.FULL_ART },
            { img: "Sukamon_SP_1.png", artist: ARTISTS.RERAID.name, type: CARDS_TYPE.SPECIAL },
            { img: "Sukamon_5.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Sukamon_CF_5.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Sukamon_FA_5.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Sukamon_VP_1.png", artist: ARTISTS.VPET.name, type: CARDS_TYPE.VPET_FRAME },
            { img: "Sukamon_6.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.NORMAL },
            { img: "Sukamon_CF_6.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Sukamon_FA_6.png", artist: ARTISTS.REFERENCE_BOOK.name, type: CARDS_TYPE.FULL_ART },
            { img: "Sukamon_7.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.NORMAL },
            { img: "Sukamon_CF_7.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.COLOR_FRAME },
            { img: "Sukamon_FA_7.png", artist: ARTISTS.DIM_CARD.name, type: CARDS_TYPE.FULL_ART },
            { img: "Sukamon_VP_2.png", artist: ARTISTS.VPET.name, type: CARDS_TYPE.VPET_FRAME },
        ]
    },
}