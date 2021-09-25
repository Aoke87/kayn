/**
 * AccountDTO
 */
export interface AccountV1AccountDTO {
    puuid: string
    /**
     * This field may be excluded from the response if the account doesn't have a gameName.
     */
    gameName?: string
    /**
     * This field may be excluded from the response if the account doesn't have a tagLine.
     */
    tagLine?: string
}
/**
 * ActiveShardDTO
 */
export interface AccountV1ActiveShardDTO {
    puuid: string
    game: string
    activeShard: string
}
/**
 * ChampionMasteryDTO
 * This object contains single Champion Mastery information for player and champion combination.
 */
export interface ChampionMasteryV4ChampionMasteryDTO {
    /**
     * Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.
     */
    championPointsUntilNextLevel: number // int64
    /**
     * Is chest granted for this champion or not in current season.
     */
    chestGranted: boolean
    /**
     * Champion ID for this entry.
     */
    championId: number // int64
    /**
     * Last time this champion was played by this player - in Unix milliseconds time format.
     */
    lastPlayTime: number // int64
    /**
     * Champion level for specified player and champion combination.
     */
    championLevel: number // int32
    /**
     * Summoner ID for this entry. (Encrypted)
     */
    summonerId: string
    /**
     * Total number of champion points for this player and champion combination - they are used to determine championLevel.
     */
    championPoints: number // int32
    /**
     * Number of points earned since current level has been achieved.
     */
    championPointsSinceLastLevel: number // int64
    /**
     * The token earned for this champion at the current championLevel. When the championLevel is advanced the tokensEarned resets to 0.
     */
    tokensEarned: number // int32
}
/**
 * ChampionInfo
 */
export interface ChampionV3ChampionInfo {
    maxNewPlayerLevel: number // int32
    freeChampionIdsForNewPlayers: number /* int32 */[]
    freeChampionIds: number /* int32 */[]
}
/**
 * PlayerDTO
 */
export interface ClashV1PlayerDTO {
    summonerId: string
    teamId?: string
    /**
     * (Legal values:  UNSELECTED,  FILL,  TOP,  JUNGLE,  MIDDLE,  BOTTOM,  UTILITY)
     */
    position: 'UNSELECTED' | 'FILL' | 'TOP' | 'JUNGLE' | 'MIDDLE' | 'BOTTOM' | 'UTILITY'
    /**
     * (Legal values:  CAPTAIN,  MEMBER)
     */
    role: 'CAPTAIN' | 'MEMBER'
}
/**
 * TeamDTO
 */
export interface ClashV1TeamDTO {
    id: string
    tournamentId: number // int32
    name: string
    iconId: number // int32
    tier: number // int32
    /**
     * Summoner ID of the team captain.
     */
    captain: string
    abbreviation: string
    /**
     * Team members.
     */
    players: ClashV1PlayerDTO[]
}
/**
 * TournamentDTO
 */
export interface ClashV1TournamentDTO {
    id: number // int32
    themeId: number // int32
    nameKey: string
    nameKeySecondary: string
    /**
     * Tournament phase.
     */
    schedule: ClashV1TournamentPhaseDTO[]
}
/**
 * TournamentPhaseDTO
 */
export interface ClashV1TournamentPhaseDTO {
    id: number // int32
    registrationTime: number // int64
    startTime: number // int64
    cancelled: boolean
}
export interface Error {
    status?: {
        status_code?: number
        message?: string
    }
}
/**
 * LeagueEntryDTO
 */
export interface LeagueExpV4LeagueEntryDTO {
    leagueId: string
    /**
     * Player's summonerId (Encrypted)
     */
    summonerId: string
    summonerName: string
    queueType: string
    tier: string
    /**
     * The player's division within a tier.
     */
    rank: string
    leaguePoints: number // int32
    /**
     * Winning team on Summoners Rift. First placement in Teamfight Tactics.
     */
    wins: number // int32
    /**
     * Losing team on Summoners Rift. Second through eighth placement in Teamfight Tactics.
     */
    losses: number // int32
    hotStreak: boolean
    veteran: boolean
    freshBlood: boolean
    inactive: boolean
    miniSeries?: LeagueExpV4MiniSeriesDTO
}
/**
 * MiniSeriesDTO
 */
export interface LeagueExpV4MiniSeriesDTO {
    losses: number // int32
    progress: string
    target: number // int32
    wins: number // int32
}
/**
 * LeagueEntryDTO
 */
export interface LeagueV4LeagueEntryDTO {
    leagueId: string
    /**
     * Player's encrypted summonerId.
     */
    summonerId: string
    summonerName: string
    queueType: string
    tier: string
    /**
     * The player's division within a tier.
     */
    rank: string
    leaguePoints: number // int32
    /**
     * Winning team on Summoners Rift.
     */
    wins: number // int32
    /**
     * Losing team on Summoners Rift.
     */
    losses: number // int32
    hotStreak: boolean
    veteran: boolean
    freshBlood: boolean
    inactive: boolean
    miniSeries?: LeagueV4MiniSeriesDTO
}
/**
 * LeagueItemDTO
 */
export interface LeagueV4LeagueItemDTO {
    freshBlood: boolean
    /**
     * Winning team on Summoners Rift.
     */
    wins: number // int32
    summonerName: string
    miniSeries?: LeagueV4MiniSeriesDTO
    inactive: boolean
    veteran: boolean
    hotStreak: boolean
    rank: string
    leaguePoints: number // int32
    /**
     * Losing team on Summoners Rift.
     */
    losses: number // int32
    /**
     * Player's encrypted summonerId.
     */
    summonerId: string
}
/**
 * LeagueListDTO
 */
export interface LeagueV4LeagueListDTO {
    leagueId: string
    entries: LeagueV4LeagueItemDTO[]
    tier: string
    name: string
    queue: string
}
/**
 * MiniSeriesDTO
 */
export interface LeagueV4MiniSeriesDTO {
    losses: number // int32
    progress: string
    target: number // int32
    wins: number // int32
}
/**
 * Incident
 */
export interface LolStatusV3Incident {
    id: number // int64
    active: boolean
    created_at: string
    updates: LolStatusV3Message[]
}
/**
 * Message
 */
export interface LolStatusV3Message {
    id: string
    author: string
    heading: string
    content: string
    severity: string
    created_at: string
    updated_at: string
    translations: LolStatusV3Translation[]
}
/**
 * Service
 */
export interface LolStatusV3Service {
    name: string
    slug: string
    status: string
    incidents: LolStatusV3Incident[]
}
/**
 * ShardStatus
 */
export interface LolStatusV3ShardStatus {
    locales: string[]
    hostname: string
    name: string
    services: LolStatusV3Service[]
    slug: string
    region_tag: string
}
/**
 * Translation
 */
export interface LolStatusV3Translation {
    updated_at: string
    locale: string
    content: string
}
/**
 * ContentDTO
 */
export interface LolStatusV4ContentDTO {
    locale: string
    content: string
}
/**
 * PlatformDataDTO
 */
export interface LolStatusV4PlatformDataDTO {
    id: string
    name: string
    locales: string[]
    maintenances: LolStatusV4StatusDTO[]
    incidents: LolStatusV4StatusDTO[]
}
/**
 * StatusDTO
 */
export interface LolStatusV4StatusDTO {
    id: number // int32
    /**
     * (Legal values:  scheduled,  in_progress,  complete)
     */
    maintenance_status: 'scheduled' | 'in_progress' | 'complete'
    /**
     * (Legal values:  info,  warning,  critical)
     */
    incident_severity: 'info' | 'warning' | 'critical'
    titles: LolStatusV4ContentDTO[]
    updates: LolStatusV4UpdateDTO[]
    created_at: string
    archive_at: string
    updated_at: string
    /**
     * (Legal values: windows, macos, android, ios, ps4, xbone, switch)
     */
    platforms: 'windows' | 'macos' | 'android' | 'ios' | 'ps4' | 'xbone' | 'switch'
}
/**
 * UpdateDTO
 */
export interface LolStatusV4UpdateDTO {
    id: number // int32
    author: string
    publish: boolean
    /**
     * (Legal values: riotclient, riotstatus, game)
     */
    publish_locations: 'riotclient' | 'riotstatus' | 'game'
    translations: LolStatusV4ContentDTO[]
    created_at: string
    updated_at: string
}
/**
 * DeckDTO
 */
export interface LorDeckV1DeckDTO {
    id: string
    name: string
    code: string
}
/**
 * NewDeckDTO
 */
export interface LorDeckV1NewDeckDTO {
    name: string
    code: string
}
/**
 * CardDTO
 */
export interface LorInventoryV1CardDTO {
    code: string
    count: string
}
/**
 * InfoDTO
 */
