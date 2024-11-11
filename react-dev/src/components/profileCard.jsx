import React, { useState } from "react";
import Layout from "../layout";
import { DEFAULT_USER_IMAGE_URL } from "./constants";
import Card from "../custom-components/card";
import { toast } from "react-toastify";

const ProfileCard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "John Doe",
        location: "San Francisco, CA",
        email: "johndoe@example.com",
        phone: "+1 (555) 123-4567",
        position: "Software Engineer",
        bio: "Passionate about creating dynamic user interfaces and solving complex problems.",
        profileImage: `${DEFAULT_USER_IMAGE_URL}`
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing)
        toast.success("Profile updated successfully");
    };

    return (
        <Layout>
            <div className="px-4">
                <Card className=" p-4 text-gray-700 text-xl font-semibold mb-4">Profile Information</Card>
                <div className="p-6 bg-white shadow-md rounded">
                    <div className="flex items-center">
                        <img
                            className="h-24 w-24 rounded-full object-cover mr-4"
                            src={profile.profileImage}
                            alt="Profile"
                        />
                        <div>
                            {isEditing ? (
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={profile.name}
                                        onChange={handleChange}
                                        className="text-xl font-semibold text-gray-800 mb-2 p-2 border rounded w-full"
                                        placeholder="Name"
                                    />
                                    <input
                                        type="text"
                                        name="position"
                                        value={profile.position}
                                        onChange={handleChange}
                                        className="text-gray-600 mt-2 p-2 border rounded w-full"
                                        placeholder="Position"
                                    />
                                    <textarea
                                        name="bio"
                                        value={profile.bio}
                                        onChange={handleChange}
                                        className="text-gray-600 mt-2 p-2 border rounded w-full"
                                        placeholder="Brief Bio"
                                        rows="3"
                                    />
                                    <input
                                        type="text"
                                        name="location"
                                        value={profile.location}
                                        onChange={handleChange}
                                        className="text-gray-600 mt-2 p-2 border rounded w-full"
                                        placeholder="Location"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={profile.email}
                                        onChange={handleChange}
                                        className="text-gray-600 mt-2 p-2 border rounded w-full"
                                        placeholder="Email"
                                    />
                                    <input
                                        type="text"
                                        name="phone"
                                        value={profile.phone}
                                        onChange={handleChange}
                                        className="text-gray-600 mt-2 p-2 border rounded w-full"
                                        placeholder="Phone"
                                    />
                                </div>
                            ) : (
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{profile.name}</h3>
                                    <p className="text-sm text-gray-500">{profile.position}</p>
                                    <p className="text-gray-600 mt-2">{profile.bio}</p>
                                    <div className="mt-4">
                                        <span className="text-gray-600 font-semibold">Location:</span> {profile.location}
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-gray-600 font-semibold">Email:</span> {profile.email}
                                    </div>
                                    <div className="mt-2">
                                        <span className="text-gray-600 font-semibold">Phone:</span> {profile.phone}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            onClick={toggleEdit}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            {isEditing ? "Save" : "Edit Profile"}
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ProfileCard;
