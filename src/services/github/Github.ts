import { GitHubActivityData, GitHubUser, GitHubUserSearchData } from "./types";

import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export default class GitHubService {
    static readonly GIT_API_URL = 'https://api.github.com/';

    public static async getUserActivityData(username: string): Promise<GitHubActivityData> {
        try {
          const response = await octokit.activity.listPublicEvents({
              username: username
            });
            return response.data;
            
        } catch (error: any) {
            console.log(error.message);
            throw new Error(error.message);
        }
    }

    public static async getUserSearchData(username: string, page?: number): Promise<GitHubUserSearchData> {
      try {
        const response = await octokit.search.users({
          q: username,
          page: page
        });
        return response.data;
      } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
      }
    }
  

    public static async getUserData(username: string): Promise<GitHubUser> {
      try {
        const response = await octokit.search.users({
          q: username
        });
        return response.data.items;
      } catch (error: any) {
        console.log(error.message);
        throw new Error(error.message);
      }
    }
}