export interface LorMatchV1InfoDTO {
    /**
     * (Legal values:  Constructed,  Expeditions,  Tutorial)
     */
    game_mode: 'Constructed' | 'Expeditions' | 'Tutorial'
    /**
     * (Legal values:  Ranked,  Normal,  AI,  Tutorial,  VanillaTrial,  Singleton,  StandardGauntlet)
     */
    game_type: 'Ranked' | 'Normal' | 'AI' | 'Tutorial' | 'VanillaTrial' | 'Singleton' | 'StandardGauntlet'
    game_start_time_utc: string
    game_version: string
    players: LorMatchV1PlayerDTO[]
    /**
     * Total turns taken by both players.
     */
    total_turn_count: number // int32
}
/**
 * MatchDTO
 */
export interface LorMatchV1MatchDTO {
    /**
     * Match metadata.
     */
    metadata: LorMatchV1MetadataDTO
    /**
     * Match info.
     */
    info: LorMatchV1InfoDTO
}
/**
 * MetadataDTO
 */
export interface LorMatchV1MetadataDTO {
    /**
     * Match data version.
     */
    data_version: string
    /**
     * Match id.
     */
    match_id: string
    /**
     * A list of participant PUUIDs.
     */
    participants: string[]
}
/**
 * PlayerDTO
 */
export interface LorMatchV1PlayerDTO {
    puuid: string
    deck_id: string
    /**
     * Code for the deck played. Refer to LOR documentation for details on deck codes.
     */
    deck_code: string
    factions: string[]
    game_outcome: string
    /**
     * The order in which the players took turns.
     */
    order_of_play: number // int32
}
/**
 * LeaderboardDTO
 */
export interface LorRankedV1LeaderboardDTO {
    /**
     * A list of players in Master tier.
     */
    players: LorRankedV1PlayerDTO[]
}
/**
 * PlayerDTO
 */
export interface LorRankedV1PlayerDTO {
    name: string
    rank: number // int32
    /**
     * League points.
     */
    lp: number // int32
}
/**
 * ContentDTO
 */
export interface LorStatusV1ContentDTO {
    locale: string
    content: string
}
/**
 * PlatformDataDTO
 */
export interface LorStatusV1PlatformDataDTO {
    id: string
    name: string
    locales: string[]
    maintenances: LorStatusV1StatusDTO[]
    incidents: LorStatusV1StatusDTO[]
}
/**
 * StatusDTO
 */
export interface LorStatusV1StatusDTO {
    id: number // int32
    /**
     * (Legal values:  scheduled,  in_progress,  complete)
     */
    maintenance_status: 'scheduled' | 'in_progress' | 'complete'
    /**
     * (Legal values:  info,  warning,  critical)
     */
    incident_severity: 'info' | 'warning' | 'critical'
    titles: LorStatusV1ContentDTO[]
    updates: LorStatusV1UpdateDTO[]
    created_at: string
    archive_at: string
    updated_at: string
    /**
     * (Legal values: windows, macos, android, ios, ps4, xbone, switch)
     */
    platforms: 'windows' | 'macos' | 'android' | 'ios' | 'ps4' | 'xbone' | 'switch'
}
/**
 * UpdateDTO
 */
export interface LorStatusV1UpdateDTO {
    id: number // int32
    author: string
    publish: boolean
    /**
     * (Legal values: riotclient, riotstatus, game)
     */
    publish_locations: 'riotclient' | 'riotstatus' | 'game'
    translations: LorStatusV1ContentDTO[]
    created_at: string
    updated_at: string
}
/**
 * MasteryDTO
 */
export interface MatchV4MasteryDTO {
    rank: number // int32
    masteryId: number // int32
}
/**
 * MatchDTO
 */
export interface MatchV4MatchDTO {
    gameId: number // int64
    /**
     * Participant identity information. Participant identity information is purposefully excluded for custom games.
     */
    participantIdentities: MatchV4ParticipantIdentityDTO[]
    /**
     * Refer to the Game Constants documentation.
     */
    queueId: number // int32
    /**
     * Refer to the Game Constants documentation.
     */
    gameType: string
    /**
     * Match duration in seconds.
     */
    gameDuration: number // int64
    /**
     * Team information.
     */
    teams: MatchV4TeamStatsDTO[]
    /**
     * Platform where the match was played.
     */
    platformId: string
    /**
     * Designates the timestamp when champion select ended and the loading screen appeared, NOT when the game timer was at 0:00.
     */
    gameCreation: number // int64
    /**
     * Refer to the Game Constants documentation.
     */
    seasonId: number // int32
    /**
     * The major.minor version typically indicates the patch the match was played on.
     */
    gameVersion: string
    /**
     * Refer to the Game Constants documentation.
     */
    mapId: number // int32
    /**
     * Refer to the Game Constants documentation.
     */
    gameMode: string
    /**
     * Participant information.
     */
    participants: MatchV4ParticipantDTO[]
}
/**
 * MatchEventDTO
 */
export interface MatchV4MatchEventDTO {
    laneType?: string
    skillSlot?: number // int32
    ascendedType?: string
    creatorId?: number // int32
    afterId?: number // int32
    eventType?: string
    /**
     * (Legal values:  CHAMPION_KILL,  WARD_PLACED,  WARD_KILL,  BUILDING_KILL,  ELITE_MONSTER_KILL,  ITEM_PURCHASED,  ITEM_SOLD,  ITEM_DESTROYED,  ITEM_UNDO,  SKILL_LEVEL_UP,  ASCENDED_EVENT,  CAPTURE_POINT,  PORO_KING_SUMMON)
     */
    type:
        | 'CHAMPION_KILL'
        | 'WARD_PLACED'
        | 'WARD_KILL'
        | 'BUILDING_KILL'
        | 'ELITE_MONSTER_KILL'
        | 'ITEM_PURCHASED'
        | 'ITEM_SOLD'
        | 'ITEM_DESTROYED'
        | 'ITEM_UNDO'
        | 'SKILL_LEVEL_UP'
        | 'ASCENDED_EVENT'
        | 'CAPTURE_POINT'
        | 'PORO_KING_SUMMON'
    levelUpType?: string
    wardType?: string
    participantId?: number // int32
    towerType?: string
    itemId?: number // int32
    beforeId?: number // int32
    pointCaptured?: string
    monsterType?: string
    monsterSubType?: string
    teamId?: number // int32
    position?: MatchV4MatchPositionDTO
    killerId?: number // int32
    timestamp: number // int64
    assistingParticipantIds?: number /* int32 */[]
    buildingType?: string
    victimId?: number // int32
}
/**
 * MatchFrameDTO
 */
export interface MatchV4MatchFrameDTO {
    participantFrames: {
        [name: string]: MatchV4MatchParticipantFrameDTO
    }
    events: MatchV4MatchEventDTO[]
    timestamp: number // int64
}
/**
 * MatchParticipantFrameDTO
 */
export interface MatchV4MatchParticipantFrameDTO {
    participantId: number // int32
    minionsKilled: number // int32
    teamScore?: number // int32
    dominionScore?: number // int32
    totalGold: number // int32
    level: number // int32
    xp: number // int32
    currentGold: number // int32
    position?: MatchV4MatchPositionDTO
    jungleMinionsKilled: number // int32
}
/**
 * MatchPositionDTO
 */
export interface MatchV4MatchPositionDTO {
    x: number // int32
    y: number // int32
}
/**
 * MatchReferenceDTO
 */
export interface MatchV4MatchReferenceDTO {
    gameId: number // int64
    role?: string
    season: number // int32
    platformId: string
    champion: number // int32
    queue: number // int32
    lane?: string
    timestamp: number // int64
}
/**
 * MatchTimelineDTO
 */
export interface MatchV4MatchTimelineDTO {
    frames: MatchV4MatchFrameDTO[]
    frameInterval: number // int64
}
/**
 * MatchlistDTO
 */
export interface MatchV4MatchlistDTO {
    startIndex: number // int32
    /**
     * There is a known issue that this field doesn't correctly return the total number of games that match the parameters of the request. Please paginate using beginIndex until you reach the end of a player's matchlist.
     */
    totalGames: number // int32
    endIndex: number // int32
    matches: MatchV4MatchReferenceDTO[]
}
/**
 * ParticipantDTO
 */
export interface MatchV4ParticipantDTO {
    participantId: number // int32
    championId: number // int32
    /**
     * List of legacy Rune information. Not included for matches played with Runes Reforged.
     */
    runes?: MatchV4RuneDTO[]
    /**
     * Participant statistics.
     */
    stats: MatchV4ParticipantStatsDTO
    /**
     * 100 for blue side. 200 for red side.
     */
    teamId: number // int32
    /**
     * Participant timeline data.
     */
    timeline?: MatchV4ParticipantTimelineDTO
    /**
     * First Summoner Spell id.
     */
    spell1Id: number // int32
    /**
     * Second Summoner Spell id.
     */
    spell2Id: number // int32
    /**
     * Highest ranked tier achieved for the previous season in a specific subset of queueIds, if any, otherwise null. Used to display border in game loading screen. Please refer to the Ranked Info documentation.
     *              (Legal values:  CHALLENGER,  MASTER,  DIAMOND,  PLATINUM,  GOLD,  SILVER,  BRONZE,  UNRANKED)
     */
    highestAchievedSeasonTier?: 'CHALLENGER' | 'MASTER' | 'DIAMOND' | 'PLATINUM' | 'GOLD' | 'SILVER' | 'BRONZE' | 'UNRANKED'
    /**
     * List of legacy Mastery information. Not included for matches played with Runes Reforged.
     */
    masteries?: MatchV4MasteryDTO[]
}
/**
 * ParticipantIdentityDTO
 */
