import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    const user = { username: 'user', password: 'password123' };

    if (username !== user.username || password !== user.password) {
      return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    }

    const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (error) {
    console.error('Error during authentication:', error);
    return new Response(JSON.stringify({ error: 'Authentication failed' }), { status: 500 });
  }
}
