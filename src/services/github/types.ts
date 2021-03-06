import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({     
    auth: process.env.REACT_APP_GH,    
    userAgent: 'phumlani123' 
});

export type GitHubActivityData = GetResponseDataTypeFromEndpointMethod<typeof octokit.activity.listPublicEventsForUser>;

export type GitHubActivity = GitHubActivityData[0];

export type GitHubUserSearchData = GetResponseDataTypeFromEndpointMethod<typeof octokit.search.users>

export type GitHubUser = GitHubUserSearchData['items'];

// export type GitHubUserData = GetResponseDataTypeFromEndpointMethod<typeof octokit.users.getByUsername>;