export interface MatchV4ParticipantIdentityDTO {
    participantId: number // int32
    /**
     * Player information not included in the response for custom matches. Custom matches are considered private unless a tournament code was used to create the match.
     */
    player: MatchV4PlayerDTO
}
/**
 * ParticipantStatsDTO
 */
export interface MatchV4ParticipantStatsDTO {
    item0: number // int32
    item2: number // int32
    totalUnitsHealed: number // int32
    item1: number // int32
    largestMultiKill: number // int32
    goldEarned: number // int32
    firstInhibitorKill?: boolean
    physicalDamageTaken: number // int64
    nodeNeutralizeAssist?: number // int32
    totalPlayerScore?: number // int32
    champLevel: number // int32
    damageDealtToObjectives: number // int64
    totalDamageTaken: number // int64
    neutralMinionsKilled: number // int32
    deaths: number // int32
    tripleKills: number // int32
    magicDamageDealtToChampions: number // int64
    wardsKilled?: number // int32
    pentaKills: number // int32
    damageSelfMitigated: number // int64
    largestCriticalStrike: number // int32
    nodeNeutralize?: number // int32
    totalTimeCrowdControlDealt: number // int32
    firstTowerKill?: boolean
    magicDamageDealt: number // int64
    totalScoreRank?: number // int32
    nodeCapture?: number // int32
    wardsPlaced?: number // int32
    totalDamageDealt: number // int64
    timeCCingOthers: number // int64
    magicalDamageTaken: number // int64
    largestKillingSpree: number // int32
    totalDamageDealtToChampions: number // int64
    physicalDamageDealtToChampions: number // int64
    neutralMinionsKilledTeamJungle?: number // int32
    totalMinionsKilled: number // int32
    firstInhibitorAssist?: boolean
    visionWardsBoughtInGame: number // int32
    objectivePlayerScore?: number // int32
    kills: number // int32
    firstTowerAssist?: boolean
    combatPlayerScore?: number // int32
    inhibitorKills?: number // int32
    turretKills?: number // int32
    participantId: number // int32
    trueDamageTaken: number // int64
    firstBloodAssist?: boolean
    nodeCaptureAssist?: number // int32
    assists: number // int32
    teamObjective?: number // int32
    altarsNeutralized?: number // int32
    goldSpent: number // int32
    damageDealtToTurrets: number // int64
    altarsCaptured?: number // int32
    win: boolean
    totalHeal: number // int64
    unrealKills: number // int32
    visionScore?: number // int64
    physicalDamageDealt: number // int64
    firstBloodKill?: boolean
    longestTimeSpentLiving: number // int32
    killingSprees: number // int32
    sightWardsBoughtInGame?: number // int32
    trueDamageDealtToChampions: number // int64
    neutralMinionsKilledEnemyJungle?: number // int32
    doubleKills: number // int32
    trueDamageDealt: number // int64
    quadraKills: number // int32
    item4: number // int32
    item3: number // int32
    item6: number // int32
    item5: number // int32
    playerScore0?: number // int32
    playerScore1?: number // int32
    playerScore2?: number // int32
    playerScore3?: number // int32
    playerScore4?: number // int32
    playerScore5?: number // int32
    playerScore6?: number // int32
    playerScore7?: number // int32
    playerScore8?: number // int32
    playerScore9?: number // int32
    /**
     * Primary path keystone rune.
     */
    perk0?: number // int32
    /**
     * Post game rune stats.
     */
    perk0Var1?: number // int32
    /**
     * Post game rune stats.
     */
    perk0Var2?: number // int32
    /**
     * Post game rune stats.
     */
    perk0Var3?: number // int32
    /**
     * Primary path rune.
     */
    perk1?: number // int32
    /**
     * Post game rune stats.
     */
    perk1Var1?: number // int32
    /**
     * Post game rune stats.
     */
    perk1Var2?: number // int32
    /**
     * Post game rune stats.
     */
    perk1Var3?: number // int32
    /**
     * Primary path rune.
     */
    perk2?: number // int32
    /**
     * Post game rune stats.
     */
    perk2Var1?: number // int32
    /**
     * Post game rune stats.
     */
    perk2Var2?: number // int32
    /**
     * Post game rune stats.
     */
    perk2Var3?: number // int32
    /**
     * Primary path rune.
     */
    perk3?: number // int32
    /**
     * Post game rune stats.
     */
    perk3Var1?: number // int32
    /**
     * Post game rune stats.
     */
    perk3Var2?: number // int32
    /**
     * Post game rune stats.
     */
    perk3Var3?: number // int32
    /**
     * Secondary path rune.
     */
    perk4?: number // int32
    /**
     * Post game rune stats.
     */
    perk4Var1?: number // int32
    /**
     * Post game rune stats.
     */
    perk4Var2?: number // int32
    /**
     * Post game rune stats.
     */
    perk4Var3?: number // int32
    /**
     * Secondary path rune.
     */
    perk5?: number // int32
    /**
     * Post game rune stats.
     */
    perk5Var1?: number // int32
    /**
     * Post game rune stats.
     */
    perk5Var2?: number // int32
    /**
     * Post game rune stats.
     */
    perk5Var3?: number // int32
    /**
     * Primary rune path
     */
    perkPrimaryStyle?: number // int32
    /**
     * Secondary rune path
     */
    perkSubStyle?: number // int32
    /**
     * Stat rune
     */
    statPerk0?: number // int32
    /**
     * Stat rune
     */
    statPerk1?: number // int32
    /**
     * Stat rune
     */
    statPerk2?: number // int32
}
/**
 * ParticipantTimelineDTO
 */
export interface MatchV4ParticipantTimelineDTO {
    participantId?: number // int32
    /**
     * Creep score difference versus the calculated lane opponent(s) for a specified period.
     */
    csDiffPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Damage taken for a specified period.
     */
    damageTakenPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Participant's calculated role.
     *              (Legal values:  DUO,  NONE,  SOLO,  DUO_CARRY,  DUO_SUPPORT)
     */
    role?: 'DUO' | 'NONE' | 'SOLO' | 'DUO_CARRY' | 'DUO_SUPPORT'
    /**
     * Damage taken difference versus the calculated lane opponent(s) for a specified period.
     */
    damageTakenDiffPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Experience change for a specified period.
     */
    xpPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Experience difference versus the calculated lane opponent(s) for a specified period.
     */
    xpDiffPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Participant's calculated lane. MID and BOT are legacy values.
     *              (Legal values:  MID,  MIDDLE,  TOP,  JUNGLE,  BOT,  BOTTOM)
     */
    lane?: 'MID' | 'MIDDLE' | 'TOP' | 'JUNGLE' | 'BOT' | 'BOTTOM'
    /**
     * Creeps for a specified period.
     */
    creepsPerMinDeltas?: {
        [name: string]: number // double
    }
    /**
     * Gold for a specified period.
     */
    goldPerMinDeltas?: {
        [name: string]: number // double
    }
}
/**
 * PlayerDTO
 */
export interface MatchV4PlayerDTO {
    profileIcon: number // int32
    /**
     * Player's original accountId.
     */
    accountId: string
    matchHistoryUri: string
    /**
     * Player's current accountId when the match was played.
     */
    currentAccountId: string
    /**
     * Player's current platformId when the match was played.
     */
    currentPlatformId: string
    summonerName: string
    /**
     * Player's summonerId (Encrypted)
     */
    summonerId?: string
    /**
     * Player's original platformId.
     */
    platformId: string
}
/**
 * RuneDTO
 */
export interface MatchV4RuneDTO {
    runeId: number // int32
    rank: number // int32
}
/**
 * TeamBansDTO
 */
export interface MatchV4TeamBansDTO {
    /**
     * Banned championId.
     */
    championId: number // int32
    /**
     * Turn during which the champion was banned.
     */
    pickTurn: number // int32
}
/**
 * TeamStatsDTO
 */
