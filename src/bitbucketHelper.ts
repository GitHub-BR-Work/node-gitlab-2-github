import axios from 'axios';

export class BitbucketHelper {
  bitbucketApiBaseUrl: string;
  bitbucketToken: string;

  constructor(bitbucketToken: string) {
    this.bitbucketApiBaseUrl = 'https://api.bitbucket.org/2.0';
    this.bitbucketToken = bitbucketToken;
  }

  async fetchRepositories(workspace: string) {
    const url = `${this.bitbucketApiBaseUrl}/repositories/${workspace}`;
    const headers = { Authorization: `Bearer ${this.bitbucketToken}` };
    try {
      const response = await axios.get(url, { headers });
      return response.data.values;
    } catch (error) {
      console.error('Error fetching Bitbucket repositories:', error);
      throw error;
    }
  }

  async fetchIssues(repoSlug: string, workspace: string) {
    const url = `${this.bitbucketApiBaseUrl}/repositories/${workspace}/${repoSlug}/issues`;
    const headers = { Authorization: `Bearer ${this.bitbucketToken}` };
    try {
      const response = await axios.get(url, { headers });
      return response.data.values;
    } catch (error) {
      console.error('Error fetching Bitbucket issues:', error);
      throw error;
    }
  }

  async fetchPullRequests(repoSlug: string, workspace: string) {
    const url = `${this.bitbucketApiBaseUrl}/repositories/${workspace}/${repoSlug}/pullrequests`;
    const headers = { Authorization: `Bearer ${this.bitbucketToken}` };
    try {
      const response = await axios.get(url, { headers });
      return response.data.values;
    } catch (error) {
      console.error('Error fetching Bitbucket pull requests:', error);
      throw error;
    }
  }
}
