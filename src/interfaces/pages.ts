export interface IPage {
    Id: number;
    Title: string;
    TrainingArea: string;
    Active: boolean;
    Position: number;
    Name: string
}

export interface IPageResponse {
    Id: number;
    Title: string;
    TrainingArea: string;
    TrainingPageActive: boolean;
    TrainingAreaPosition: number;
    FileLeafRef: string;
}