export interface MatchV4TeamStatsDTO {
    /**
     * Number of towers the team destroyed.
     */
    towerKills: number // int32
    /**
     * Number of times the team killed Rift Herald.
     */
    riftHeraldKills: number // int32
    /**
     * Flag indicating whether or not the team scored the first blood.
     */
    firstBlood: boolean
    /**
     * Number of inhibitors the team destroyed.
     */
    inhibitorKills: number // int32
    /**
     * If match queueId has a draft, contains banned champion data, otherwise empty.
     */
    bans: MatchV4TeamBansDTO[]
    /**
     * Flag indicating whether or not the team scored the first Baron kill.
     */
    firstBaron: boolean
    /**
     * Flag indicating whether or not the team scored the first Dragon kill.
     */
    firstDragon: boolean
    /**
     * For Dominion matches, specifies the points the team had at game end.
     */
    dominionVictoryScore: number // int32
    /**
     * Number of times the team killed Dragon.
     */
    dragonKills: number // int32
    /**
     * Number of times the team killed Baron.
     */
    baronKills: number // int32
    /**
     * Flag indicating whether or not the team destroyed the first inhibitor.
     */
    firstInhibitor: boolean
    /**
     * Flag indicating whether or not the team destroyed the first tower.
     */
    firstTower: boolean
    /**
     * Number of times the team killed Vilemaw.
     */
    vilemawKills: number // int32
    /**
     * Flag indicating whether or not the team scored the first Rift Herald kill.
     */
    firstRiftHerald: boolean
    /**
     * 100 for blue side. 200 for red side.
     */
    teamId: number // int32
    /**
     * String indicating whether or not the team won. There are only two values visibile in public match history.
     *              (Legal values:  Fail,  Win)
     */
    win?: 'Fail' | 'Win'
}
/**
 * BanDTO
 */
export interface MatchV5BanDTO {
    championId: number // int32
    pickTurn: number // int32
}
/**
 * InfoDTO
 */
export interface MatchV5InfoDTO {
    /**
     * Unix timestamp for when the game is created (i.e., the loading screen).
     */
    gameCreation: number // int64
    /**
     * Game length in milliseconds.
     */
    gameDuration: number // int64
    gameId: number // int64
    /**
     * Refer to the Game Constants documentation.
     */
    gameMode: string
    gameName: string
    /**
     * Unix timestamp for when match actually starts.
     */
    gameStartTimestamp: number // int64
    gameType: string
    /**
     * The first two parts can be used to determine the patch a game was played on.
     */
    gameVersion: string
    /**
     * Refer to the Game Constants documentation.
     */
    mapId: number // int32
    participants: MatchV5ParticipantDTO[]
    /**
     * Platform where the match was played.
     */
    platformId: string
    /**
     * Refer to the Game Constants documentation.
     */
    queueId: number // int32
    teams: MatchV5TeamDTO[]
    /**
     * Tournament code used to generate the match.
     */
    tournamentCode?: string
}
/**
 * MatchDTO
 */
export interface MatchV5MatchDTO {
    /**
     * Match metadata.
     */
    metadata: MatchV5MetadataDTO
    /**
     * Match info.
     */
    info: MatchV5InfoDTO
}
/**
 * MatchTimelineDTO
 */
export interface MatchV5MatchTimelineDTO {
    metadata: MatchV5MetadataDTO
    info: MatchV5MatchTimelineInfo
}
/**
 * MatchTimelineInfo
 */
export interface MatchV5MatchTimelineInfo {
    frameInterval: number // int32
    frames: MatchV5MatchTimelineInfoFrame[]
    gameId: number // int64
    participants: MatchV5MatchTimelineInfoParticipant[]
}
/**
 * MatchTimelineInfoFrame
 */
export interface MatchV5MatchTimelineInfoFrame {
    events: MatchV5MatchTimelineInfoFrameEvent[]
    participantFrames: MatchV5MatchTimelineInfoFrameParticipantFrames
    timestamp: number // int32
}
/**
 * MatchTimelineInfoFrameEvent
 */
export interface MatchV5MatchTimelineInfoFrameEvent {
    realTimestamp?: number // int64
    timestamp: number // int32
    /**
     * Timeline event type.
     * (Known legal values: ASCENDED_EVENT, BUILDING_KILL, CAPTURE_POINT, CHAMPION_KILL, CHAMPION_SPECIAL_KILL, CHAMPION_TRANSFORM, DRAGON_SOUL_GIVEN, ELITE_MONSTER_KILL, GAME_END, ITEM_DESTROYED, ITEM_PURCHASED, ITEM_SOLD, ITEM_UNDO, LEVEL_UP, PAUSE_END, PAUSE_START, SKILL_LEVEL_UP, TURRET_PLATE_DESTROYED, WARD_KILL, WARD_PLACED)
     */
    type:
        | 'ASCENDED_EVENT'
        | 'BUILDING_KILL'
        | 'CAPTURE_POINT'
        | 'CHAMPION_KILL'
        | 'CHAMPION_SPECIAL_KILL'
        | 'CHAMPION_TRANSFORM'
        | 'DRAGON_SOUL_GIVEN'
        | 'ELITE_MONSTER_KILL'
        | 'GAME_END'
        | 'ITEM_DESTROYED'
        | 'ITEM_PURCHASED'
        | 'ITEM_SOLD'
        | 'ITEM_UNDO'
        | 'LEVEL_UP'
        | 'PAUSE_END'
        | 'PAUSE_START'
        | 'SKILL_LEVEL_UP'
        | 'TURRET_PLATE_DESTROYED'
        | 'WARD_KILL'
        | 'WARD_PLACED'
    itemId?: number // int32
    participantId?: number // int32
    levelUpType?: string
    skillSlot?: number // int32
    creatorId?: number // int32
    wardType?: string
    level?: number // int32
    assistingParticipantIds?: number /* int32 */[]
    bounty?: number // int32
    killStreakLength?: number // int32
    killerId?: number // int32
    position?: MatchV5MatchTimelinePosition
    victimDamageDealt?: MatchV5MatchTimelineInfoFrameEventVictimDamageDealt[]
    victimDamageReceived?: MatchV5MatchTimelineInfoFrameEventVictimDamageDealt[]
    victimId?: number // int32
    killType?: string
    laneType?: string
    teamId?: number // int32
    multiKillLength?: number // int32
    killerTeamId?: number // int32
    monsterType?: string
    monsterSubType?: string
    buildingType?: string
    towerType?: string
    afterId?: number // int32
    beforeId?: number // int32
    goldGain?: number // int32
    gameId?: number // int64
    winningTeam?: number // int32
    transformType?: string
    name?: string
}
/**
 * MatchTimelineInfoFrameEventVictimDamageReceived
 */
export interface MatchV5MatchTimelineInfoFrameEventVictimDamageDealt {
    basic: boolean
    magicDamage: number // int32
    name: string
    participantId: number // int32
    physicalDamage: number // int32
    spellName: string
    spellSlot: number // int32
    trueDamage: number // int32
    type: string
}
/**
 * MatchTimelineInfoFrameParticipantFrame
 */
export interface MatchV5MatchTimelineInfoFrameParticipantFrame {
    championStats: MatchV5MatchTimelineInfoFrameParticipantFrameChampionStats
    currentGold: number // int32
    damageStats: MatchV5MatchTimelineInfoFrameParticipantFrameDamageStats
    goldPerSecond: number // int32
    jungleMinionsKilled: number // int32
    level: number // int32
    minionsKilled: number // int32
    participantId: number // int32
    position: MatchV5MatchTimelinePosition
    timeEnemySpentControlled: number // int32
    totalGold: number // int32
    xp: number // int32
}
/**
 * MatchTimelineInfoFrameParticipantFrameChampionStats
 */
export interface MatchV5MatchTimelineInfoFrameParticipantFrameChampionStats {
    abilityHaste: number // int32
    abilityPower: number // int32
    armor: number // int32
    armorPen: number // int32
    armorPenPercent: number // int32
    attackDamage: number // int32
    attackSpeed: number // int32
    bonusArmorPenPercent: number // int32
    bonusMagicPenPercent: number // int32
    ccReduction: number // int32
    cooldownReduction: number // int32
    health: number // int32
    healthMax: number // int32
    healthRegen: number // int32
    lifesteal: number // int32
    magicPen: number // int32
    magicPenPercent: number // int32
    magicResist: number // int32
    movementSpeed: number // int32
    omnivamp: number // int32
    physicalVamp: number // int32
    power: number // int32
    powerMax: number // int32
    powerRegen: number // int32
    spellVamp: number // int32
}
/**
 * MatchTimelineInfoFrameParticipantFrameDamageStats
 */
export interface MatchV5MatchTimelineInfoFrameParticipantFrameDamageStats {
    magicDamageDone: number // int32
    magicDamageDoneToChampions: number // int32
    magicDamageTaken: number // int32
    physicalDamageDone: number // int32
    physicalDamageDoneToChampions: number // int32
    physicalDamageTaken: number // int32
    totalDamageDone: number // int32
    totalDamageDoneToChampions: number // int32
    totalDamageTaken: number // int32
    trueDamageDone: number // int32
    trueDamageDoneToChampions: number // int32
    trueDamageTaken: number // int32
}
/**
 * MatchTimelineInfoFrameParticipantFrames
 */
export interface MatchV5MatchTimelineInfoFrameParticipantFrames {
    '1': MatchV5MatchTimelineInfoFrameParticipantFrame
    '2': MatchV5MatchTimelineInfoFrameParticipantFrame
    '3': MatchV5MatchTimelineInfoFrameParticipantFrame
    '4': MatchV5MatchTimelineInfoFrameParticipantFrame
    '5': MatchV5MatchTimelineInfoFrameParticipantFrame
    '6': MatchV5MatchTimelineInfoFrameParticipantFrame
    '7': MatchV5MatchTimelineInfoFrameParticipantFrame
    '8': MatchV5MatchTimelineInfoFrameParticipantFrame
    '9': MatchV5MatchTimelineInfoFrameParticipantFrame
    '10': MatchV5MatchTimelineInfoFrameParticipantFrame
}
/**
 * MatchTimelineInfoParticipant
 */
