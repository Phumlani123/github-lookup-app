import { createContext } from 'react';
interface IGitHubDataContext {

    userActivityData: any;
    userSearchData: any;
    userData: any;
    loading: boolean;
    error: any;
    setUserActivityData: (data: any) => void;
    setUserSearchData: (data: any) => void;
    setUserData: (data: any) => void;
    clearUserData: () => void;
    
}


export type GitHubDataContext = IGitHubDataContext;


export const gitHubDataContext = createContext<GitHubDataContext | null>(null);
