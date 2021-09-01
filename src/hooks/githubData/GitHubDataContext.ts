import { createContext } from 'react';
import { GitHubActivityData, GitHubUserSearchData } from "../../services/github/types";

interface IGitHubDataContext {
}

export type GitHubDataContext = IGitHubDataContext;

export const gitHubDataContext = createContext<GitHubDataContext | undefined>(undefined);