export interface MatchV5MatchTimelineInfoParticipant {
    participantId: number // int32
    puuid: string
}
/**
 * MatchTimelinePosition
 */
export interface MatchV5MatchTimelinePosition {
    x: number // int32
    y: number // int32
}
/**
 * MetadataDTO
 */
export interface MatchV5MetadataDTO {
    /**
     * Match data version.
     */
    data_version: string
    /**
     * Match id.
     */
    match_id: string
    /**
     * A list of participant PUUIDs.
     */
    participants: string[]
}
/**
 * ObjectiveDTO
 */
export interface MatchV5ObjectiveDTO {
    first: boolean
    kills: number // int32
}
/**
 * ObjectivesDTO
 */
export interface MatchV5ObjectivesDTO {
    baron: MatchV5ObjectiveDTO
    champion: MatchV5ObjectiveDTO
    dragon: MatchV5ObjectiveDTO
    inhibitor: MatchV5ObjectiveDTO
    riftHerald: MatchV5ObjectiveDTO
    tower: MatchV5ObjectiveDTO
}
/**
 * ParticipantDTO
 */
export interface MatchV5ParticipantDTO {
    assists: number // int32
    baronKills: number // int32
    bountyLevel: number // int32
    champExperience: number // int32
    champLevel: number // int32
    championId: number // int32
    championName: string
    /**
     * This field is currently only utilized for Kayn's transformations. (Legal values: 0 - None, 1 - Slayer, 2 - Assassin)
     */
    championTransform: number // int32
    consumablesPurchased: number // int32
    damageDealtToBuildings: number // int32
    damageDealtToObjectives: number // int32
    damageDealtToTurrets: number // int32
    damageSelfMitigated: number // int32
    deaths: number // int32
    detectorWardsPlaced: number // int32
    doubleKills: number // int32
    dragonKills: number // int32
    firstBloodAssist: boolean
    firstBloodKill: boolean
    firstTowerAssist: boolean
    firstTowerKill: boolean
    gameEndedInEarlySurrender: boolean
    gameEndedInSurrender: boolean
    goldEarned: number // int32
    goldSpent: number // int32
    /**
     * Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else. The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have one top player, one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.
     */
    individualPosition: string
    inhibitorKills: number // int32
    inhibitorTakedowns?: number // int32
    inhibitorsLost: number // int32
    item0: number // int32
    item1: number // int32
    item2: number // int32
    item3: number // int32
    item4: number // int32
    item5: number // int32
    item6: number // int32
    itemsPurchased: number // int32
    killingSprees: number // int32
    kills: number // int32
    lane: string
    largestCriticalStrike: number // int32
    largestKillingSpree: number // int32
    largestMultiKill: number // int32
    longestTimeSpentLiving: number // int32
    magicDamageDealt: number // int32
    magicDamageDealtToChampions: number // int32
    magicDamageTaken: number // int32
    neutralMinionsKilled: number // int32
    nexusKills: number // int32
    nexusTakedowns?: number // int32
    nexusLost: number // int32
    objectivesStolen: number // int32
    objectivesStolenAssists: number // int32
    participantId: number // int32
    pentaKills: number // int32
    perks: MatchV5PerksDTO
    physicalDamageDealt: number // int32
    physicalDamageDealtToChampions: number // int32
    physicalDamageTaken: number // int32
    profileIcon: number // int32
    puuid: string
    quadraKills: number // int32
    riotIdName: string
    riotIdTagline: string
    role: string
    sightWardsBoughtInGame: number // int32
    spell1Casts: number // int32
    spell2Casts: number // int32
    spell3Casts: number // int32
    spell4Casts: number // int32
    summoner1Casts: number // int32
    summoner1Id: number // int32
    summoner2Casts: number // int32
    summoner2Id: number // int32
    summonerId: string
    summonerLevel: number // int32
    summonerName: string
    teamEarlySurrendered: boolean
    teamId: number // int32
    /**
     * Both individualPosition and teamPosition are computed by the game server and are different versions of the most likely position played by a player. The individualPosition is the best guess for which position the player actually played in isolation of anything else. The teamPosition is the best guess for which position the player actually played if we add the constraint that each team must have one top player, one jungle, one middle, etc. Generally the recommendation is to use the teamPosition field over the individualPosition field.
     */
    teamPosition: string
    timeCCingOthers: number // int32
    timePlayed: number // int32
    totalDamageDealt: number // int32
    totalDamageDealtToChampions: number // int32
    totalDamageShieldedOnTeammates: number // int32
    totalDamageTaken: number // int32
    totalHeal: number // int32
    totalHealsOnTeammates: number // int32
    totalMinionsKilled: number // int32
    totalTimeCCDealt: number // int32
    totalTimeSpentDead: number // int32
    totalUnitsHealed: number // int32
    tripleKills: number // int32
    trueDamageDealt: number // int32
    trueDamageDealtToChampions: number // int32
    trueDamageTaken: number // int32
    turretKills: number // int32
    turretTakedowns?: number // int32
    turretsLost: number // int32
    unrealKills: number // int32
    visionScore: number // int32
    visionWardsBoughtInGame: number // int32
    wardsKilled: number // int32
    wardsPlaced: number // int32
    win: boolean
}
/**
 * PerkStatsDTO
 */
export interface MatchV5PerkStatsDTO {
    defense: number // int32
    flex: number // int32
    offense: number // int32
}
/**
 * PerkStyleDTO
 */
export interface MatchV5PerkStyleDTO {
    description: string
    selections: MatchV5PerkStyleSelectionDTO[]
    style: number // int32
}
/**
 * PerkStyleSelectionDTO
 */
export interface MatchV5PerkStyleSelectionDTO {
    perk: number // int32
    var1: number // int32
    var2: number // int32
    var3: number // int32
}
/**
 * PerksDTO
 */
export interface MatchV5PerksDTO {
    statPerks: MatchV5PerkStatsDTO
    styles: MatchV5PerkStyleDTO[]
}
/**
 * TeamDTO
 */
export interface MatchV5TeamDTO {
    bans: MatchV5BanDTO[]
    objectives: MatchV5ObjectivesDTO
    teamId: number // int32
    win: boolean
}
/**
 * BannedChampion
 */
export interface SpectatorV4BannedChampion {
    /**
     * The turn during which the champion was banned
     */
    pickTurn: number // int32
    /**
     * The ID of the banned champion
     */
    championId: number // int64
    /**
     * The ID of the team that banned the champion
     */
    teamId: number // int64
}
/**
 * CurrentGameInfo
 */
export interface SpectatorV4CurrentGameInfo {
    /**
     * The ID of the game
     */
    gameId: number // int64
    /**
     * The game type
     */
    gameType: string
    /**
     * The game start time represented in epoch milliseconds
     */
    gameStartTime: number // int64
    /**
     * The ID of the map
     */
    mapId: number // int64
    /**
     * The amount of time in seconds that has passed since the game started
     */
    gameLength: number // int64
    /**
     * The ID of the platform on which the game is being played
     */
    platformId: string
    /**
     * The game mode
     */
    gameMode: string
    /**
     * Banned champion information
     */
    bannedChampions: SpectatorV4BannedChampion[]
    /**
     * The queue type (queue types are documented on the Game Constants page)
     */
    gameQueueConfigId?: number // int64
    /**
     * The observer information
     */
    observers: SpectatorV4Observer
    /**
     * The participant information
     */
    participants: SpectatorV4CurrentGameParticipant[]
}
/**
 * CurrentGameParticipant
 */
export interface SpectatorV4CurrentGameParticipant {
    /**
     * The ID of the champion played by this participant
     */
    championId: number // int64
    /**
     * Perks/Runes Reforged Information
     */
    perks?: SpectatorV4Perks
    /**
     * The ID of the profile icon used by this participant
     */
    profileIconId: number // int64
    /**
     * Flag indicating whether or not this participant is a bot
     */
    bot: boolean
    /**
     * The team ID of this participant, indicating the participant's team
     */
    teamId: number // int64
    /**
     * The summoner name of this participant
     */
    summonerName: string
    /**
     * The encrypted summoner ID of this participant
     */
    summonerId: string
    /**
     * The ID of the first summoner spell used by this participant
     */
    spell1Id: number // int64
    /**
     * The ID of the second summoner spell used by this participant
     */
    spell2Id: number // int64
    /**
     * List of Game Customizations
     */
    gameCustomizationObjects: SpectatorV4GameCustomizationObject[]
}
/**
 * FeaturedGameInfo
 */
