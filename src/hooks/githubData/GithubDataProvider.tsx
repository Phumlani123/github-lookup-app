import React from 'react';
import GitHubService from '../../services/github/Github';
import { GitHubActivityData, GitHubUserSearchData } from '../../services/github/types';
import { gitHubDataContext, GitHubDataContext } from './GitHubDataContext';

const GitHubDataProvider = ({ children }: { children: React.ReactNode | React.ReactNode[]}) => {
  const githubData = ProvideGitHubData();

  return (
    <gitHubDataContext.Provider value={githubData}>
      { children }
    </gitHubDataContext.Provider>
  )
}

export default GitHubDataProvider;

function ProvideGitHubData(): GitHubDataContext {
  

  return {
  }
}