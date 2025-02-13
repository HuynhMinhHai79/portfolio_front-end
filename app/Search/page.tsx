"use client";

import React, { useState } from "react";
import axios from "axios";
import { FaSearch, FaGithub, FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

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

    const [message, setMessage] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
    const [repos, setRepos] = useState<Repository[]>([]);
    const [filteredRepos, setFilteredRepos] = useState<Repository[]>([]);
    const [error, setError] = useState<string>("");

    const router = useRouter();

    const fetchUserInfoAndRepos = async (username: string) => {
        try {
            setLoading(true);
            setError("");

            const userResponse = await axios.get(`https://api.github.com/users/${username}`);
            setUserInfo(userResponse.data);

            const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
            setRepos(reposResponse.data);
            setFilteredRepos(reposResponse.data);
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                setError(
                    `Failed to fetch data for "${username}". ${err.response?.status === 404 ? "User not found." : err.message}`
                );
            } else {
                setError("An unexpected error occurred.");
            }
            setUserInfo(null);
            setRepos([]);
            setFilteredRepos([]);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
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

    // ✅ Gửi message đến API
    const handleSendMessage = async () => {
        if (!message.trim()) {
            alert("Message cannot be empty!");
            return;
        }

        try {
            const response = await fetch("/api/saveMessage", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();

            if (response.ok) {
                alert("Message sent successfully!");
                setMessage(""); // Xóa message sau khi gửi
            } else {
                alert(`Failed to send message: ${data.error}`);
            }
        } catch (error) {
            alert("An error occurred while sending the message.");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-red-400 to-indigo-600 text-white py-12">
            <div className="container mx-auto px-4">
                {/* Back Button */}
                <button
                    onClick={() => router.back()}
                    className="mb-6 px-6 py-2 bg-white/20 rounded-xl hover:bg-white/30 transition duration-300 flex items-center gap-2"
                >
                    <FaArrowLeft /> Back
                </button>

                <h1 className="text-4xl font-bold text-center mb-12">GitHub User and Repository Search</h1>

                {/* Input for Username */}
                <div className="max-w-lg mx-auto bg-white/10 p-8 rounded-xl shadow-lg mb-8">
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter GitHub username..."
                        className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    />
                    <button
                        onClick={handleFetchUser}
                        className="w-full mt-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        <FaGithub /> Search
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

                {/* Input for Message */}
                <div className="max-w-lg mx-auto bg-white/10 p-8 rounded-xl shadow-lg mb-8">
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Enter your message..."
                        className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="w-full mt-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                        Send Message
                    </button>
                </div>

                {/* Search Repositories */}
                {userInfo && (
                    <div className="max-w-lg mx-auto bg-white/10 p-8 rounded-xl shadow-lg">
                        <input
                            type="text"
                            value={query}
                            onChange={handleSearch}
                            placeholder="Search repositories..."
                            className="w-full p-4 rounded-xl bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                        <button
                            onClick={handleSearchClick}
                            className="w-full mt-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
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
                                <a href={repo.html_url} target="_blank" className="text-blue-400 hover:underline mt-4 block">
                                    <FaGithub className="inline-block mr-2" />
                                    View Repository
                                </a>
                            </div>
                        ))}
                    </div>
                ) : userInfo && <p className="text-white text-center mt-8">No repositories found for `{query}`.</p>}
            </div>
        </div>
    );
};

export default GitHubSearch;
