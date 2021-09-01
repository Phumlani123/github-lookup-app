import { GitHubActivityData, GitHubUserSearchData } from "./types";

import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export default class GitHubService {
    static readonly GIT_API_URL = 'https://api.github.com/';

    public static async getUserActivity(username: string): Promise<GitHubActivityData> {
        try {
            
        } catch (error: any) {
            console.log(error.message);
            throw new Error(`User ${error.message}`);
        }
    }

    public static async searchUsers(username: string, page?: number): Promise<GitHubUserSearchData> {
      try {
        
      } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
      }
    }
}