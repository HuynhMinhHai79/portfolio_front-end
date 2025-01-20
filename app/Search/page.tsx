"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaGithub } from "react-icons/fa";

const GitHubSearch = () => {
  interface UserInfo {
    avatar_url: string;
    name: string;
    bio: string | null;
    followers: number;
    following: number;
    public_repos: number;
  }

  interface Repository {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
  }

  const [username, setUsername] = useState<string>(""); // Username state
  const [query, setQuery] = useState<string>(""); // Search query state
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null); // User info state
  const [repos, setRepos] = useState<Repository[]>([]); // User repositories
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]); // Filtered repositories
  const [error, setError] = useState<string>(""); // Error state

  const fetchUserInfoAndRepos = async (username: string) => {
    try {
      setLoading(true);
      setError("");

      // Fetch user info
      const userResponse = await axios.get(`https://api.github.com/users/${username}`);
      setUserInfo(userResponse.data);

      // Fetch user repositories
      const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepos(reposResponse.data);
      setFilteredRepos(reposResponse.data); // Initialize filteredRepos with all repos
    } catch (err: any) {
      setError(
        `Failed to fetch data for "${username}". ${
          err.response?.status === 404 ? "User not found." : err.message
        }`
      );
      setUserInfo(null);
      setRepos([]);
      setFilteredRepos([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // Update query state
  };

  const handleSearchClick = () => {
    const filtered = repos.filter((repo: Repository) =>
      repo.name.toLowerCase().includes(query.toLowerCase()) ||
      (repo.description && repo.description.toLowerCase().includes(query.toLowerCase()))
    );
    setFilteredRepos(filtered);
  };

  const handleFetchUser = () => {
    if (username.trim()) {
      fetchUserInfoAndRepos(username.trim());
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-400 to-indigo-600 text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">GitHub User and Repository Search</h1>

        {/* Input for Username */}
        <div className="max-w-lg mx-auto bg-white/10 p-8 rounded-xl shadow-lg mb-8">
          <div className="mb-4">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username..."
              className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>
          <button
            onClick={handleFetchUser}
            className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            <FaGithub />  Search
          </button>
        </div>

        {loading && <div className="text-center">Loading...</div>}

        {error && <div className="text-red-500 text-center mt-4">{error}</div>}

        {/* Display User Info */}
        {userInfo && (
          <div className="bg-white/10 p-6 rounded-xl shadow-lg mb-12">
            <div className="flex items-center mb-6">
              <img
                src={userInfo.avatar_url}
                alt="User Avatar"
                className="w-24 h-24 rounded-full mr-6"
              />
              <div>
                <h2 className="text-2xl font-bold">{userInfo.name}</h2>
                <p className="text-gray-300">{userInfo.bio || "No bio available"}</p>
                <p className="text-gray-300">Followers: {userInfo.followers}</p>
                <p className="text-gray-300">Following: {userInfo.following}</p>
                <p className="text-gray-300">Public Repos: {userInfo.public_repos}</p>
              </div>
            </div>
          </div>
        )}

        {/* Search Repositories */}
        {userInfo && (
          <div className="max-w-lg mx-auto bg-white/10 p-8 rounded-xl shadow-lg">
            <div className="mb-6">
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search repositories..."
                className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
            </div>
            <button
              onClick={handleSearchClick}
              className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaSearch /> Search Repositories
            </button>
          </div>
        )}

        {/* Display Repositories */}
        {filteredRepos.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRepos.map((repo: Repository) => (
              <div
                key={repo.id}
                className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <h2 className="text-xl font-bold">{repo.name}</h2>
                <p className="text-gray-300 mt-2">{repo.description || "No description available"}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mt-4 block"
                >
                  <FaGithub className="inline-block mr-2" />
                  View Repository
                </a>
              </div>
            ))}
          </div>
        ) : (
          userInfo && <p className="text-white text-center mt-8">No repositories found for `{query}`.</p>
        )}
      </div>
    </div>
  );
};

export default GitHubSearch;
