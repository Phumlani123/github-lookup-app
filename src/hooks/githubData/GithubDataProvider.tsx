import React from 'react';
import GitHubService from '../../services/github/Github';
import { GitHubActivityData, GitHubUser, GitHubUserData, GitHubUserSearchData } from '../../services/github/types';
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
  
  const [userSearchData, setSearchData] = React.useState<GitHubUserSearchData | null>(null);
  const [userActivityData, setActivityData] = React.useState<GitHubActivityData | null>(null);
  const [userData, setData] = React.useState<GitHubUserData | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const setUserActivityData = async (username: string) => {
    setLoading(true);
    const data = await GitHubService.getUserActivityData(username);
    if (data) {
      setActivityData(data);
      setLoading(false);
      setError(null);
    } else {
      setError('Error retrieving user activity data');
      setLoading(false);
    }
  }

  const setUserSearchData = async (username: string, page?: number) => {
    setLoading(true);
    const data = await GitHubService.getUserSearchData(username);
    // alert(data);
    if(data) {
      setSearchData(data);
      setLoading(false);
      setError(null);
    } else {
      setError('Error retrieving user activity data');
      setLoading(false);
    }
  }

  const setUserData = async (username: string) => {
    setLoading(true);
    const data = await GitHubService.getUserData(username);
    if(data) {
      setData(data);
      console.log('response', data);
      setLoading(false);
      setError(null);
    } else {
      setError('Error retrieving user activity data');
      setLoading(false);
    }
  }
  
  console.log('response user data', userData);

  return {
    userSearchData,
    userActivityData,
    userData,
    setUserActivityData,
    setUserSearchData,
    setUserData,
    loading,
    error
  }

}
