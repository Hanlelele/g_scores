export type Score = {
    registration_Number: string;
    math: number;
    literature: number;
    english: number;
    physics: number;
    chemistry: number;
    biology: number;
    history: number;
    geography: number;
    civic_education: number;
    language_code: number;
};
export type StatisticsData = {
    name: string;
    count: number;
};

export type StatisticsResponse = {
    success: boolean;
    message: string;
    data: {
        scoreDistribution: StatisticsData[];
    };
};

export type SearchResponse = {
    success: boolean;
    message: string;
    data: Score;
};

export type TopScore = {
    registration_Number: string;
    math: number;
    physics: number;
    chemistry: number;
    totalScore: number;
};

export type TopResponse = {
    success: boolean;
    message: string;
    data: TopScore[];
};

export type AverageScore = {
    math: number;
    literature: number;
    english: number;
    civic_education: number;
};

export type AverageResponse = {
    success: boolean;
    message: string;
    data: AverageScore;
};