export interface SpectatorV4FeaturedGameInfo {
    /**
     * The game mode
     *              (Legal values:  CLASSIC,  ODIN,  ARAM,  TUTORIAL,  ONEFORALL,  ASCENSION,  FIRSTBLOOD,  KINGPORO)
     */
    gameMode: 'CLASSIC' | 'ODIN' | 'ARAM' | 'TUTORIAL' | 'ONEFORALL' | 'ASCENSION' | 'FIRSTBLOOD' | 'KINGPORO'
    /**
     * The amount of time in seconds that has passed since the game started
     */
    gameLength: number // int64
    /**
     * The ID of the map
     */
    mapId: number // int64
    /**
     * The game type
     *              (Legal values:  CUSTOM_GAME,  MATCHED_GAME,  TUTORIAL_GAME)
     */
    gameType: 'CUSTOM_GAME' | 'MATCHED_GAME' | 'TUTORIAL_GAME'
    /**
     * Banned champion information
     */
    bannedChampions: SpectatorV4BannedChampion[]
    /**
     * The ID of the game
     */
    gameId: number // int64
    /**
     * The observer information
     */
    observers: SpectatorV4Observer
    /**
     * The queue type (queue types are documented on the Game Constants page)
     */
    gameQueueConfigId: number // int64
    /**
     * The game start time represented in epoch milliseconds
     */
    gameStartTime: number // int64
    /**
     * The participant information
     */
    participants: SpectatorV4Participant[]
    /**
     * The ID of the platform on which the game is being played
     */
    platformId: string
}
/**
 * FeaturedGames
 */
export interface SpectatorV4FeaturedGames {
    /**
     * The list of featured games
     */
    gameList: SpectatorV4FeaturedGameInfo[]
    /**
     * The suggested interval to wait before requesting FeaturedGames again
     */
    clientRefreshInterval: number // int64
}
/**
 * GameCustomizationObject
 */
export interface SpectatorV4GameCustomizationObject {
    /**
     * Category identifier for Game Customization
     */
    category: string
    /**
     * Game Customization content
     */
    content: string
}
/**
 * Observer
 */
export interface SpectatorV4Observer {
    /**
     * Key used to decrypt the spectator grid game data for playback
     */
    encryptionKey: string
}
/**
 * Participant
 */
export interface SpectatorV4Participant {
    /**
     * Flag indicating whether or not this participant is a bot
     */
    bot: boolean
    /**
     * The ID of the second summoner spell used by this participant
     */
    spell2Id: number // int64
    /**
     * The ID of the profile icon used by this participant
     */
    profileIconId: number // int64
    /**
     * The summoner name of this participant
     */
    summonerName: string
    /**
     * The ID of the champion played by this participant
     */
    championId: number // int64
    /**
     * The team ID of this participant, indicating the participant's team
     */
    teamId: number // int64
    /**
     * The ID of the first summoner spell used by this participant
     */
    spell1Id: number // int64
}
/**
 * Perks
 */
export interface SpectatorV4Perks {
    /**
     * IDs of the perks/runes assigned.
     */
    perkIds: number /* int64 */[]
    /**
     * Primary runes path
     */
    perkStyle: number // int64
    /**
     * Secondary runes path
     */
    perkSubStyle: number // int64
}
/**
 * represents a summoner
 */
export interface SummonerV4SummonerDTO {
    /**
     * Encrypted account ID. Max length 56 characters.
     */
    accountId: string
    /**
     * ID of the summoner icon associated with the summoner.
     */
    profileIconId: number // int32
    /**
     * Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change
     */
    revisionDate: number // int64
    /**
     * Summoner name.
     */
    name: string
    /**
     * Encrypted summoner ID. Max length 63 characters.
     */
    id: string
    /**
     * Encrypted PUUID. Exact length of 78 characters.
     */
    puuid: string
    /**
     * Summoner level associated with the summoner.
     */
    summonerLevel: number // int64
}
/**
 * LeagueEntryDTO
 */
export interface TftLeagueV1LeagueEntryDTO {
    /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    leagueId?: string
    /**
     * Player's encrypted summonerId.
     */
    summonerId: string
    summonerName: string
    queueType: string
    /**
     * Only included for the RANKED_TFT_TURBO queueType.
     *              (Legal values:  ORANGE,  PURPLE,  BLUE,  GREEN,  GRAY)
     */
    ratedTier?: 'ORANGE' | 'PURPLE' | 'BLUE' | 'GREEN' | 'GRAY'
    /**
     * Only included for the RANKED_TFT_TURBO queueType.
     */
    ratedRating?: number // int32
    /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    tier?: string
    /**
     * A player's division within a tier. Not included for the RANKED_TFT_TURBO queueType.
     */
    rank?: string
    /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    leaguePoints?: number // int32
    /**
     * First placement.
     */
    wins: number // int32
    /**
     * Second through eighth placement.
     */
    losses: number // int32
    /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    hotStreak?: boolean
    /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    veteran?: boolean
    /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    freshBlood?: boolean
    /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    inactive?: boolean
    /**
     * Not included for the RANKED_TFT_TURBO queueType.
     */
    miniSeries?: TftLeagueV1MiniSeriesDTO
}
/**
 * LeagueItemDTO
 */
export interface TftLeagueV1LeagueItemDTO {
    freshBlood: boolean
    /**
     * First placement.
     */
    wins: number // int32
    summonerName: string
    miniSeries?: TftLeagueV1MiniSeriesDTO
    inactive: boolean
    veteran: boolean
    hotStreak: boolean
    rank: string
    leaguePoints: number // int32
    /**
     * Second through eighth placement.
     */
    losses: number // int32
    /**
     * Player's encrypted summonerId.
     */
    summonerId: string
}
/**
 * LeagueListDTO
 */
export interface TftLeagueV1LeagueListDTO {
    leagueId: string
    entries: TftLeagueV1LeagueItemDTO[]
    tier: string
    name: string
    queue: string
}
/**
 * MiniSeriesDTO
 */
export interface TftLeagueV1MiniSeriesDTO {
    losses: number // int32
    progress: string
    target: number // int32
    wins: number // int32
}
/**
 * TopRatedLadderEntryDTO
 */
export interface TftLeagueV1TopRatedLadderEntryDTO {
    summonerId: string
    summonerName: string
    /**
     * (Legal values:  ORANGE,  PURPLE,  BLUE,  GREEN,  GRAY)
     */
    ratedTier: 'ORANGE' | 'PURPLE' | 'BLUE' | 'GREEN' | 'GRAY'
    ratedRating: number // int32
    /**
     * First placement.
     */
    wins: number // int32
    previousUpdateLadderPosition: number // int32
}
/**
 * CompanionDTO
 */
export interface TftMatchV1CompanionDTO {
    skin_ID: number // int32
    content_ID: string
    species: string
}
/**
 * InfoDTO
 */
export interface TftMatchV1InfoDTO {
    /**
     * Unix timestamp.
     */
    game_datetime: number // int64
    /**
     * Game length in seconds.
     */
    game_length: number // float
    /**
     * Game variation key. Game variations documented in TFT static data.
     */
    game_variation?: string
    /**
     * Game client version.
     */
    game_version: string
    participants: TftMatchV1ParticipantDTO[]
    /**
     * Please refer to the League of Legends documentation.
     */
    queue_id: number // int32
    /**
     * Teamfight Tactics set number.
     */
    tft_set_number: number // int32
}
/**
 * MatchDTO
 */
export interface TftMatchV1MatchDTO {
    /**
     * Match metadata.
     */
    metadata: TftMatchV1MetadataDTO
    /**
     * Match info.
     */
    info: TftMatchV1InfoDTO
}
/**
 * MetadataDTO
 */
export interface TftMatchV1MetadataDTO {
    /**
     * Match data version.
     */
    data_version: string
    /**
     * Match id.
     */
    match_id: string
    /**
     * A list of participant PUUIDs.
     */
    participants: string[]
}
/**
 * ParticipantDTO
 */
export interface TftMatchV1ParticipantDTO {
    /**
     * Participant's companion.
     */
    companion: TftMatchV1CompanionDTO
    /**
     * Gold left after participant was eliminated.
     */
    gold_left: number // int32
    /**
     * The round the participant was eliminated in. Note: If the player was eliminated in stage 2-1 their last_round would be 5.
     */
    last_round: number // int32
    /**
     * Participant Little Legend level. Note: This is not the number of active units.
     */
    level: number // int32
    /**
     * Participant placement upon elimination.
     */
    placement: number // int32
    /**
     * Number of players the participant eliminated.
     */
    players_eliminated: number // int32
    puuid: string
    /**
     * The number of seconds before the participant was eliminated.
     */
    time_eliminated: number // float
    /**
     * Damage the participant dealt to other players.
     */
    total_damage_to_players: number // int32
    /**
     * A complete list of traits for the participant's active units.
     */
    traits: TftMatchV1TraitDTO[]
    /**
     * A list of active units for the participant.
     */
    units: TftMatchV1UnitDTO[]
}
/**
 * TraitDTO
 */
