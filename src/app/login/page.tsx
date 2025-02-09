"use client";

import React, { useState } from 'react';

const LoginPage: React.FC = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Handle login with ID and password
        console.log('Logging in with ID and password:', { id, password });
    };

    const handleLoginWithX = () => {
        // Handle login with X
        console.log('Logging in with X');
    };

    return (
        <div>
            <h1>ログイン画面</h1>
            <div>
                <label>
                    ID:
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    パスワード:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleLogin}>ログイン</button>
            <button onClick={handleLoginWithX}>Xでログイン</button>
        </div>
    );
};

export default LoginPage;