
    export async function loginUser(payload) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Login failed");
    return data;
    }

    export async function getProfile(email) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/profile?email=${email}`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Profile fetch failed");
    return data;
    }