export interface TftMatchV1TraitDTO {
    /**
     * Trait name.
     */
    name: string
    /**
     * Number of units with this trait.
     */
    num_units: number // int32
    /**
     * Current style for this trait. (0 = No style, 1 = Bronze, 2 = Silver, 3 = Gold, 4 = Chromatic)
     */
    style?: number // int32
    /**
     * Current active tier for the trait.
     */
    tier_current: number // int32
    /**
     * Total tiers for the trait.
     */
    tier_total?: number // int32
}
/**
 * UnitDTO
 */
export interface TftMatchV1UnitDTO {
    /**
     * A list of the unit's items. Please refer to the Teamfight Tactics documentation for item ids.
     */
    items: number /* int32 */[]
    /**
     * This field was introduced in patch 9.22 with data_version 2.
     */
    character_id: string
    /**
     * If a unit is chosen as part of the Fates set mechanic, the chosen trait will be indicated by this field. Otherwise this field is excluded from the response.
     */
    chosen?: string
    /**
     * Unit name. This field is often left blank.
     */
    name: string
    /**
     * Unit rarity. This doesn't equate to the unit cost.
     */
    rarity: number // int32
    /**
     * Unit tier.
     */
    tier: number // int32
}
/**
 * SummonerDTO
 * represents a summoner
 */
export interface TftSummonerV1SummonerDTO {
    /**
     * Encrypted account ID. Max length 56 characters.
     */
    accountId: string
    /**
     * ID of the summoner icon associated with the summoner.
     */
    profileIconId: number // int32
    /**
     * Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
     */
    revisionDate: number // int64
    /**
     * Summoner name.
     */
    name: string
    /**
     * Encrypted summoner ID. Max length 63 characters.
     */
    id: string
    /**
     * Encrypted PUUID. Exact length of 78 characters.
     */
    puuid: string
    /**
     * Summoner level associated with the summoner.
     */
    summonerLevel: number // int64
}
/**
 * LobbyEventDTO
 */
export interface TournamentStubV4LobbyEventDTO {
    /**
     * The summonerId that triggered the event (Encrypted)
     */
    summonerId: string
    /**
     * The type of event that was triggered
     */
    eventType: string
    /**
     * Timestamp from the event
     */
    timestamp: string
}
/**
 * LobbyEventDTOWrapper
 */
export interface TournamentStubV4LobbyEventDTOWrapper {
    eventList: TournamentStubV4LobbyEventDTO[]
}
/**
 * ProviderRegistrationParameters
 */
export interface TournamentStubV4ProviderRegistrationParameters {
    /**
     * The region in which the provider will be running tournaments.
     *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
     */
    region: 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR'
    /**
     * The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).
     */
    url: string
}
/**
 * TournamentCodeParameters
 */
export interface TournamentStubV4TournamentCodeParameters {
    /**
     * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
     */
    allowedSummonerIds?: string[]
    /**
     * Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.
     */
    metadata?: string
    /**
     * The team size of the game. Valid values are 1-5.
     */
    teamSize: number // int32
    /**
     * The pick type of the game.
     *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
     */
    pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
    /**
     * The map type of the game.
     *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
     */
    mapType: 'SUMMONERS_RIFT' | 'TWISTED_TREELINE' | 'HOWLING_ABYSS'
    /**
     * The spectator type of the game.
     *              (Legal values:  NONE,  LOBBYONLY,  ALL)
     */
    spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
}
/**
 * TournamentRegistrationParameters
 */
export interface TournamentStubV4TournamentRegistrationParameters {
    /**
     * The provider ID to specify the regional registered provider data to associate this tournament.
     */
    providerId: number // int32
    /**
     * The optional name of the tournament.
     */
    name?: string
}
/**
 * LobbyEventDTO
 */
export interface TournamentV4LobbyEventDTO {
    /**
     * Timestamp from the event
     */
    timestamp: string
    /**
     * The type of event that was triggered
     */
    eventType: string
    /**
     * The summonerId that triggered the event (Encrypted)
     */
    summonerId: string
}
/**
 * LobbyEventDTOWrapper
 */
export interface TournamentV4LobbyEventDTOWrapper {
    eventList: TournamentV4LobbyEventDTO[]
}
/**
 * ProviderRegistrationParameters
 */
export interface TournamentV4ProviderRegistrationParameters {
    /**
     * The region in which the provider will be running tournaments.
     *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
     */
    region: 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR'
    /**
     * The provider's callback URL to which tournament game results in this region should be posted. The URL must be well-formed, use the http or https protocol, and use the default port for the protocol (http URLs must use port 80, https URLs must use port 443).
     */
    url: string
}
/**
 * TournamentCodeDTO
 */
export interface TournamentV4TournamentCodeDTO {
    /**
     * The tournament code.
     */
    code: string
    /**
     * The spectator mode for the tournament code game.
     */
    spectators: string
    /**
     * The lobby name for the tournament code game.
     */
    lobbyName: string
    /**
     * The metadata for tournament code.
     */
    metaData: string
    /**
     * The password for the tournament code game.
     */
    password: string
    /**
     * The team size for the tournament code game.
     */
    teamSize: number // int32
    /**
     * The provider's ID.
     */
    providerId: number // int32
    /**
     * The pick mode for tournament code game.
     */
    pickType: string
    /**
     * The tournament's ID.
     */
    tournamentId: number // int32
    /**
     * The tournament code's ID.
     */
    id: number // int32
    /**
     * The tournament code's region.
     *              (Legal values:  BR,  EUNE,  EUW,  JP,  LAN,  LAS,  NA,  OCE,  PBE,  RU,  TR)
     */
    region: 'BR' | 'EUNE' | 'EUW' | 'JP' | 'LAN' | 'LAS' | 'NA' | 'OCE' | 'PBE' | 'RU' | 'TR'
    /**
     * The game map for the tournament code game
     */
    map: string
    /**
     * The summonerIds of the participants (Encrypted)
     */
    participants: string[]
}
/**
 * TournamentCodeParameters
 */
export interface TournamentV4TournamentCodeParameters {
    /**
     * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
     */
    allowedSummonerIds?: string[]
    /**
     * Optional string that may contain any data in any format, if specified at all. Used to denote any custom information about the game.
     */
    metadata?: string
    /**
     * The team size of the game. Valid values are 1-5.
     */
    teamSize: number // int32
    /**
     * The pick type of the game.
     *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
     */
    pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
    /**
     * The map type of the game.
     *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
     */
    mapType: 'SUMMONERS_RIFT' | 'TWISTED_TREELINE' | 'HOWLING_ABYSS'
    /**
     * The spectator type of the game.
     *              (Legal values:  NONE,  LOBBYONLY,  ALL)
     */
    spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
}
/**
 * TournamentCodeUpdateParameters
 */
export interface TournamentV4TournamentCodeUpdateParameters {
    /**
     * Optional list of encrypted summonerIds in order to validate the players eligible to join the lobby. NOTE: We currently do not enforce participants at the team level, but rather the aggregate of teamOne and teamTwo. We may add the ability to enforce at the team level in the future.
     */
    allowedSummonerIds?: string[]
    /**
     * The pick type
     *              (Legal values:  BLIND_PICK,  DRAFT_MODE,  ALL_RANDOM,  TOURNAMENT_DRAFT)
     */
    pickType: 'BLIND_PICK' | 'DRAFT_MODE' | 'ALL_RANDOM' | 'TOURNAMENT_DRAFT'
    /**
     * The map type
     *              (Legal values:  SUMMONERS_RIFT,  TWISTED_TREELINE,  HOWLING_ABYSS)
     */
    mapType: 'SUMMONERS_RIFT' | 'TWISTED_TREELINE' | 'HOWLING_ABYSS'
    /**
     * The spectator type
     *              (Legal values:  NONE,  LOBBYONLY,  ALL)
     */
    spectatorType: 'NONE' | 'LOBBYONLY' | 'ALL'
}
/**
 * TournamentRegistrationParameters
 */
export interface TournamentV4TournamentRegistrationParameters {
    /**
     * The provider ID to specify the regional registered provider data to associate this tournament.
     */
    providerId: number // int32
    /**
     * The optional name of the tournament.
     */
    name?: string
}
/**
 * ActDTO
 */
export interface ValContentV1ActDTO {
    name: string
    /**
     * This field is excluded from the response when a locale is set
     */
    localizedNames?: ValContentV1LocalizedNamesDTO
    id: string
    isActive: boolean
}
/**
 * ContentDTO
 */
export interface ValContentV1ContentDTO {
    version: string
    characters: ValContentV1ContentItemDTO[]
    maps: ValContentV1ContentItemDTO[]
    chromas: ValContentV1ContentItemDTO[]
    skins: ValContentV1ContentItemDTO[]
    skinLevels: ValContentV1ContentItemDTO[]
    equips: ValContentV1ContentItemDTO[]
    gameModes: ValContentV1ContentItemDTO[]
    sprays: ValContentV1ContentItemDTO[]
    sprayLevels: ValContentV1ContentItemDTO[]
    charms: ValContentV1ContentItemDTO[]
    charmLevels: ValContentV1ContentItemDTO[]
    playerCards: ValContentV1ContentItemDTO[]
    playerTitles: ValContentV1ContentItemDTO[]
    acts: ValContentV1ActDTO[]
}
/**
 * ContentItemDTO
 */
