"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FaSearch, FaGithub } from "react-icons/fa"; // Import cute icons from React Icons

const GitHubSearch = () => {
    const [query, setQuery] = useState(""); // Keyword for search
    const [repos, setRepos] = useState([]); // All repositories fetched
    const [userInfo, setUserInfo] = useState<any>(null); // User information
    const [filteredRepos, setFilteredRepos] = useState([]); // Filtered repositories
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const router = useRouter(); 
    
    // Fetch all repositories from GitHub
    useEffect(() => {
        const fetchUserInfoAndRepos = async () => {
            try {
                // Fetch user info
                const userResponse = await axios.get("https://api.github.com/users/HuynhMinhHai79");
                setUserInfo(userResponse.data); // Store user info

                // Fetch repositories
                const reposResponse = await axios.get(
                    "https://api.github.com/users/HuynhMinhHai79/repos"
                );
                setRepos(reposResponse.data); // Store repos
            } catch (err) {
                setError("Failed to fetch data from GitHub.");
            } finally {
                setLoading(false);
            }
        };

        fetchUserInfoAndRepos();
    }, []);

    // Handle search input change
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value); // Update the query state with the input value
    };

    // Handle search button click
    const handleSearchClick = () => {
        const filtered = repos.filter((repo: any) =>
            repo.name.toLowerCase().includes(query.toLowerCase()) || // Search in repository name
            (repo.description && repo.description.toLowerCase().includes(query.toLowerCase())) // Search in description
        );

        setFilteredRepos(filtered); // Update the filtered repos state
    };

    // Back button handler
    const handleBackClick = () => {
        router.back(); // Navigate to the previous page
    };

    if (loading) {
        return <div className="text-white text-center mt-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center mt-10">{error}</div>;
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-r from-red-400 to-indigo-600 text-white py-12">
                <div className="container mx-auto px-4">
                    {/* Back Button */}
                    <button
                        onClick={handleBackClick}
                        className="mb-10 py-2 px-4 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition duration-300"
                    >
                        Go Back
                    </button>

                    <h1 className="text-4xl font-bold text-center mb-12">GitHub Repository Search</h1>

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

                    {/* Search Input and Search Button */}
                    <div className="max-w-lg mx-auto bg-white/10 p-8 rounded-xl shadow-lg">
                        <div className="mb-6">
                            <input
                                type="text"
                                value={query}
                                onChange={handleSearch}
                                placeholder="Search your GitHub repositories..."
                                className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                            />
                        </div>
                        <button
                            onClick={handleSearchClick}
                            className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                        >
                            <FaSearch /> {/* Search icon */}
                            Search
                        </button>
                    </div>

                    {/* Display Repositories only after clicking the search button */}
                    {query && (
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredRepos.length > 0 ? (
                                filteredRepos.map((repo: any) => (
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
                                ))
                            ) : (
                                <p className="text-white text-center">No repositories found for `{query}`.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default GitHubSearch;