export interface ValContentV1ContentItemDTO {
    name: string
    /**
     * This field is excluded from the response when a locale is set
     */
    localizedNames?: ValContentV1LocalizedNamesDTO
    id: string
    assetName: string
    /**
     * This field is only included for maps and game modes. These values are used in the match response.
     */
    assetPath?: string
}
/**
 * LocalizedNamesDTO
 */
export interface ValContentV1LocalizedNamesDTO {
    'ar-AE': string
    'de-DE': string
    'en-GB': string
    'en-US': string
    'es-ES': string
    'es-MX': string
    'fr-FR': string
    'id-ID': string
    'it-IT': string
    'ja-JP': string
    'ko-KR': string
    'pl-PL': string
    'pt-BR': string
    'ru-RU': string
    'th-TH': string
    'tr-TR': string
    'vi-VN': string
    'zh-CN': string
    'zh-TW': string
}
/**
 * AbilityCastsDTO
 */
export interface ValMatchV1AbilityCastsDTO {
    grenadeCasts: number // int32
    ability1Casts: number // int32
    ability2Casts: number // int32
    ultimateCasts: number // int32
}
/**
 * AbilityDTO
 */
export interface ValMatchV1AbilityDTO {
    grenadeEffects: string
    ability1Effects: string
    ability2Effects: string
    ultimateEffects: string
}
/**
 * CoachDTO
 */
export interface ValMatchV1CoachDTO {
    puuid: string
    teamId: string
}
/**
 * DamageDTO
 */
export interface ValMatchV1DamageDTO {
    /**
     * PUUID
     */
    receiver: string
    damage: number // int32
    legshots: number // int32
    bodyshots: number // int32
    headshots: number // int32
}
/**
 * EconomyDTO
 */
export interface ValMatchV1EconomyDTO {
    loadoutValue: number // int32
    weapon: string
    armor: string
    remaining: number // int32
    spent: number // int32
}
/**
 * FinishingDamageDTO
 */
export interface ValMatchV1FinishingDamageDTO {
    damageType: string
    damageItem: string
    isSecondaryFireMode: boolean
}
/**
 * KillDTO
 */
export interface ValMatchV1KillDTO {
    timeSinceGameStartMillis: number // int32
    timeSinceRoundStartMillis: number // int32
    /**
     * PUUID
     */
    killer: string
    /**
     * PUUID
     */
    victim: string
    victimLocation: ValMatchV1LocationDTO
    /**
     * List of PUUIDs
     */
    assistants: string[]
    playerLocations: ValMatchV1PlayerLocationsDTO[]
    finishingDamage: ValMatchV1FinishingDamageDTO
}
/**
 * LocationDTO
 */
export interface ValMatchV1LocationDTO {
    x: number // int32
    y: number // int32
}
/**
 * MatchDTO
 */
export interface ValMatchV1MatchDTO {
    matchInfo: ValMatchV1MatchInfoDTO
    players: ValMatchV1PlayerDTO[]
    coaches: ValMatchV1CoachDTO[]
    teams: ValMatchV1TeamDTO[]
    roundResults: ValMatchV1RoundResultDTO[]
}
/**
 * MatchInfoDTO
 */
export interface ValMatchV1MatchInfoDTO {
    matchId: string
    mapId: string
    gameLengthMillis: number // int32
    gameStartMillis: number // int64
    provisioningFlowId: string
    isCompleted: boolean
    customGameName: string
    queueId: string
    gameMode: string
    isRanked: boolean
    seasonId: string
}
/**
 * MatchlistDTO
 */
export interface ValMatchV1MatchlistDTO {
    puuid: string
    history: ValMatchV1MatchlistEntryDTO[]
}
/**
 * MatchlistEntryDTO
 */
export interface ValMatchV1MatchlistEntryDTO {
    matchId: string
    gameStartTimeMillis: number // int64
    teamId: string
}
/**
 * PlayerDTO
 */
export interface ValMatchV1PlayerDTO {
    puuid: string
    gameName: string
    tagLine: string
    teamId: string
    partyId: string
    characterId: string
    stats: ValMatchV1PlayerStatsDTO
    competitiveTier: number // int32
    playerCard: string
    playerTitle: string
}
/**
 * PlayerLocationsDTO
 */
export interface ValMatchV1PlayerLocationsDTO {
    puuid: string
    viewRadians: number // float
    location: ValMatchV1LocationDTO
}
/**
 * PlayerRoundStatsDTO
 */
export interface ValMatchV1PlayerRoundStatsDTO {
    puuid: string
    kills: ValMatchV1KillDTO[]
    damage: ValMatchV1DamageDTO[]
    score: number // int32
    economy: ValMatchV1EconomyDTO
    ability: ValMatchV1AbilityDTO
}
/**
 * PlayerStatsDTO
 */
export interface ValMatchV1PlayerStatsDTO {
    score: number // int32
    roundsPlayed: number // int32
    kills: number // int32
    deaths: number // int32
    assists: number // int32
    playtimeMillis: number // int32
    abilityCasts: ValMatchV1AbilityCastsDTO
}
/**
 * RecentMatchesDTO
 */
export interface ValMatchV1RecentMatchesDTO {
    currentTime: number // int64
    /**
     * A list of recent match ids.
     */
    matchIds: string[]
}
/**
 * RoundResultDTO
 */
export interface ValMatchV1RoundResultDTO {
    roundNum: number // int32
    roundResult: string
    roundCeremony: string
    winningTeam: string
    /**
     * PUUID of player
     */
    bombPlanter: string
    /**
     * PUUID of player
     */
    bombDefuser: string
    plantRoundTime: number // int32
    plantPlayerLocations: ValMatchV1PlayerLocationsDTO[]
    plantLocation: ValMatchV1LocationDTO
    plantSite: string
    defuseRoundTime: number // int32
    defusePlayerLocations: ValMatchV1PlayerLocationsDTO[]
    defuseLocation: ValMatchV1LocationDTO
    playerStats: ValMatchV1PlayerRoundStatsDTO[]
    roundResultCode: string
}
/**
 * TeamDTO
 */
export interface ValMatchV1TeamDTO {
    /**
     * This is an arbitrary string. Red and Blue in bomb modes. The puuid of the player in deathmatch.
     */
    teamId: string
    won: boolean
    roundsPlayed: number // int32
    roundsWon: number // int32
    /**
     * Team points scored. Number of kills in deathmatch.
     */
    numPoints: number // int32
}
/**
 * LeaderboardDTO
 */
export interface ValRankedV1LeaderboardDTO {
    /**
     * The shard for the given leaderboard.
     */
    shard: string
    /**
     * The act id for the given leaderboard. Act ids can be found using the val-content API.
     */
    actId: string
    /**
     * The total number of players in the leaderboard.
     */
    totalPlayers: number // int64
    players: ValRankedV1PlayerDTO[]
}
/**
 * PlayerDTO
 */
export interface ValRankedV1PlayerDTO {
    /**
     * This field may be omitted if the player has been anonymized.
     */
    puuid?: string
    /**
     * This field may be omitted if the player has been anonymized.
     */
    gameName?: string
    /**
     * This field may be omitted if the player has been anonymized.
     */
    tagLine?: string
    leaderboardRank: number // int64
    rankedRating: number // int64
    numberOfWins: number // int64
}
/**
 * ContentDTO
 */
export interface ValStatusV1ContentDTO {
    locale: string
    content: string
}
/**
 * PlatformDataDTO
 */
export interface ValStatusV1PlatformDataDTO {
    id: string
    name: string
    locales: string[]
    maintenances: ValStatusV1StatusDTO[]
    incidents: ValStatusV1StatusDTO[]
}
/**
 * StatusDTO
 */
export interface ValStatusV1StatusDTO {
    id: number // int32
    /**
     * (Legal values:  scheduled,  in_progress,  complete)
     */
    maintenance_status: 'scheduled' | 'in_progress' | 'complete'
    /**
     * (Legal values:  info,  warning,  critical)
     */
    incident_severity: 'info' | 'warning' | 'critical'
    titles: ValStatusV1ContentDTO[]
    updates: ValStatusV1UpdateDTO[]
    created_at: string
    archive_at: string
    updated_at: string
    /**
     * (Legal values: windows, macos, android, ios, ps4, xbone, switch)
     */
    platforms: 'windows' | 'macos' | 'android' | 'ios' | 'ps4' | 'xbone' | 'switch'
}
/**
 * UpdateDTO
 */
export interface ValStatusV1UpdateDTO {
    id: number // int32
    author: string
    publish: boolean
    /**
     * (Legal values: riotclient, riotstatus, game)
     */
    publish_locations: 'riotclient' | 'riotstatus' | 'game'
    translations: ValStatusV1ContentDTO[]
    created_at: string
    updated_at: string
}
